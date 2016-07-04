$(document).ready(function(){
	$("#fileUpControlReport").change(function(e){
		var file = e.target.files || e.dataTranster.files;
		if(file){
			var reader = new FileReader();
			reader.onload = function() {
				$("div.rightMain .contR form .upImageReport").find("div").eq(i).find("img").attr("src",+this.result+);
			}
		}
	});
});