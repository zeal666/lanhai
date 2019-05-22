<?php
/**
 * Created by 微小区.
 * User: 晓锋
 * Date: 2016/10/25
 * Time: 上午11:47
 * Function:
 */
global $_GPC,$_W;
$do = $_GPC['do'];
$GLOBALS['frames'] = $this->NavMenu($do);
$op = !empty($_GPC['op'])?$_GPC['op']:'list';
$id = intval($_GPC['id']);
//判断是否是操作员
$user = $this->user();
if($op == 'list'){
    //公告搜索
    $condition = '';
    if (!empty($_GPC['title'])) {
        $condition .= " AND title LIKE '%{$_GPC['title']}%'";
    }
    if ($user) {
        $condition .=" AND uid='{$_W['uid']}'";
    }

    //管理公告reason
    $pindex = max(1, intval($_GPC['page']));
    $psize  = 10;
    $sql    = "select * from ".tablename("xcommunity_wnotice")."where  uniacid = {$_W['uniacid']} $condition order by createtime desc LIMIT ".($pindex - 1) * $psize.','.$psize;
    $list   = pdo_fetchall($sql);
    $total  = pdo_fetchcolumn('select count(*) from'.tablename("xcommunity_wnotice")."where  uniacid = {$_W['uniacid']} $condition");
    $pager  = pagination($total, $pindex, $psize);
    //删除
    if ($_W['ispost']) {
        $ids=$_GPC['ids'];
        if (!empty($ids)) {
            foreach ($ids as $key => $id) {
                pdo_delete('xcommunity_wnotice',array('id' => $id));
            }
            message('删除成功',referer(),'success');
        }
    }
    include $this->template('web/wnotice/list');
}elseif ($op == 'add') {

    if(!empty($id)){
        $item = pdo_fetch("SELECT * FROM".tablename('xcommunity_wnotice')."WHERE id=:id",array(':id' =>$id));

        $condition = " weid=:uniacid ";
        $params[':uniacid'] = $_W['uniacid'];
        if($item['province']){
            $condition .= " AND province=:province ";
            $params[':province'] = $item['province'];
        }
        if($item['city']){
            $condition .= " AND city=:city";
            $params[':city'] = $item['city'];
        }
        if($item['dist']){
            $condition .= " AND dist=:dist ";
            $params[':dist'] = $item['dist'];
        }
        $regions = pdo_fetchall("SELECT * FROM".tablename('xcommunity_region')."WHERE $condition",$params);
        $regs = iunserializer($item['regionid']);
    }

    //添加公告
    if($_W['ispost']){
        $birth = $_GPC['birth'];
        $regionid = explode(',',$_GPC['regionid']);
        $data = array(
            'uniacid'       => $_W['uniacid'],
            'title'      =>$_GPC['title'],
            'createtime' =>$_W['timestamp'],
            'content'     =>htmlspecialchars_decode($_GPC['content']),
            'thumb'     => tomedia($_GPC['thumb']),
            'province' => $birth['province'],
            'city' => $birth['city'],
            'dist' => $birth['district']
        );
        if ($user) {
            $data['uid'] = $_W['uid'];
        }
        if ($user['regionid']) {
            $data['regionid'] = serialize(array(0 => $user['regionid']));

        }else{
            $data['regionid'] = serialize($regionid);
        }
        if(empty($id)){
            pdo_insert("xcommunity_wnotice",$data);
            $id = pdo_insertid();
        }else{
            pdo_update("xcommunity_wnotice",$data,array('id'=>$id));
        }

        message('提交成功',referer(), 'success');
    }
    include $this->template('web/wnotice/add');
}elseif ($op == 'delete') {
    //删除公告
    pdo_delete("xcommunity_wnotice",array('id'=>$id));
    message('删除成功',referer(), 'success');
}

