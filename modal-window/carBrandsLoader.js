(function(exports){
    var carBrands = [
        {'brand': 'Audi',
        'logo-path': 'images/audi-logo.png'},
        {'brand': 'Citroen',
        'logo-path': 'images/citroen-logo.png'},
        {'brand': 'Honda',
        'logo-path': 'images/honda-logo.png'},
        {'brand': 'Hyundai',
        'logo-path': 'images/hyundai-logo.png'},
        {'brand': 'Ford',
        'logo-path': 'images/ford-logo.png'},
        {'brand': 'BMW',
        'logo-path': 'images/bmw-logo.png'},
        {'brand': 'Chevrolet',
        'logo-path': 'images/chevrolet-logo.png'},
        {'brand': 'Fiat',
        'logo-path': 'images/fiat-logo.png'},
        {'brand': 'Volkswagen ',
        'logo-path': 'images/volkswagen-logo.png'}
    ];
    
    var createOptionElem = function(text, value, index) {
        var optionElem = document.createElement('option');
        var textElem = document.createTextNode(text);
        optionElem.appendChild(textElem);
        optionElem.setAttribute('value', value);
        if(index === '0') {
            optionElem.setAttribute('selected', 'selected');
        }
        
        return optionElem;
    };
    
    var createDomOptionElems = function(selector){
        var selectBrands = document.querySelector(selector);
        for(var i in carBrands) {
            var carBrand = carBrands[i];
            var optionElem = createOptionElem(carBrand['brand'], carBrand['brand'], i);
            selectBrands.appendChild(optionElem);
        }
    };
    
    var findLogoPath = function(brandName) {
       for(var i in carBrands) {
           var carBrand = carBrands[i];
           if(carBrand['brand'] === brandName) {
               return carBrand['logo-path'];
           }
        }
    };
    
    var placeLogo = function(dropdown){
        var brandName = dropdown.options[dropdown.selectedIndex].value;
        var logoPath = findLogoPath(brandName);
        document.querySelector(exports.logoSelector).src = logoPath;
    };
    
    exports.init = function(selector, logoSelector){
        this.brandsDropdownSelector = selector;
        this.logoSelector = logoSelector;
        this.brandsDropdown = document.querySelector(this.brandsDropdownSelector);
        createDomOptionElems(this.brandsDropdownSelector);
        exports.displayLogoOnClick();
        placeLogo(exports.brandsDropdown);
    };   
    
    exports.displayLogoOnClick = function() {
        exports.brandsDropdown.addEventListener('change', function(e){            
            placeLogo(exports.brandsDropdown);
        });
    };
    
})(this.carBrandsLoader = {});


document.addEventListener('DOMContentLoaded', function(){
    carBrandsLoader.init('#brand', '.modal-dialog__brand-logo');
 });

