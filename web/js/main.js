var ip = '/proxy/test/';

$(function() {
  /*
     * -------------------------------------------------
     * --------------------------------------------
     */
  // 销售之星背景样式
  $('#sellers li:even').addClass('gray');

  // 选项卡
  /*$('#tabBox li').on('click', function() {
        var num = $('#tabBox li').index(this);
        $('#tabBox li a').removeClass('current');
        $(this).find('a').addClass('current');
        $('.contentsbox-1').hide();
        $('.contentsbox-1').eq(num).show();
        if (num == 0) {
            $('#refusebtn,#agreebtn').show();
            $('#agreebtn-1').hide();
        } else if (num == 1) {
            $('#refusebtn,#agreebtn').hide();
            $('#agreebtn-1').show();
        }
    });*/

  // 遮罩层高度
  $('.layer').css({
    height: $(document).height(),
  });
  $('.layer-1').css({
    height: $(document).height() - 110,
  });
  // 编辑公司
  $('#edit-com').on('click', function() {
    $('#edit-company').show();
    $('.layer').show();
  });
  $('#edit-company .a-closed,#edit-company #submitBtn').on('click', function() {
    $('#edit-company').hide();
    $('.layer').hide();
  });

  // 模拟select
  $('#asselect').on('click', function() {
    $('#edit-company .selectBox').show();
    $('#edit-company i')
      .removeClass('select-icon')
      .addClass('select-icon-1');
  });
  $('#edit-company i').on('click', function() {
    var iconStyle = $(this).attr('class');
    if (iconStyle == 'select-icon') {
      $('#edit-company .selectBox').show();
      $('#edit-company i')
        .removeClass('select-icon')
        .addClass('select-icon-1');
    } else if (iconStyle == 'select-icon-1') {
      $('#edit-company .selectBox').hide();
      $('#edit-company i')
        .removeClass('select-icon-1')
        .addClass('select-icon');
    }
  });
  $('#edit-company .selectBox a').on('click', function() {
    var num = $('#edit-company .selectBox a').index(this);
    $('#edit-company .selectBox').hide();
    $('#edit-company i')
      .removeClass('select-icon-1')
      .addClass('select-icon');
    $('#asselect').attr(
      'value',
      $('#edit-company .selectBox a')
        .eq(num)
        .text()
    );
  });
  // 模拟select1
  $('#asselect-1').on('click', function() {
    $('#c-box .selectBox').show();
    $('#c-box i')
      .removeClass('select-icon')
      .addClass('select-icon-1');
  });
  $('#c-box i').on('click', function() {
    var iconStyle = $(this).attr('class');
    if (iconStyle == 'select-icon') {
      $('#c-box .selectBox').show();
      $('#c-box i')
        .removeClass('select-icon')
        .addClass('select-icon-1');
    } else if (iconStyle == 'select-icon-1') {
      $('#c-box .selectBox').hide();
      $('#c-box i')
        .removeClass('select-icon-1')
        .addClass('select-icon');
    }
  });
  $('#c-box .selectBox a').on('click', function() {
    var num = $('#c-box .selectBox a').index(this);
    $('#c-box .selectBox').hide();
    $('#c-box i')
      .removeClass('select-icon-1')
      .addClass('select-icon');
    $('#asselect-1').attr(
      'value',
      $('#c-box .selectBox a')
        .eq(num)
        .text()
    );
  });


  // 电话量筛选
  $('#tel-choose').on('click', function() {
    $('#telphone-choose-box').show();
    $('.layer').show();
  });
  $('#tel-choose-1').on('click', function() {
    $('#telphone-choose-box-1').show();
    $('.layer').show();
  });
  $('#tel-choose-2').on('click', function() {
    $('#telphone-choose-box-2').show();
    $('.layer').show();
  });
  $('#tel-choose-3').on('click', function() {
    $('#telphone-choose-box-3').show();
    $('.layer').show();
  });
  $('#tel-choose-4').on('click', function() {
    $('#telphone-choose-box-4').show();
    $('.layer').show();
  });
  $('#telphone-choose-box .a-closed').on('click', function() {
    $('#telphone-choose-box').hide();
    $('.layer').hide();
  });
  /*
     * $('#telphone-choose-box #chooseBtn-1').on('click',function(){ var dataLen =
     * $('#telphone-choose-box .select-box span i.choose-right').length; var
     * arrs = []; for(var i = 0; i < dataLen; i++){ var arr = []; arr[0] =
     * $('#telphone-choose-box .select-box span
     * i.choose-right').eq(i).siblings('b').text(); arr[1] = 100/dataLen;
     * arrs[i] = arr; } options.series[0].data = arrs;
     * $('#chartsbox-2').highcharts(options); $('#telphone-choose-box').hide();
     * $('.layer').hide(); });
     */
  $('#telphone-choose-box-1 #chooseBtn-1-1').on('click', function() {
    var dataLen = $('#telphone-choose-box-1 .select-box span i.choose-right')
      .length;
    var arrs = [];
    for (var i = 0; i < dataLen; i++) {
      var arr = [];
      arr[0] = $('#telphone-choose-box-1 .select-box span i.choose-right')
        .eq(i)
        .siblings('b')
        .text();
      arr[1] = 100 / dataLen;
      arrs[i] = arr;
    }
    options1.series[0].data = arrs;
    $('#chartsbox-2-1').highcharts(options1);
    $('#telphone-choose-box-1').hide();
    $('.layer').hide();
  });
  $('#telphone-choose-box-2 #chooseBtn-1-2').on('click', function() {
    var dataLen = $('#telphone-choose-box-2 .select-box span i.choose-right')
      .length;
    var arrs = [];
    for (var i = 0; i < dataLen; i++) {
      var arr = [];
      arr[0] = $('#telphone-choose-box-2 .select-box span i.choose-right')
        .eq(i)
        .siblings('b')
        .text();
      arr[1] = 100 / dataLen;
      arrs[i] = arr;
    }
    options2.series[0].data = arrs;
    $('#chartsbox-2-2').highcharts(options2);
    $('#telphone-choose-box-2').hide();
    $('.layer').hide();
  });
  $('#telphone-choose-box-3 #chooseBtn-1-3').on('click', function() {
    var dataLen = $('#telphone-choose-box-3 .select-box span i.choose-right')
      .length;
    var arrs = [];
    for (var i = 0; i < dataLen; i++) {
      var arr = [];
      arr[0] = $('#telphone-choose-box-3 .select-box span i.choose-right')
        .eq(i)
        .siblings('b')
        .text();
      arr[1] = 100 / dataLen;
      arrs[i] = arr;
    }
    options3.series[0].data = arrs;
    $('#chartsbox-2-3').highcharts(options3);
    $('#telphone-choose-box-3').hide();
    $('.layer').hide();
  });
  $('#telphone-choose-box-4 #chooseBtn-1-4').on('click', function() {
    var dataLen = $('#telphone-choose-box-4 .select-box span i.choose-right')
      .length;
    var arrs = [];
    for (var i = 0; i < dataLen; i++) {
      var arr = [];
      arr[0] = $('#telphone-choose-box-4 .select-box span i.choose-right')
        .eq(i)
        .siblings('b')
        .text();
      arr[1] = 100 / dataLen;
      arrs[i] = arr;
    }
    options4.series[0].data = arrs;
    $('#chartsbox-2-4').highcharts(options4);
    $('#telphone-choose-box-4').hide();
    $('.layer').hide();
  });
  $('#telphone-choose-box .select-box span').on('click', function() {
    var chooseStyle = $(this)
      .find('i')
      .attr('class');
    if (chooseStyle == 'choose-null') {
      var len = $('#telphone-choose-box .select-box span i.choose-right')
        .length;
      if (len < 8) {
        if (chooseStyle == 'choose-right') {
          $(this)
            .find('i')
            .removeClass('choose-right')
            .addClass('choose-null');
        } else if (chooseStyle == 'choose-null') {
          $(this)
            .find('i')
            .removeClass('choose-null')
            .addClass('choose-right');
        }
      } else {
        alert('所选项不能超过8项');
      }
    } else {
      if (chooseStyle == 'choose-right') {
        $(this)
          .find('i')
          .removeClass('choose-right')
          .addClass('choose-null');
      } else if (chooseStyle == 'choose-null') {
        $(this)
          .find('i')
          .removeClass('choose-null')
          .addClass('choose-right');
      }
    }
  });
  $('#telphone-choose-box-1 .select-box span').on('click', function() {
    var chooseStyle = $(this)
      .find('i')
      .attr('class');
    var len = $('#telphone-choose-box-1 .select-box span i.choose-right')
      .length;
    if (len < 8) {
      if (chooseStyle == 'choose-right') {
        $(this)
          .find('i')
          .removeClass('choose-right')
          .addClass('choose-null');
      } else if (chooseStyle == 'choose-null') {
        $(this)
          .find('i')
          .removeClass('choose-null')
          .addClass('choose-right');
      }
    } else {
      alert('所选项不能超过8项');
    }
  });
  $('#telphone-choose-box-2 .select-box span').on('click', function() {
    var chooseStyle = $(this)
      .find('i')
      .attr('class');
    var len = $('#telphone-choose-box-2 .select-box span i.choose-right')
      .length;
    if (len < 8) {
      if (chooseStyle == 'choose-right') {
        $(this)
          .find('i')
          .removeClass('choose-right')
          .addClass('choose-null');
      } else if (chooseStyle == 'choose-null') {
        $(this)
          .find('i')
          .removeClass('choose-null')
          .addClass('choose-right');
      }
    } else {
      alert('所选项不能超过8项');
    }
  });
  $('#telphone-choose-box-3 .select-box span').on('click', function() {
    var chooseStyle = $(this)
      .find('i')
      .attr('class');
    var len = $('#telphone-choose-box-3 .select-box span i.choose-right')
      .length;
    if (len < 8) {
      if (chooseStyle == 'choose-right') {
        $(this)
          .find('i')
          .removeClass('choose-right')
          .addClass('choose-null');
      } else if (chooseStyle == 'choose-null') {
        $(this)
          .find('i')
          .removeClass('choose-null')
          .addClass('choose-right');
      }
    } else {
      alert('所选项不能超过8项');
    }
  });
  $('#telphone-choose-box-4 .select-box span').on('click', function() {
    var chooseStyle = $(this)
      .find('i')
      .attr('class');
    var len = $('#telphone-choose-box-4 .select-box span i.choose-right')
      .length;
    if (len < 8) {
      if (chooseStyle == 'choose-right') {
        $(this)
          .find('i')
          .removeClass('choose-right')
          .addClass('choose-null');
      } else if (chooseStyle == 'choose-null') {
        $(this)
          .find('i')
          .removeClass('choose-null')
          .addClass('choose-right');
      }
    } else {
      alert('所选项不能超过8项');
    }
  });
  /*
     * -------------------------------------------------
     * --------------------------------------------
     */
  // 表格背景

  //$('.table-list tr:odd').css({ 'background' : '#fff' });

  $('.table-list tr:odd').css({
    background: '#fff',
  });
  $('.table-list tr:odd').hover(
    function() {
      $(this).css({
        background: '#f7fdfc',
      });
    },
    function() {
      $(this).css({
        background: '#fff',
      });
    }
  );
  $('.table-list tr:even').css({
    background: '#f0f0f0',
  });
  $('.table-list tr:even').hover(
    function() {
      $(this).css({
        background: '#f7fdfc',
      });
    },
    function() {
      $(this).css({
        background: '#f0f0f0',
      });
    }
  );

  // 表格input选项
  // $('#table-list th i').on('click', function() {
  $('#table-list').on('click', ' th i', function() {
    $(this).toggleClass('choose-all');
    if ($(this).hasClass('choosen')) {
      $('#table-list th i')
        .addClass('choose-all')
        .removeClass('choosen');
      $('#table-list td i').addClass('choose-right');
    } else if ($(this).hasClass('choose-all')) {
      $('#table-list td i').addClass('choose-right');
    } else {
      $('#table-list td i').removeClass('choose-right');
    }
  });
  $('#table-list').on('click', 'td i:not(.tel-icon)', function() {
    $(this).toggleClass('choose-right');
    var len = $('#table-list td i:not(.tel-icon)').length;
    var lenCur = $('#table-list td i.choose-right').length;

    if (lenCur > 0) {
      $('#table-list th i').addClass('choosen');
    }
    if (lenCur == 0) {
      $('#table-list th i').removeClass('choosen');
    }
    if (len == lenCur) {
      $('#table-list th i')
        .addClass('choose-all')
        .removeClass('choosen');
    } else {
      $('#table-list th i').removeClass('choose-all');
    }
    if (len > lenCur && lenCur != 0) {
      $('#table-list th i')
        .removeClass('choose-all')
        .addClass('choosen');
    }
  });
  // $('#table-list td i').on('click', function() {
  //   $(this).toggleClass('choose-right');
  //   var len = $('#table-list td i').length;
  //   var lenCur = $('#table-list td i.choose-right').length;

  //   if (lenCur > 0) {
  //     $('#table-list th i').addClass('choosen');
  //   }
  //   if (lenCur == 0) {
  //     $('#table-list th i').removeClass('choosen');
  //   }
  //   if (len == lenCur) {
  //     $('#table-list th i')
  //       .addClass('choose-all')
  //       .removeClass('choosen');
  //   } else {
  //     $('#table-list th i').removeClass('choose-all');
  //   }
  //   if (len > lenCur && lenCur != 0) {
  //     $('#table-list th i')
  //       .removeClass('choose-all')
  //       .addClass('choosen');
  //   }
  // });

  $('#table-list-1 th i').on('click', function() {
    $(this).toggleClass('choose-all');
    if ($(this).hasClass('choosen')) {
      $('#table-list-1 th i')
        .addClass('choose-all')
        .removeClass('choosen');
      $('#table-list-1 td i').addClass('choose-right');
    } else if ($(this).hasClass('choose-all')) {
      $('#table-list-1 td i').addClass('choose-right');
    } else {
      $('#table-list-1 td i').removeClass('choose-right');
    }
  });
  $('#table-list-1 td i').on('click', function() {
    $(this).toggleClass('choose-right');
    var len = $('#table-list-1 td i').length;
    var lenCur = $('#table-list-1 td i.choose-right').length;

    if (lenCur > 0) {
      $('#table-list-1 th i').addClass('choosen');
    }
    if (lenCur == 0) {
      $('#table-list-1 th i').removeClass('choosen');
    }
    if (len == lenCur) {
      $('#table-list-1 th i')
        .addClass('choose-all')
        .removeClass('choosen');
    } else {
      $('#table-list-1 th i').removeClass('choose-all');
    }
    if (len > lenCur && lenCur != 0) {
      $('#table-list-1 th i')
        .removeClass('choose-all')
        .addClass('choosen');
    }
  });

  $('#table-list-2 th i').on('click', function() {
    $(this).toggleClass('choose-all');
    if ($(this).hasClass('choosen')) {
      $('#table-list-2 th i')
        .addClass('choose-all')
        .removeClass('choosen');
      $('#table-list-2 td i').addClass('choose-right');
    } else if ($(this).hasClass('choose-all')) {
      $('#table-list-2 td i').addClass('choose-right');
    } else {
      $('#table-list-2 td i').removeClass('choose-right');
    }
  });
  $('#table-list-2 td i').on('click', function() {
    $(this).toggleClass('choose-right');
    var len = $('#table-list-2 td i').length;
    var lenCur = $('#table-list-2 td i.choose-right').length;

    if (lenCur > 0) {
      $('#table-list-2 th i').addClass('choosen');
    }
    if (lenCur == 0) {
      $('#table-list-2 th i').removeClass('choosen');
    }
    if (len == lenCur) {
      $('#table-list-2 th i')
        .addClass('choose-all')
        .removeClass('choosen');
    } else {
      $('#table-list-2 th i').removeClass('choose-all');
    }
    if (len > lenCur && lenCur != 0) {
      $('#table-list-2 th i')
        .removeClass('choose-all')
        .addClass('choosen');
    }
  });

  $('#table-list-3 th i').on('click', function() {
    $(this).toggleClass('choose-all');
    if ($(this).hasClass('choosen')) {
      $('#table-list-3 th i')
        .addClass('choose-all')
        .removeClass('choosen');
      $('#table-list-3 td i').addClass('choose-right');
    } else if ($(this).hasClass('choose-all')) {
      $('#table-list-3 td i').addClass('choose-right');
    } else {
      $('#table-list-3 td i').removeClass('choose-right');
    }
  });
  $('#table-list-3 td i').on('click', function() {
    $(this).toggleClass('choose-right');
    var len = $('#table-list-3 td i').length;
    var lenCur = $('#table-list-3 td i.choose-right').length;

    if (lenCur > 0) {
      $('#table-list-3 th i').addClass('choosen');
    }
    if (lenCur == 0) {
      $('#table-list-3 th i').removeClass('choosen');
    }
    if (len == lenCur) {
      $('#table-list-3 th i')
        .addClass('choose-all')
        .removeClass('choosen');
    } else {
      $('#table-list-3 th i').removeClass('choose-all');
    }
    if (len > lenCur && lenCur != 0) {
      $('#table-list-3 th i')
        .removeClass('choose-all')
        .addClass('choosen');
    }
  });

  // 筛选表格
  $('#filter').click(function() {
    if ($('#filterBox').css('display') == 'block') {
      $('#filterBox').hide();
      $('.layer-1').hide();
    } else {
      $('#filterFiledBox').hide();
      $('#filterBox').show();
      $('.layer-1').show();
    }
  });

  $('.layer-1').click(function() {
    $('#filterBox').hide();
    $('#filterFiledBox').hide();
    $('.layer-1').hide();
  });

  // $('#filter').toggle(function () {
  //     $('#filterBox').show();
  //     $('.layer-1').show();
  // }, function () {
  //     $('#filterBox').hide();
  //     $('.layer-1').hide();
  // });
  $('#filterBtn').on('click', function() {
    $('#filterBox').hide();
    $('.layer-1').hide();
  });

  // 更换跟进人
  $('#changer').on('click', function() {
    $('#changer-box').show();
    $('.layer').show();
  });
  $('#changer-box .a-closed,#changer-box #changerBtn').on('click', function() {
    $('#changer-box').hide();
    $('.layer').hide();
  });
  // 导入客户
  $('#exporter').on('click', function() {
    $('#changer-box-2').show();
    $('.layer').show();
  });
  $('#changer-box-2 .a-closed,#changer-box-2 #changerBtn-2').on(
    'click',
    function() {
      $('#changer-box-2').hide();
      $('.layer').hide();
    }
  );
  // 删除客户
  $('#deleter').on('click', function() {
    $('#changer-box-1').show();
    $('.layer').show();
  });
  $(
    '#changer-box-1 .a-closed,#changer-box-1 #changerBtn-1,#changer-box-1 #changerBtn-1-1'
  ).on('click', function() {
    $('#changer-box-1').hide();
    $('.layer').hide();
  });

  // 自定义表头
  $('#custom-header').on('click', function() {
    $('#customHeaderBox').show();
    $('.layer').show();
  });
  $('#customHeaderBox #customBtn,#customHeaderBox .a-closed').on(
    'click',
    function() {
      $('#customHeaderBox').hide();
      $('.layer').hide();
    }
  );
  $('#hiddenField ul li,#showField ul li').toggle(
    function() {
      $(this).addClass('current');
    },
    function() {
      $(this).removeClass('current');
    }
  );
  $('#hiddenField ul,#showField ul').delegate('li', 'click', function() {
    $(this).toggleClass('current');
  });
  //lys修改->
  $('#removeBtn').on('click', function() {
    var len = $('#showField ul li.current').length;
    var removeArr = [];
    for (var i = 0; i < len; i++) {
      removeArr[i] = $('#showField ul li.current').eq(i);
    }
    for (var j = 0; j < len; j++) {
      $('#hiddenField ul').append(removeArr[j]);
      $('#showField ul li.current').remove();
    }
  });
  $('#addBtn').on('click', function() {
    var len = $('#hiddenField ul li.current').length;
    var removeArr = [];
    for (var i = 0; i < len; i++) {
      removeArr[i] = $('#hiddenField ul li.current').eq(i);
    }
    for (var j = 0; j < len; j++) {
      $('#showField ul').append(removeArr[j]);
      $('#hiddenField ul li.current').remove();
    }
  }); //<-lys

  $('#downBtn').on('click', function() {
    var len = $('#showField ul li').length;
    var lenCur = $('#showField ul li.current').length;

    if (lenCur > 1) {
      alert('只能选择一项');
    }
    if (lenCur < len) {
      var $tr = $('#showField ul li.current');
      $tr.next().after($tr);
    }
  });
  $('#upBtn').on('click', function() {
    var len = $('#showField ul li').length;
    var lenCur = $('#showField ul li.current').length;

    if (lenCur > 1) {
      alert('只能选择一项');
    }
    if (lenCur < len) {
      var $tr = $('#showField ul li.current');
      $tr.prev().before($tr);
    }
  });

  $('.table-2 .table-list tbody tr').on('click', function() {
    $('#introLayerBox-1').show();
  });
  $('#introLayerBox-1 a.a-closed').on('click', function() {
    $('#introLayerBox-1').hide();
  });

  $('#introTab li').on('click', function() {
    var num = $('#introTab li').index(this);
    $('#introTab li a').removeClass('current');
    $(this)
      .find('a')
      .addClass('current');
    $('.introContent').hide();
    $('.introContent')
      .eq(num)
      .show();
  });

  /*
     * -------------------------------------------------
     * --------------------------------------------
     */
  // 选项卡
  $('#gtabBox li').on('click', function() {
    var num = $('#gtabBox li').index(this);
    $('#gtabBox li a').removeClass('current');
    $(this)
      .find('a')
      .addClass('current');
    $('.table-1').hide();
    $('.table-1')
      .eq(num)
      .show();
  });

  // 拨号弹层背景
  //	$('.telLayerBox .contextBox:odd').css({
  //		'background': '#f7f8f8'
  //	});

  $('.telLayerBox').css({
    height: $(window).height() - 66,
  });
  $('.telLayerBox-1').css({
    height: $(window).height() - 86,
  });
  $('.introLayerBox').css({ height: $(window).height() - 86 });
  //	$('.telLayerBox-1').css({
  //		'height' : $(document).height() - 86
  //	});

  // 拨打电话
  /*$('.call-tel').on('click', function() {
        $('.telLayerBox').show();
        $('.layer').show();
    });*/
  /*
     * $('#hangupBtn').on('click',function(){ $('.telLayerBox').hide();
     * $('.layer').hide(); $('.telLayerBox-1').hide(); });
     */
  $('#hangupBtn').on('click', function() {
    $('.telLayerBox').show();
    $('#telResultDiv2').show();
    $('.layer').show();
  });
  /*
     * $('#tel-add').on('click',function(){ $('.telLayerBox').show();
     * $('.telLayerBox-1').show(); $('.layer').show(); });
     */
  $('#tjyxBtn').on('click', function() {
    $('.telLayerBox').hide();
    $('.telLayerBox-1').hide();
    $('.layer').hide();
  });
  $('#tel-edit').on('click', function() {
    $('.telLayerBox .contextBox input,.telLayerBox .contextBox textarea').attr(
      'readonly',
      false
    );
    $('.telLayerBox .contextBox input,.telLayerBox .contextBox textarea').css({
      'border-width': '1px',
      background: '#fff',
    });
    $('.address_input').hide();
    $('.address_sel').show();
    //		$('#hangupBtn,#p-time').hide();
    $('#saveBtn_call').show();
    $(this).hide();
  });
  $('#saveBtn_call').on('click', function() {
    $('.telLayerBox .contextBox input,.telLayerBox .contextBox textarea').attr(
      'readonly',
      true
    );
    $('.telLayerBox .contextBox input,.telLayerBox .contextBox textarea').css({
      'border-width': '0px',
      background: 'none',
    });
    $('.address_input').show();
    $('.address_sel').hide();
    //		$('#hangupBtn,#p-time').show();
    $(this).hide();
    $('#tel-edit').show();
  });

  // 申请更多任务
  $('#applyMore').on('click', function() {
    $('#applyBox').show();
    $('.layer').show();
  });
  $('#applyTaskBtn,#applyBox .a-closed').on('click', function() {
    $('#applyBox').hide();
    $('.layer').hide();
  });
  /*
     * -------------------------------------------------
     * --------------------------------------------
     */
  // 新建任务
  $('#add-tasks').on('click', function() {
    $('#applyBox-1').show();

    $('.layer').show();
  });
  $('#applyTaskBtn-1,#applyBox-1 .a-closed').on('click', function() {
    $('#applyBox-1').hide();
    $('.layer').hide();
  });
  $('#add-tasks-1').on('click', function() {
    $('#applyBox-1-1').show();
    $('.layer').show();
  });
  $('#applyTaskBtn-1-1,#applyBox-1-1 .a-closed').on('click', function() {
    $('#applyBox-1-1').hide();
    $('.layer').hide();
  });
  /*
     * -------------------------------------------------
     * --------------------------------------------
     */
  // 任务滑动样式
  $('.overdue-status').hover(
    function() {
      $(this)
        .find('i')
        .addClass('redcolor');
    },
    function() {
      $(this)
        .find('i')
        .removeClass('redcolor');
    }
  );
  $('.overdue-status-1').hover(
    function() {
      $(this)
        .find('i')
        .addClass('redcolor');
    },
    function() {
      $(this)
        .find('i')
        .removeClass('redcolor');
    }
  );
  $('.progress-status').hover(
    function() {
      $(this)
        .find('i')
        .addClass('bluecolor');
    },
    function() {
      $(this)
        .find('i')
        .removeClass('bluecolor');
    }
  );
  $('.others-status').hover(
    function() {
      $(this)
        .find('i')
        .addClass('graycolor');
    },
    function() {
      $(this)
        .find('i')
        .removeClass('graycolor');
    }
  );

  $('.dltabed li').on('click', function() {
    var num = $('.dltabed li').index(this);
    $('.dltabed li a').removeClass('current');
    $(this)
      .find('a')
      .addClass('current');
    $('.table-2').hide();
    $('.table-2')
      .eq(num)
      .show();
  });

  // 任务进行中
  /*$('.overdue-status em').on('click', function() {
        $('#applyBox-2').show();
        $('.layer').show();
    });*/
  $('#applyBox-2 .a-closed').on('click', function() {
    $('#applyBox-2').hide();
    $('.layer').hide();
  });
  $('.overdue-status-1 em').on('click', function() {
    $('#applyBox-2-1').show();
    $('.layer').show();
  });
  $('#applyTaskBtn-2-1,#applyBox-2-1 .a-closed').on('click', function() {
    $('#applyBox-2-1').hide();
    $('.layer').hide();
  });

  // 任务已中止
  $('.stopped-item').on('click', function() {
    $('#applyBox-3').show();
    $('.layer').show();
  });
  $('#applyBox-3 .a-closed').on('click', function() {
    $('#applyBox-3').hide();
    $('.layer').hide();
  });

  // 任务未开始
  $('.nostart-item').on('click', function() {
    $('#applyBox-4').show();
    $('.layer').show();
  });
  $('#applyTaskBtn-4,#applyBox-4 .a-closed').on('click', function() {
    $('#applyBox-4').hide();
    $('.layer').hide();
  });
  $('.nostart-item-1').on('click', function() {
    $('#applyBox-4-1').show();
    $('.layer').show();
  });
  $('#applyTaskBtn-4-1,#applyBox-4-1 .a-closed').on('click', function() {
    $('#applyBox-4-1').hide();
    $('.layer').hide();
  });

  // 任务已完成
  $('.finished-item').on('click', function() {
    $('#applyBox-5').show();
    $('.layer').show();
  });
  $('#applyBox-5 .a-closed').on('click', function() {
    $('#applyBox-5').hide();
    $('.layer').hide();
  });
  $('.finished-item-1').on('click', function() {
    $('#applyBox-5-1').show();
    $('.layer').show();
  });
  $('#applyTaskBtn-5-1,#applyBox-5-1 .a-closed').on('click', function() {
    $('#applyBox-5-1').hide();
    $('.layer').hide();
  });

  // 同意并新建任务
  $('a.agree').on('click', function() {
    $('#applyBox-1').show();
    $('.layer').show();
  });

  // 拒绝
  $('a.refuse').on('click', function() {
    var l = $(this).offset().left;
    var t = $(this).offset().top + 30;
    $('#refuseBox').css({
      left: l,
      top: t,
    });
    $('#refuseBox').show();
  });
  $('#refuseBox #refuseBtn,#refuseBox a.a-closed').on('click', function() {
    $('#refuseBox').hide();
  });

  // 选择员工
  $("body").on('click','.staff-ul li',function(){

  // $('.staff-ul li').on('click', function() {
    $(this)
      .find('a')
      .toggleClass('current');
  });
  $('#chooseStaff').on('click', function(event) {
    $('.choose-staff').toggle();
    $(document).one('click', function() {
      $('.choose-staff').hide();
    });
    event.stopPropagation();
  });
  $('.choose-staff').click(function(event) {
    event.stopPropagation();
  });

  // 保存至客户
  $('#save-btn').on('click', function() {
    $(this).hide();
    $('#saven-btn').show();
  });

  /*
     * -------------------------------------------------
     * --------------------------------------------
     */
  // 选项卡--账户
  $('#account-tab li').on('click', function() {
    var num = $('#account-tab li').index(this);
    $('#account-tab li a').removeClass('current');
    $(this)
      .find('a')
      .addClass('current');
    $('.c-context').hide();
    $('.c-context')
      .eq(num)
      .show();
  });
  // 交易明细
  $('#jymx-1').on('click', function() {
    $('#c-part-2').show();
    $('#c-part-1').hide();
  });
  $('#c-part-2 .return-icon').on('click', function() {
    $('#c-part-2').hide();
    $('#c-part-1').show();
  });
  $('#jymx-2').on('click', function() {
    $('#c-part-4').show();
    $('#c-part-3').hide();
  });
  $('#c-part-4 .return-icon').on('click', function() {
    $('#c-part-4').hide();
    $('#c-part-3').show();
  });

  // 选择条数
  $('#c-pay-1 .c-a').on('click', function() {
    $('#c-pay-1 .c-a')
      .removeClass('buy-items-cur')
      .addClass('buy-items');
    $(this).toggleClass('buy-items-cur');
  });

  /*
     * -------------------------------------------------
     * --------------------------------------------
     */
  // // 外呼标签设置
  // $('.dl-chosen dd span').hover(
  //   function() {
  //     if ($(this).attr('class') != 'add') {
  //       $(this).addClass('span');
  //     }
  //   },
  //   function() {
  //     if ($(this).attr('class') != 'add') {
  //       $(this).removeClass('span');
  //     }
  //   }
  // );
  // 外呼标签设置
  // $('.dl-chosen dd span .spanHover').hover(
  //   function() {
  //     if (
  //       $(this)
  //         .parent()
  //         .attr('class') != 'add'
  //     ) {
  //       $(this)
  //         .parent()
  //         .addClass('span');
  //     }
  //   },
  //   function() {
  //     if (
  //       $(this)
  //         .parent()
  //         .attr('class') != 'add'
  //     ) {
  //       $(this)
  //         .parent()
  //         .removeClass('span');
  //     }
  //   }
  // );
  // 关闭
  $('.taglayer .a-closed').on('click', function() {
    $(this)
      .parent()
      .parent()
      .hide();
  });

  // 查看
  $('a.look').on('click', function() {
    $('.layer').show();
    $('#look-1').show();
  });
  $('#look-1 a.a-closed,#look-1 .btn').on('click', function() {
    $('.layer').hide();
    $('#look-1').hide();
  });
  // task 添加 删除
  $('.del-sc').hover(
    function() {
      $(this)
        .find('i')
        .show();
    },
    function() {
      $(this)
        .find('i')
        .hide();
    }
  );

  $('.del-sc').click(function() {
    $(this).remove();
  });

  $('.addli li i').on('click', function() {
    $(this).toggleClass('choose-right');
  });

  //	$('.del-add').on('click', function() {
  //		$(".del-add").parent("ul").siblings(".adddiv").toggle();
  //		//$(".adddiv").toggle();
  //	});

  $('.del-add a').on('click', function() {
    $(this)
      .siblings('.adddiv1')
      .toggle();
    if (
      $(this).offset().left + 300 >
      $(this)
        .parents('ul')
        .offset().left +
        $(this)
          .parents('ul')
          .width()
    ) {
      $(this)
        .siblings('.adddiv1')
        .css({ left: '-260px' });
    } else {
      $(this)
        .siblings('.adddiv1')
        .css({ left: '60px' });
    }
  });

  //语音
  //	$(".play").each(function() {
  //		$(".play").click(function() {
  //			$(".play").audio5js("playPause");
  //		});
  //		var url1 = $(this).attr("url");
  //		$(this).audio5js({
  //			url: url1
  //		});
  //	});
  //打电话选择标签
  //	$(".dl-1 dd span.span").click(function() {
  //		$(".dl-1 dd span.span").removeClass("cur");
  //		$(this).addClass("cur");
  //	});
  //发送短信
  $('#send').on('click', function() {
    $('#send_message').show();
    $('.layer-2').show();
  });
  //关闭发送短信
  $('#send_message .a-closed').click(function() {
    $('#send_message').hide();
    $('.layer-2').hide();
  });
  //选择短信模板
  //	$("#send_message #c-box a").click(function() {
  //		//向textatea中赋值
  //		//$(".textarea_box textarea").val("1233333333");
  //	});

  //发送短信成功
  //	$(".send_btn input").click(function() {
  //		$("#send_message").hide();
  //		$(".layer-2").hide();
  //		$("#send").addClass("disabled").off().val("短信已发送，60秒后可再次发送");
  //		var time = 60;
  //		var send_time = setInterval(function() {
  //			$("#send").val("短信已发送，" + time + "秒后可再次发送");
  //			time--;
  //			if (time == 0) {
  //				$("#send").removeClass("disabled").val("发送短信").on("click", function() {
  //					$("#send_message").show();
  //					$(".layer-2").show();
  //				});
  //				clearInterval(send_time);
  //			}
  //		}, 1000);
  //	});

  //客户列表中新建任务的选择员工,并点击空白区域隐藏选择员工
  $('.choose-members .del-add').click(function(event) {
    var left_btn =
      $(this).offset().left +
      $(this).outerWidth() +
      10 -
      $('.choose-members').offset().left;
    $('.add_employees')
      .css('left', left_btn)
      .show();
    $(document).one('click', function() {
      $('.add_employees').hide();
    });
    event.stopPropagation();
  });
  $('.add_employees').click(function(event) {
    event.stopPropagation();
  });

  //顶部退出框
  $('.user').click(function(event) {
    $('.quit_down').toggle();
    $('.user .arrow').toggleClass('active');
    $(document).one('click', function() {
      $('.quit_down').hide();
      $('.user .arrow').toggleClass('active');
    });
    event.stopPropagation();
  });
  $('.quit_down').click(function(event) {
    event.stopPropagation();
  });
  //编辑头像
  $('.a-edit-photo').click(function() {
    $('.edit_photo').show();
  });
  $('.cancle,.edit_photo a.a-closed').click(function() {
    $('.edit_photo').hide();
  });

  //播放录音
  //	$(".play").each(function() {
  //		$(this).click(function() {
  //			$(".play").audio5js("pause");
  //		});
  //		var url1 = $(this).attr("url");
  //		$(this).audio5js({
  //			url: url1
  //		});
  //	});

  //设置中标签位置
  $('.dl-chosen .add').click(function() {
    $('.taglayer').hide();
    var chosen_top = 0;
    var chosen_left = 0;
    if (
      $(this).offset().top + $('#addtip').outerHeight() >
      $('body').height()
    ) {
      chosen_top =
        $(this).offset().top +
        $(this).outerHeight() -
        $('#addtip').outerHeight();
    } else {
      chosen_top = $(this).offset().top;
    }
    if (
      $(this).offset().left + $(this).outerWidth() + $('#addtip').outerWidth() >
      $('body').width()
    ) {
      chosen_left = $(this).offset().left - $('#addtip').outerWidth();
    } else {
      chosen_left = $(this).offset().left + $(this).outerWidth();
    }
    $('#addtip')
      .css({ top: chosen_top, left: chosen_left })
      .show();
  });

  $('.edit-small').click(function() {
    $('.taglayer').hide();
    var chosen_top = 0;
    var chosen_left = 0;
    if (
      $(this)
        .parent()
        .offset().top +
        $('#updatetip').outerHeight() >
      $('body').height()
    ) {
      chosen_top =
        $(this)
          .parent()
          .offset().top +
        $(this)
          .parent()
          .outerHeight() -
        $('#updatetip').outerHeight();
    } else {
      chosen_top = $(this)
        .parent()
        .offset().top;
    }
    if (
      $(this)
        .parent()
        .offset().left +
        $(this)
          .parent()
          .outerWidth() +
        $('#updatetip').outerWidth() >
      $('body').width()
    ) {
      chosen_left =
        $(this)
          .parent()
          .offset().left - $('#updatetip').outerWidth();
    } else {
      chosen_left =
        $(this)
          .parent()
          .offset().left +
        $(this)
          .parent()
          .outerWidth();
    }

    $('#updatetip')
      .css({ top: chosen_top, left: chosen_left })
      .show();
  });
  $('.delete-small').click(function() {
    $('.taglayer').hide();
    var chosen_top = 0;
    var chosen_left = 0;
    if (
      $(this)
        .parent()
        .offset().top +
        $('#deletetip').outerHeight() >
      $('body').height()
    ) {
      chosen_top =
        $(this)
          .parent()
          .offset().top +
        $(this)
          .parent()
          .outerHeight() -
        $('#deletetip').outerHeight();
    } else {
      chosen_top = $(this)
        .parent()
        .offset().top;
    }
    if (
      $(this)
        .parent()
        .offset().left +
        $(this)
          .parent()
          .outerWidth() +
        $('#deletetip').outerWidth() >
      $('body').width()
    ) {
      chosen_left =
        $(this)
          .parent()
          .offset().left - $('#deletetip').outerWidth();
    } else {
      chosen_left =
        $(this)
          .parent()
          .offset().left +
        $(this)
          .parent()
          .outerWidth();
    }
    $('#deletetip')
      .css({ top: chosen_top, left: chosen_left })
      .show();
  });

  $('.layer,.layer-2').click(function() {
    if (
      $('.telLayerBox-1').css('display') == 'block' ||
      $('.telLayerBox-1').css('display') == 'block' ||
      $('.telLayerBox-2').css('display') == 'block' ||
      $('.telLayerBox').css('display') == 'block'
    ) {
      return;
    }
    $(
      '.customHeaderBox,.changer-box,.applyBox,.introLayerBoxlys,.introLayerBox,.telphone-choose-box'
    ).hide();
    $('.layer,.layer-2').hide();
  });

  //新建任务   显示新建电话任务和短信任务
  $('.addtask_btn').click(function(event) {
    $('.add_task').toggle();
    $(document).one('click', function() {
      $('.add_task').hide();
    });
    event.stopPropagation();
  });
  $('.add_task').click(function(event) {
    event.stopPropagation();
  });

  //新建电话任务
  $('.call_task').click(function() {
    $('#applyBox-1').show();
    $('.layer').show();
  });

  //新建短信任务
  $('.message_task').click(function() {
    $('#applyBox-3').show();
    $('.layer').show();
  });

  //新建邮件任务
  $('.email_task').click(function() {
    $('#applyBox-4').show();
    $('.layer').show();
  });
});

// $(function () {
//     window.onresize = function () {
//         $("body").height($(window).height());
//         $("#id_iframe").height($(window).height() - 60);
//         if ($(".customer").length > 0) {
//             $(".customer").height($(window).height() - $(".customer").offset().top - 80);
//             $(".customer").css({"overflow": "auto"});
//         }
//         if ($(".intention").length > 0) {
//             $(".intention").height($(window).height() - $(".intention").offset().top - 30);
//             $(".intention").css({"overflow": "auto"});
//         }
//     }
// })

var a;
var audio1;
// $(function() {
//   a = audiojs.createAll();
//   audio1 = a[0];
//   console.log(audio1);
//   // $('.audio').click(function(e) {
//   $('body').on('click', '.audio', function(e) {
//     e.preventDefault();
//     $('.layer-3').show();
//     $('.audio-box').show();
//     audio1.load($(this).attr('url'));
//     console.log(audio1);
//     audio1.play();
//   });
// });

$(function() {
  a = audiojs.createAll();
  audio1 = a[0];
  // console.log(audio1);
  // $(".audio").click(function (e) {
  $('body').on('click', '.audio', function(e) {
    $('#transcriptions_text').text('');
    $('#audioname').text($(this).attr('cusname'));
    $('#audiocompany').text($(this).attr('cuscompany'));
    if ($(this).attr('url') == null || $(this).attr('url') == '') {
      $('#downloadMp3Btn').hide();
    } else {
      $('#downloadMp3Btn').show();
    }
    $('#audio-box-plancusId').val($(this).attr('planCustomerId'));
    $('#audio-box-url').val($(this).attr('url'));
    $('#call_action_id').val($(this).attr('callActionId'));
    $('#transcriptions_info').hide();
    e.preventDefault();
    $('.layer-3').show();
    $('.audio-box').show();
    audio1.load($(this).attr('url'));
    // console.log(audio1);
    audio1.play();
  });
});

// Load in the first track
  //获取地址栏参数
  function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return "";
}
