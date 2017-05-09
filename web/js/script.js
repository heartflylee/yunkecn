$(document).ready(function(){

	var date = new Date();
	var d = date.getDate();
	var m = date.getMonth();
	var y = date.getFullYear();

	if($('.calendar').length > 0){
		$('.calendar').fullCalendar({
			header: {
				left: 'agendaWeek,agendaDay',
				center: 'title',
				right: 'prev,next,today'
			},
			buttonText:{
				today:'今天',
				prev: '<span class="lf">&lt;</span>',
				next: '<span class="rt">&gt;</span>',
				agendaWeek: '周视图',
				agendaDay: '日视图'
			},
			editable: true,
			defaultView: 'agendaDay',
			titleFormat: {
			 // month: 'MMMM yyyy',  月标题
			// week: "MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}",  周标题
			// day: 'dddd, MMM d, yyyy'日标题
				month: "yyyy 年  MMMM",
			    week: "yyyy 年 MMMM d[ yyyy]{ '&#8212;'[ MMM] d}",
			    day: "yyyy 年 MMMM d 日 dddd"
			},
			columnFormat: {
			month: 'ddd',
			week: 'ddd M/d',
			day: 'dddd M/d'
			},
			isRTL: false,
			firstDay: 0,
			monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    		monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
     		dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
     		dayNamesShort: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],

			timeFormat: { // for event elements
			 // '': 'h(:mm)t' // default
			"": "HH(:mm) 点 "
			},   

			events: [
			{
				title: '全天事项',
				start: new Date(y, m, 1)
			},
			{
				title: '长距离项目',
				start: new Date(y, m, d-5),
				end: new Date(y, m, d-2)
			},
			{
				id: 999,
				title: '重复项目',
				start: new Date(y, m, d-3, 16, 0),
				allDay: false
			},
			{
				id: 999,
				title: '重复项目',
				start: new Date(y, m, d+4, 16, 0),
				allDay: false
			},
			{
				title: '会议',
				start: new Date(y, m, d, 10, 30),
				allDay: false
			},
			{
				title: '早餐',
				start: new Date(y, m, d, 6, 0),
				end: new Date(y, m, d, 7, 0),
				allDay: false
			},
			{
				title: '午餐',
				start: new Date(y, m, d, 12, 0),
				end: new Date(y, m, d, 14, 0),
				allDay: false
			},
			{
				title: '生日聚会',
				start: new Date(y, m, d+1, 19, 0),
				end: new Date(y, m, d+1, 22, 30),
				allDay: false
			},
			{
				title: '点击跳转谷歌',
				start: new Date(y, m, 28),
				end: new Date(y, m, 29),
				url: 'http://www.google.com/'
			}
			],
			eventClick:function(){
				$('.r-telphone').toggleClass("hiden");
			}
		});
	}
	
});