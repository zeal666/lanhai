<?php
/**
 * [WeEngine System] Copyright (c) 2014 WE7.CC
 * WeEngine is NOT a free software, it under the license terms, visited http://www.we7.cc/ for more details.
 */
define('IN_MOBILE', true);
global $_W,$_GPC;
require_once IA_ROOT.'/framework/bootstrap.inc.php';
require_once IA_ROOT.'/app/common/bootstrap.app.inc.php';
load()->app('common');
load()->app('template');

$sl = $_GPC['ps'];
$params = @json_decode(base64_decode($sl), true);

if($_GPC['done'] == '1') {
    $sql = 'SELECT * FROM ' . tablename('core_paylog') . ' WHERE `tid`=:tid';
    $pars = array();
    $pars[':tid'] = $params['out_trade_no'];
    $log = pdo_fetch($sql, $pars);
    if(!empty($log) && !empty($log['status'])) {
        if (!empty($log['tag'])) {
            $tag = iunserializer($log['tag']);
            $log['uid'] = $tag['uid'];
        }
        $site = WeUtility::createModuleSite($log['module']);

        if(!is_error($site)) {
            $method = 'payResult';
            if (method_exists($site, $method)) {
                $ret = array();
                $ret['uniacid'] = $log['uniacid'];
                $ret['uniacid'] = $log['uniacid'];
                $ret['result'] = 'success';
                $ret['type'] = $log['type'];
                $ret['from'] = 'return';
                $ret['tid'] = $log['tid'];
                $ret['uniontid'] = $log['uniontid'];
                $ret['user'] = $log['openid'];
                $ret['fee'] = $log['fee'];
                $ret['tag'] = $tag;
                $ret['is_usecard'] = $log['is_usecard'];
                $ret['card_type'] = $log['card_type'];
                $ret['card_fee'] = $log['card_fee'];
                $ret['card_id'] = $log['card_id'];
                exit($site->$method($ret));
            }
        }
    }
}
$auth = sha1($sl . $_W['uniacid'] . trim($_GPC['key']));
if($auth != $_GPC['auth']) {
    exit('参数传输错误.');
}

$json = json_encode($params);

load()->func('communication');
$url = 'https://pay.hsyunfu.com/pay/gateway.do';
$response = ihttp_post($url,$json);

if (is_error($response)) {
    return $response;
}
$result = json_decode($response['content'],true);

if($result['result_code']){
    itoast("抱歉，发起支付失败，具体原因为：“{$result['err_code']}:{$result['err_msg']}”。请及时联系站点管理员。");exit();
}
$content = json_decode($result['pay_info'],true);
$wOpt['appId'] = $content['appId'];
$wOpt['timeStamp'] = $content['timeStamp'];
$wOpt['nonceStr'] = $content['nonceStr'];
$wOpt['package'] = $content['package'];
$wOpt['signType'] = $content['signType'];
$wOpt['paySign'] = $content['paySign'];
?>
<script type="text/javascript">
    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
        WeixinJSBridge.invoke('getBrandWCPayRequest', {
            'appId' : '<?php echo $wOpt['appId'];?>',
            'timeStamp': '<?php echo $wOpt['timeStamp'];?>',
            'nonceStr' : '<?php echo $wOpt['nonceStr'];?>',
            'package' : '<?php echo $wOpt['package'];?>',
            'signType' : '<?php echo $wOpt['signType'];?>',
            'paySign' : '<?php echo $wOpt['paySign'];?>'
        }, function(res) {
            if(res.err_msg == 'get_brand_wcpay_request:ok') {
                window.location.href += '&done=1';
            } else {
                //alert('启动微信支付失败, 请检查你的支付参数. 详细错误为: ' + res.err_msg);
                history.go(-1);
            }
        });
    }, false);
</script>