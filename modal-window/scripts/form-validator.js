(function (exports) {
    'use strict';
    var elementsToBeValidated = ['manufacturing-year', 'mileage', 'price', 'damage-reason'];
    var formSelector = '.modal-dialog__form';
    
    var validate = function (element, validationPattern) {
        element.setAttribute('validity', 'valid');
        if (!validationPattern.test(element.value)) {
            element.setAttribute('validity', 'invalid');
        }
    };
    
    var validateInteger = function (element, decimalFormat) {
        var validationPattern = /^[1-9][0-9]*[0-9]$/;
        validate(element, validationPattern);
    };
    
    var validateDecimal = function (element, decimalFormat) {
        var validationPattern = /^[1-9][0-9]*([\.][0-9]+)?$/;
        validate(element, validationPattern);
    };
    
    var validateDamageDetails = function (element) {
        var validationPattern = /[.]{20}[.]*/;
        validate(element, validationPattern);
    };
    
    var validateYear = function(element) {
        var validationPattern = /(^19[0-9]{2}$)|(^20((0[0-9])|(1[0-5]))$)/;
        validate(element, validationPattern);
    };
    
    exports.init = function () {
        this.validateForm();
    };
    
    exports.validateForm = function () {
        var form = document.querySelector(formSelector), i;
        document.querySelector('.modal-dialog__form')
            .addEventListener('submit', function (e) {
                for (i = 0; i < elementsToBeValidated.length; i += 1) {
                    var elemId = elementsToBeValidated[i],
                        validationType = form.elements[elemId].getAttribute('validation-type');
                    
                    switch (validationType) {
                        case 'integer-validation':
                            validateInteger(form.elements[elemId]);
                            break;
                        case 'decimal-validation':
                            validateDecimal(form.elements[elemId]);
                            break;
                        case 'year-validation':
                            validateYear(form.elements[elemId]);
                            break;
                        case 'damage-details':
                            validateDamageDetails(form.elements[elemId]);
                            break;
                    }
                }
            });
    };
    
}(this.formValidatorModule = {}));