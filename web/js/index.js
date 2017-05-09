
$(window).load(function() {
var options = {
	thumbBox: '.thumbBox',
	spinner: '.spinner',
	imgSrc: '../images/logo_1.png'
}
var cropper = $('.imageBox').cropbox(options);
$('#upload-file').on('change', function() {
	var reader = new FileReader();
	reader.onload = function(e) {
		options.imgSrc = e.target.result;
		cropper = $('.imageBox').cropbox(options);
	}
	reader.readAsDataURL(this.files[0]);
	this.files = [];
});
$('#btnCrop').on('click', function() {
	var img = cropper.getDataURL();
	$('.photo').html('');
	$('.photo').append('<img src="' + img + '" align="absmiddle" style="width:100px;margin-top:4px;border-radius:64px;box-shadow:0px 0px 12px #7E7E7E;" ><p>100px*100px</p>');
})
$('#btnZoomIn').on('click', function() {
	cropper.zoomIn();
})
$('#btnZoomOut').on('click', function() {
		cropper.zoomOut();
	})
});