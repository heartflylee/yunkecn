function setCustomField(
  tablekeys,
  values,
  tablehead,
  customFieldsValue,
  customFields,
  ids,
  head
) {
  for (var i = 0; i < customFields.length; i++) {
    var f = customFields[i];
    tablekeys.push(f.id + '');
    values.push(f.fieldName);
  }
  addTablehead(tablekeys, tablehead, values);

  var defineItem = [];

  //表头
  var insertHead = $('#table-list th[tableflag=' + head + ']');
  for (var i = 0; i < customFields.length; i++) {
    var headName = getHeadName(customFields, customFields[i].id);
    insertHead.after(
      "<th style='display: none' tableflag='" +
        customFields[i].id +
        "'>" +
        headName +
        '</th>'
    );
    var insertHead = $(
      "#table-list th[tableflag='" + customFields[i].id + "']"
    );
    var a = { id: customFields[i].id, index: insertHead.index() }; //id和下标
    defineItem.push(a);
  }

  for (var i = 0; i < ids.length; i++) {
    var id = 'showdetail' + ids[i];
    for (var j = 0; j < defineItem.length; j++) {
      var index = defineItem[j].index - 1;
      var insertTd = $('#' + id)
        .parent()
        .siblings('td:eq(' + index + ')');
      insertTd.after(
        "<td style='display: none' tableflag='" +
          defineItem[j].id +
          "' class='ellipsis-box ellipsis-td'></td>"
      );
    }
  }

  //换成数据
  for (var item in customFieldsValue) {
    var jValue = customFieldsValue[item]; //key所对应的value
    var id = 'showdetail' + item;
    for (var valueItem in jValue) {
      $('#' + id)
        .parent()
        .siblings("td[tableflag='" + valueItem + "']")
        .html(
          "<div class='ellipsis'>" +
            jValue[valueItem] +
            "</div><div class='ellipsis-all'>" +
            TransferString(jValue[valueItem]) +
            '</div>'
        );
    }
  }
}

$(function() {
  $('body').on('mouseover', '.ellipsis', function(event) {
    if ($(this).width() < 250 || $(this).text().length <= 17) {
      return false;
    }
    if (
      $(this)
        .next()
        .css('display') == 'block'
    ) {
      $(this)
        .next()
        .hide();
    } else {
      $('.ellipsis-all').hide();
      $(this)
        .next()
        .css({
          top: 'auto',
          right: '-400px',
        })
        .show();
      var chosen_top = 0;
      var chosen_left = 0;
      if (
        $(this)
          .next()
          .offset().top +
          $('.customer').scroll()[0].scrollTop -
          $('.customer').offset().top -
          40 +
          $(this)
            .next()
            .outerHeight() >
        ($('.customer table').height() > $('.customer').height()
          ? $('.customer table').height()
          : $('.customer').height())
      ) {
        chosen_top =
          -1 *
            $(this)
              .next()
              .outerHeight() +
          20;
      } else {
        chosen_top = 0;
      }
      console.log(
        $(this)
          .next()
          .offset().left +
          $(this)
            .next()
            .outerWidth()
      );
      if (
        $(this)
          .next()
          .offset().left +
          $(this)
            .next()
            .outerWidth() >=
        $('.customer').width()
      ) {
        chosen_left = 270;
      } else {
        chosen_left =
          -1 *
          $(this)
            .next()
            .outerWidth();
      }
      console.log(chosen_left);
      $(this)
        .next()
        .css({
          top: chosen_top,
          right: chosen_left,
        })
        .show();
    }
    event.stopPropagation();
  });
  $('body').on('mouseout', '.ellipsis', function(event) {
    $('.ellipsis-all').hide();
  });
  $(window).click(function() {
    $('.ellipsis-all').hide();
  });
  $('body').on('click', '.ellipsis-all', function(event) {
    event.stopPropagation();
  });
});

//得到表头
function getHeadName(customFields, valueItem) {
  for (var v in customFields) {
    //console.log(customFields[v]);
    if (customFields[v]['id'] == valueItem) {
      return customFields[v]['fieldName'];
    }
  }
}
function addTablehead(tablekeys, tablehead, values) {
  for (var i = 0; i < tablekeys.length; i++) {
    if (tablehead.indexOf(tablekeys[i]) > -1) {
      $('#yesfield').append(
        "<li key='" + tablekeys[i] + "'>" + values[i] + '</li>'
      );
    } else {
      $('#nofield').append(
        "<li key='" + tablekeys[i] + "'>" + values[i] + '</li>'
      );
    }
  }
}

//替换所有的回车换行
function TransferString(content) {
  var string = content;
  try {
    string = string.replace(/\r\n/g, '<br>');
    string = string.replace(/\n/g, '<br>');
  } catch (e) {
    alert(e.message);
  }
  return string;
}
