//时间格式化
Date.prototype.Format = function(fmt) {
  //author: meizz
  var o = {
    'M+': this.getMonth() + 1, //月份
    'd+': this.getDate(), //日
    'h+': this.getHours(), //小时
    'm+': this.getMinutes(), //分
    's+': this.getSeconds(), //秒
    'q+': Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds(), //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + '').substr(4 - RegExp.$1.length)
    );
  for (var k in o)
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      );
  return fmt;
};
//设置时间
Date.prototype.setStr = function(date, str) {
  var all = date.split(/[-: ]/);
  var newDate = new Date();
  var str1 = str.split(/[-: ]/);
  var o = {
    yyyy: function(y) {
      newDate.setFullYear(y);
    },
    MM: function(M) {
      newDate.setMonth(M);
    }, //月份
    dd: function(d) {
      newDate.setDate(d);
    }, //日
    hh: function(h) {
      newDate.setHours(h);
    }, //小时
    mm: function(m) {
      newDate.setMinutes(m);
    }, //分
    ss: function(s) {
      newDate.setSeconds(s);
    }, //秒
  };

  for (var a in o) {
    if (new RegExp('(' + a + ')').test(str)) {
      var index = str1.indexOf(a);
      o[a](all[index]);
    }
  }
  return newDate;
};

function setPoints(_self, data, name, range) {
  var point = [];
  if (range == undefined || range == '') {
    if (new Date().getMinutes() >= 30) {
      range = new Date().Format('hh:30:00');
    } else {
      range = new Date().Format('hh:00:00');
    }

    // range = new Date().Format('hh:mm:ss');
    // var time = new Date();
    // var hour = parseInt(time.getHours());
    // var minute = 0;
    // if (parseInt(time.getMinutes()) >= 30) {
    //   minute = 30;
    // }
    // time.setHours(hour);
    // time.setMinutes(minute);
    // if (new Date() > time) {
    //   range = time.Format('hh:mm:ss');
    // }
  }
  console.log(range);

  for (var key in data) {
    var item = data[key];
    if (!item) continue;
    var datum = {};
    var long;
    var mileage = 0;

    var length = item.length;
    var index = _.findLastIndex(item, function(o) {
      return (
        new Date(o.time) <=
        new Date(new Date().Format('yyyy-MM-dd') + ' ' + range)
      );
    });
    if (index != -1 && index < length) {
      length = index + 1;
    }

    for (var j = 1; j < length; j++) {
      if (JSON.stringify(datum) == '{}') {
        datum = item[0];
        long = 0;
        var geoc = new BMap.Geocoder();
        (function(j, datum) {
          geoc.getLocation(new BMap.Point(datum.lng, datum.lat), function(rs) {
            datum['address'] = rs.address;
          });
        })(j, datum);
      }

      if (
        map
          .getDistance(
            new BMap.Point(datum.lng, datum.lat),
            new BMap.Point(item[j].lng, item[j].lat)
          )
          .toFixed(2) < 150
      ) {
        long++;
        mileage += parseInt(
          map.getDistance(
            new BMap.Point(datum.lng, datum.lat),
            new BMap.Point(item[j].lng, item[j].lat)
          )
        );

        if (j == length - 1) {
          datum.date = key;
          datum.long = long;
          datum.mileage = mileage;
          datum.name = name;
          var start = new Date()
            .setStr(datum.time, 'yyyy-MM-dd hh:mm:ss')
            .valueOf();
          var end = new Date()
            .setStr(item[j].time, 'yyyy-MM-dd hh:mm:ss')
            .valueOf();
          var duration = (end - start) / 1000 / 60;
          datum.duration = duration;
          datum.end = item[j].time;
          point.push(datum);
        }
      } else {
        if (long > 0) {
          datum.date = key;
          datum.long = long;
          datum.mileage = mileage;
          datum.name = name;

          var start = new Date()
            .setStr(datum.time, 'yyyy-MM-dd hh:mm:ss')
            .valueOf();
          var end = new Date()
            .setStr(item[j].time, 'yyyy-MM-dd hh:mm:ss')
            .valueOf();
          var duration = (end - start) / 1000 / 60;
          datum.duration = duration;
          datum.end = item[j].time;
          point.push(datum);
        }
        datum = item[j];
        long = 0;
      }
    }
  }

  _self.$data.mileage.push({
    name: name,
    point: point,
  });
}
