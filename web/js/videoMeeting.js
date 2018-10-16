var sdkappid = 1400140117;
var users = [{
  "userId": "Web_trtc_01",
  "userToken": "eJxlj0tPg0AUhff8CsK2Ru-wcMTERWmpkELjs6ibCTJTc0uY0mEgReN-V7GJJJ7krr4v9*R8GKZpWg-J-WleFLtWaqb7WljmpWmBdfIH6xo5yzVzFP8HxaFGJVi*0UINkHieZwOMHeRCatzg0cjEK9NKFwzISGp4yYam3y8uwPcRQscKvg0wDR9n8YwH60yk1aKc*Isgym9uAV-WkdyGzXlW6iI9gGzVU1J12ymGUx3w630ct1HNu*XzMlPzcO*5dzA5e6dyTld9A-2FwmQl4qtRpcZKHGc51HZ9Sv0R7YRqcCcHwQbiEduBn1jGp-EFsmJfTQ__"
}, {
  "userId": "Web_trtc_02",
  "userToken": "eJxlj1FPgzAUhd-5FaSvGNMWGoJvC8MFFdDhZD41rJSu4BiUKiyL-13FJZJ4kvv0fbkn52yYpgmeH9LrnLHje6OpPrUcmDcmgODqD7atLGiuqa2Kf5CPrVSc5qXmaoKIEIIhnDuy4I2WpbwYGd9RrTSjEM*kvqjp1PT7xYHw*xBy54oUE4yCVz988qETuBUSuOuGZL8Sb2IlS-*wXGdJHVrDJniMt4nOX4bdchHuF4n2unVvqW3KiApQHVUnMd4nMVObNLpTMeK3mVVF6ZizWaWWB36ZZbvY8VzXm9EPrnp5bCYBQ0QQtuFPgPFpfAHAk1*j"
}, {
  "userId": "Web_trtc_03",
  "userToken": "eJxlj1FrgzAUhd-9FZLXjZnEinXQB1viNpwUSVf3Fqym3aVN4jSVtmP-fZsrTNiB*-R93MP5cFzXRatnfldWlTlqK*y5kci9dxFGt3*waaAWpRV*W-*D8tRAK0W5tbIdIAmCgGI8dqCW2sIWrkYhN8K2thLYH0ldvRdD0**XCcbfR0g4VmA3wIzliyeWlPwmO*bTOTPe4eCx91Nz9uq4MBS-psmjTllZMFCWqhjml6zLwUv6l3SlFj1f83i5WVLAb3xnHqpIybW5BNNCF-t8NhtVWlDyOssP6SQKw2hEe9l2YPQgUEwCQn38E*R8Ol*Eol8X"
}, {
  "userId": "Web_trtc_04",
  "userToken": "eJxlj1FPgzAUhd-5FQ2vGmkLldTEB2nUbcBkGWTCS4O0sG4ZkK5zOuN-V3GJJJ7kPn1f7sn5sAAAdhotr8qq6g6t4ea9lza4ATa0L-9g3yvBS8NdLf5B*dYrLXlZG6kHiAghGMKxo4RsjarV2VjJF260qTj0RtJebPnQ9PvFg-D7EPLHimoGGN9nbLpgAQ2j2C3qjm3EBmm-aGfrMI0dw7JlnuNJe5Q6cdbPidNMm5QtIioeL*Bh610TiR-yUx4lAZ1nJlnd7eaz4yl*KkIaTPLbUaVRO3me5frYo75PR-RV6r3q2kHAEBGEXfgT2-q0vgAN013e"
}, {
  "userId": "lystest",
  "userToken": "eJxlj1FPgzAUhd-5FYTXGW1LK4uJD8vEbLMqjOHkqUEoUHGsth3bYvzvKi6xiSe5T9*Xe3I*HNd1vRVNzvOi2O46w8xRcs*9cj3gnf1BKUXJcsN8Vf6D-CCF4iyvDFcDhIQQBIDtiJJ3RlTiZLwdteHaWIIuWza0-H7AAHwfhIGtiHqA92E6ncc3dRMkT*1on*j1eIRwljU9zuD4dRWEvL9bzghd4FQV79FlPK*XTa32s92tnj5IGEkaVvL5UMURpBOq0oVqJ*uXDSaPFzi*tiqN2PDTJD9ABGDft2jPlRbbbhAQgAQiH-zEcz6dL-XHXXg_"
}, {
  "userId": "libao",
  "userToken": "eJxlj0tLw0AUhff5FWG2is7k0bSCi0aaYrUvbEJxM0wy0*aS13Qyponif1djwYAH7ur7LofzYZimiXbPLzcsSaq3UlPdSYHMOxNhdP0HpQROmaa24v*gaCUoQdlBC9VD4rquhfHQAS5KDQe4GDnErBrgmme07-j9dzD*PkK8oQLHHi5n4cOj-xTF*Z4VkEcp7vajzZVIgiyVxyicz9dq9O4Q3mSrIN*dpjCbnsZpBh2IWCyKdtOG5*2yLnxPFhFfvK62EExYY8e34Dvn*0GlhkJcBtme5eKJNx7QRqgaqrIXLExcYtn4J8j4NL4AzPlenw__"
}];



function onLocalStreamAdd(info) {
  if (info.stream && info.stream.active === true) {
    var id = "local";
    var video = document.getElementById(id);
    if (!video) {
      createVideoElement(id, true);
    }
    var video = document.getElementById(id)
    video.srcObject = info.stream;
    video.muted = true
    video.autoplay = true
    video.playsinline = true
  }
}

function onRemoteStreamUpdate(info) {
  console.debug(info)
  // console.debug(info)
  if (info.stream && info.stream.active === true) {
    var id = info.videoId;
    var video = document.getElementById(id);
    if (!video) {
      video = createVideoElement(id);
    }
    video.srcObject = info.stream;
  } else {
    // console.log('欢迎用户' + info.userId + '加入房间');
  }
}


function onKickout() {
  alert("on kick out!");
}

function quitRTC() {
  RTC.quit();

  window.close();

  // $("#video-section").hide();
  // $("#input-container").show();
  // $("#remote-video-wrap").html("");
}

function onRelayTimeout(msg) {
  alert("onRelayTimeout!" + (msg ? JSON.stringify(msg) : ""));
}

function onRemoteStreamRemove(info) {
  // console.log(info.userId + ' 断开了连接');
  var videoNode = document.getElementById(info.videoId);
  if (videoNode) {
    videoNode.srcObject = null;
    document.getElementById(info.videoId).parentElement.parentElement.remove();
  }
}

function onWebSocketClose() {
  RTC.quit();
}

function initRTC(opts) {
  window.RTC = new WebRTCAPI({
    userId: opts.userId,
    userSig: opts.userSig,
    sdkAppId: opts.sdkappid,
    accountType: opts.accountType
  }, function () {
    RTC.createRoom({
      roomid: opts.roomid * 1,
      privateMapKey: opts.privateMapKey,
      role: "ed640",
    }, function (info) {
      console.warn("init succ", info)
    }, function (error) {
      console.error("init error", error)
    });
  }, function (error) {
    // console.warn("init error", error)
  });

  // 远端流新增/更新
  RTC.on("onRemoteStreamUpdate", onRemoteStreamUpdate)
  // 本地流新增
  RTC.on("onLocalStreamAdd", onLocalStreamAdd)
  // 远端流断开
  RTC.on("onRemoteStreamRemove", onRemoteStreamRemove)
  // 重复登录被T
  RTC.on("onKickout", onKickout)
  // 服务器超时
  RTC.on("onRelayTimeout", onRelayTimeout)

  RTC.on("onErrorNotify", function (info) {
    console.error(info)
    if (info.errorCode === RTC.getErrorCode().GET_LOCAL_CANDIDATE_FAILED) {
      // alert( info.errorMsg )
    }
  });
  RTC.on("onStreamNotify", function (info) {
    // console.warn('onStreamNotify', info)
  });
  RTC.on("onWebSocketNotify", function (info) {
    // console.warn('onWebSocketNotify', info)
  });
  RTC.on("onUserDefinedWebRTCEventNotice", function (info) {
    // console.error( 'onUserDefinedWebRTCEventNotice',info )
  });
}

function push() {
  var roomid = $('#roomid').val();
  var userId = $('#userId').val();
  var userSig = findUserToken(userId);

  // $('#c_roomid').html(roomid);
  // $('#c_userid').html(userId);

  initRTC({
    "userId": userId,
    "userSig": userSig,
    "sdkappid": sdkappid,
    "accountType": 1, // 随便传一个值，现在没有啥用处
    "roomid": roomid
  });
}

function createVideoElement(id, isLocal) {
  var videoDiv;
  var video = '<video id="' + id + '" autoplay ' + (isLocal ? 'muted' : '') + ' playsinline ></video>';
  if (isLocal) {
    videoDiv = document.createElement("div");
    videoDiv.className = "video-box";
    videoDiv.innerHTML = video + '<div class="video-name">小明 <span>管理员授权主讲</span></div>';
    document.querySelector("#speaker").innerHTML = '';
    document.querySelector("#speaker").appendChild(videoDiv);
  } else {
    videoDiv = document.createElement("div");
    videoDiv.className = "swiper-slide";

    videoDiv.innerHTML = '<div class="video-box">' + video + '<a href = "javascript:;" class="noMicrophone"></a><div class="video-name">张三</div></div>';
    document.querySelector("#swiper-wrap").appendChild(videoDiv);
  }
  return document.getElementById(id);
}


function findUserToken(userid) {
  var userToken = null;
  for (var i = 0, len = users.length; i < len; i++) {
    var user = users[i];
    if (user.userId === userid) {
      userToken = user.userToken;
      break;
    }
  }
  return userToken;
}

function audioToggle() {

}

//是否关闭麦克风
function microphoneToggle(obj) {
  if ($(obj).hasClass('disabled')) {
    RTC.openAudio();
    $(obj).find("span").text("关闭麦克风");
  } else {
    RTC.closeAudio();
    $(obj).find("span").text("打开麦克风");
  }
  $(obj).toggleClass('disabled');
}

//是否关闭摄像头
function cameraToggle(obj) {
  if ($(obj).hasClass('disabled')) {
    RTC.openVideo();
    $(obj).find("span").text("关闭摄像头");
  } else {
    RTC.closeVideo();
    $(obj).find("span").text("打开摄像头");
  }
  $(obj).toggleClass('disabled');
}

// //是否关闭扬声器
// function audioToggle(obj) {
//   if ($(obj).hasClass('disabled')) {
//     //   RTC.openAudio();
//     $(obj).find("span").text("关闭扬声器");
//   } else {
//     //   RTC.closeAudio();
//     $(obj).find("span").text("打开扬声器");
//   }
//   $(obj).toggleClass('disabled');
// }

function changeLayout() {
  $("#videoMeeting").toggleClass("meetingLayout");
}



function getMediaStream(type, callback) {
  if (streams && streams[type]) {
    callback(streams[type])
  } else if (type === 'screen') {
    /*
    | 参数                   | 类型       | 是否必须       | 描述            |
    | -------------------- | -------- | ------------- |
    | opts         | Object | 否 | 可以传空对象 {}    |
    | succ         | function |是 |  成功回调      |
    | fail         | function |否 |  失败回调      |

    #### opts 的参数定义

    | 参数                   | 类型       | 是否必须       | 描述            |
    | -------------------- | -------- | ------------- |
    | screen         | Boolean |否 | 是否采集屏幕分享 ,默认false   |
    | screenSources | string   |否 | 屏幕分享采集的媒介 用半角逗号隔开， 可选选项包括  screen window tab audio | 具体表现请参考下图 |
    | attributes         | Object |否 | 是否采集屏幕分享 ,默认false   |
    | videoDevice         | Device |否 | 指定设备，getVideoDevices 获取的device item   |
    | audioDevice         | Device |否 | 指定设备，getVideoDevices 获取的audio item   |

    #### attributes 的参数定义
    | width         | Boolean |否 | 分辨率宽度  |
    | height         | Boolean |否 | 分辨率高度 |
    | frameRate         | Boolean |否 | 帧率   |

    */
    RTC.getLocalStream({
      screen: true,
      screenSources: screenSources.join(","),
      attributes: {
        width: 320,
        height: 320,
        frameRate: 10
      }
    }, function (info) {
      streams['screen'] = info.stream
      console.debug('getLocalStream succ', info.stream)
      callback(info.stream)
    }, function (error) {
      console.error('failed', error)
    });
  } else if (type === 'camera') {
    RTC.getLocalStream({
      attributes: {
        width: 640,
        height: 320,
        frameRate: 20
      }
    }, function (info) {
      console.error('camera')
      console.debug('getLocalStream succ', info.stream)
      streams['camera'] = info.stream
      callback(info.stream)
    }, function (error) {
      console.error('failed', error)
    });
  }
}

function getScreen() {
  getMediaStream('screen', function () {
    startRTC('screen');
  })
}

function getCamera() {
  getMediaStream('camera', function () {
    startRTC('camera');
  })
}