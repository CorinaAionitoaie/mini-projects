var pickColor = function() {
	var colorInput = document.getElementsByClassName("modal-dialog__color-input")[0];
	var colorSquare = document.getElementsByClassName("color-square")[0];
	
	if(colorInput && colorSquare) {		
		colorSquare.style.fill = colorInput.value;
		if(colorSquare.style.fill !== colorInput.value) {
			console.log("ERROR");
			colorSquare.style.fill="#ffffff";
		}
	}
};

document.querySelector('#vehicle-damaged').addEventListener('change', function(e){
    var damageDetails = document.getElementsByClassName('modal-dialog__damage-details');
    console.log(damageDetails.length);
   for(var i=0; i< damageDetails.length; i++) {
        var detail = damageDetails[i];
        console.log(detail, i);
        damageDetails[i].className += ' modal-dialog__damage-details--displayed';
    }
});