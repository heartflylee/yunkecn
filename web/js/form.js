/**
 * 将form里面的内容序列化成json
 * 相同的checkbox用分号拼接起来
 * @param {dom} 指定的选择器
 * @param {obj} 需要拼接在后面的json对象
 * @method serializeJson
 * */
var arrinterval = ['company', 'major', 'phone2', 'linkmanLandline2', 'linkmanAddress2', 'email2', 'wx', 'fax2', 'webSite', 'brandToy', 'brandSafetySeat', 'brandTrolley', 'brandFeeder', 'brandPreschoolEdu', 'brandOther', 'coAuthorizeBrand', 'dispositionalAuthorizeBrand'];
var arrinterval1 = ['enterpriseNature', 'secondEnterpriseNature', 'firstCategory', 'authorizeEnterpriseNature', 'authorizeEnterpriseIndustry'];
var arrinterval2 = ['brandLevelToy', 'brandLevelSafetySeat', 'brandLevelTrolley', 'brandLevelFeeder', 'brandLevelPreschoolEdu', 'brandLevelOther'];

$.fn.serializeJson = function(otherString) {  
	var serializeObj = {},
		    array = this.serializeArray();  
	$(array).each(function() {    
		if(serializeObj[this.name]) {
			if($.inArray(this.name, arrinterval)>-1) {
				serializeObj[this.name] += '、' + this.value;
			}
			if($.inArray(this.name, arrinterval1)>-1) {
				serializeObj[this.name] += ',' + this.value;
			}
			if($.inArray(this.name, arrinterval2)>-1) {
				serializeObj[this.name] += ';' + this.value;
			}
			//			serializeObj[this.name] += ';' + this.value;
		} else {       serializeObj[this.name] = this.value;     }  
	});   
	if(otherString != undefined) {    
		var otherArray = otherString.split(';');    
		$(otherArray).each(function() {      
			var otherSplitArray = this.split(':');      
			serializeObj[otherSplitArray[0]] = otherSplitArray[1];    
		});  
	}  
	return serializeObj;
}; 
/**
 * 将josn对象赋值给form
 * @param {dom} 指定的选择器
 * @param {obj} 需要给form赋值的json对象
 * @method serializeJson
 * */
$.fn.setForm = function(jsonValue) {  
	var obj = this;  
	$.each(jsonValue, function(name, ival) {    
		var $oinput = obj.find("input[name=" + name + "]");    
		if($oinput.attr("type") == "checkbox") {       if(ival !== null) {         var checkboxObj = $("[name=" + name + "]");         var checkArray = ival.split(";");         for(var i = 0; i < checkboxObj.length; i++) {           for(var j = 0; j < checkArray.length; j++) {             if(checkboxObj[i].value == checkArray[j]) {               checkboxObj[i].click();             }           }         }       }     }    
		else if($oinput.attr("type") == "radio") {       $oinput.each(function() {         var radioObj = $("[name=" + name + "]");         for(var i = 0; i < radioObj.length; i++) {           if(radioObj[i].value == ival) {             radioObj[i].click();           }         }       });     }    
		else if($oinput.attr("type") == "textarea") {       obj.find("[name=" + name + "]").html(ival);     }    
		else {       obj.find("[name=" + name + "]").val(ival);     }  
	})
}