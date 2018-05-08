/**
 * Created by Administrator on 2017/5/5.
 */
// 摇一摇
var SHAKE_THRESHOLD = 1600;
var last_update = 0;
var x = y = z = last_x = last_y = last_z = 0;

if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', deviceMotionHandler, false);
} else {
    alert('本设备不支持摇一摇事件');
}

function deviceMotionHandler(eventData) {
    var acceleration = eventData.accelerationIncludingGravity;
    var curTime = new Date().getTime();

    if ((curTime - last_update) > 100) {
        var diffTime = curTime - last_update;
        last_update = curTime;
        x = acceleration.x;
        y = acceleration.y;
        z = acceleration.z;
        var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
        var status = document.getElementById("status");

        if (speed > SHAKE_THRESHOLD) {
            openswt();
        }
        last_x = x;
        last_y = y;
        last_z = z;
    }
}
// function doResult() {
//  window.location.href = "tel:";}
function openswt() {window.location.href = "/call.html?e=yao&p=yao";}
document.write('<div style="position:fixed;top:15%;right:0px;width:55px;z-index:10000;"><a href="javascript:void(0);" onclick="openZoosUrl(\'chatwin\',\'&e=yaoyiyao\');return false;"><img src="/images/yao.gif" width="55" border="0"></a></div>');
