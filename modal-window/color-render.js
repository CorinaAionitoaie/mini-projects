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
