var pickColor = function() {
	var colorInput = document.querySelector(".modal-dialog__color-input");
	var colorSquare = document.querySelector(".color-square");
	
    if(colorInput && colorSquare) {		
		colorSquare.style.fill = colorInput.value;
		if(colorSquare.style.fill !== colorInput.value) {
			colorSquare.style.fill="none";
		}
	}
};