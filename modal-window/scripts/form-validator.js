(function (exports) {
    'use strict';
    var elementsToBeValidated = ['announcement-title', 'manufacturing-year', 'mileage', 'price', 'damage-reason', 'vehicle-description', 'color'];
    var formSelector = '.modal-dialog__form';
    var form = document.querySelector(formSelector);
    
    var validate = function (element, validationPattern, errorMessage) {
        element.setAttribute('validity', 'valid');
         element.setCustomValidity(''); 
        var customValidation = validationPattern.test(element.value);
        if ((customValidation && element.validity.valid) === false) {
            element.setAttribute('validity', 'invalid');
            element.setCustomValidity(errorMessage);
        }
    };
    
    var validateInteger = function (element, decimalFormat) {
        var validationPattern = /^[1-9][0-9]*[0-9]$/;
        var errorMessage = 'Integer format required with at least two digits';
        validate(element, validationPattern, errorMessage);
    };
    
    var validateDecimal = function (element, decimalFormat) {
        var validationPattern = /^[1-9][0-9]*([\.][0-9]+)?$/;
        var errorMessage = 'Decimal format required';
        validate(element, validationPattern, errorMessage);
    };
    
    var validateDamageDetails = function (element) {
        var validationPattern = /.{20}.*/;
        var errorMessage = 'Details need to be provided; at least 20 chars';
        validate(element, validationPattern, errorMessage);
    };
    
    var validateYear = function (element) {
        var validationPattern = /^(19[0-9]{2}$)|(^20((0[0-9]$)|(1[0-5]$)))/;        
        var errorMessage = 'Please enter a year between 1900-2015';
        validate(element, validationPattern, errorMessage);
    };
    
    var defaultBrowserValidation = function (element) {
        element.setAttribute('validity', 'valid');
        element.setCustomValidity('');
        if(element.validity.valid === false) {
            element.setAttribute('validity', 'invalid');
            element.setCustomValidity('Plese fill out this field'); 
        }
    };
    
    var applyAppropiateValidation = function (element) {
        var validationType = element.getAttribute('validation-type') || '';
        switch (validationType) {
            case 'integer-validation':
                validateInteger(element);
                break;
            case 'decimal-validation':
                validateDecimal(element);
                break;
            case 'year-validation':
                validateYear(element);
                break;
            case 'damage-details':
                validateDamageDetails(element);
                break;
            default:
                defaultBrowserValidation(element);
                break;
        }
    };
    
    var preventDefaultValidationMessages = function (element) {
        element.addEventListener('invalid', function(e) {
            e.preventDefault();
        });
    };
    
    var attachPrevent = function () {
        var i;
         for (i = 0; i < elementsToBeValidated.length; i += 1) {
             var element = form.elements.namedItem(elementsToBeValidated[i]);
             preventDefaultValidationMessages(element);
         }
    };
    
    var attachOnBlurListener = function(element) {
        element.addEventListener('blur', function(e){
            applyAppropiateValidation(element);
        });
    };
    
    exports.init = function () {
        this.validateForm();
       // attachPrevent();
    };
    
    exports.validateForm = function () {
       
        form.addEventListener('submit', function (e) {
            for (var i = 0; i < elementsToBeValidated.length; i += 1) {
                var elemId = elementsToBeValidated[i],
                    validationType = form.elements[elemId].getAttribute('validation-type');
                applyAppropiateValidation(form.elements.namedItem(elemId));
            }
        });
    };
    
    exports.validateFieldsOnBlur= function () {
         var i;
         for (i = 0; i < elementsToBeValidated.length; i += 1) {
             var element = form.elements.namedItem(elementsToBeValidated[i]);
             attachOnBlurListener(element);
         }
    };
    
}(this.formValidatorModule = {}));