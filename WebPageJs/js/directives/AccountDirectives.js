/// <///<reference path=".../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var AifLoginScreen = (function () {
        function AifLoginScreen() {
            this.templateUrl = 'js/views/login.html';
            this.restrict = 'E';
            this.contollerAs = 'lc';
            this.bindToContoller = true;
        }
        AifLoginScreen.prototype.link = function (scope, element, attributes, ctrl) {
        };
        AifLoginScreen.factory = function () {
            var directive = function () { return new AifLoginScreen(); };
            //directive.$inject = ['$location', 'toaster'];
            return directive;
        };
        return AifLoginScreen;
    }());
    AifLoginScreen.$inject = [''];
    aif.AifLoginScreen = AifLoginScreen;
    var AifAccountScreen = (function () {
        function AifAccountScreen() {
            this.templateUrl = 'js/views/account.html';
            this.restrict = 'E';
            this.contollerAs = 'av';
            this.bindToContoller = true;
        }
        AifAccountScreen.prototype.link = function (scope, element, attributes, ctrl) {
        };
        AifAccountScreen.factory = function () {
            var directive = function () { return new AifAccountScreen(); };
            //directive.$inject = ['$location', 'toaster'];
            return directive;
        };
        return AifAccountScreen;
    }());
    AifAccountScreen.$inject = [''];
    aif.AifAccountScreen = AifAccountScreen;
    var AifCreateFwScreen = (function () {
        function AifCreateFwScreen() {
            this.templateUrl = 'js/views/create.html';
            this.restrict = 'E';
            this.contollerAs = 'cf';
            this.bindToContoller = true;
        }
        AifCreateFwScreen.prototype.link = function (scope, element, attributes, ctrl) {
        };
        AifCreateFwScreen.factory = function () {
            var directive = function () { return new AifCreateFwScreen(); };
            //directive.$inject = ['$location', 'toaster'];
            return directive;
        };
        return AifCreateFwScreen;
    }());
    AifCreateFwScreen.$inject = [''];
    aif.AifCreateFwScreen = AifCreateFwScreen;
    var AifSaveAsScreen = (function () {
        function AifSaveAsScreen() {
            this.templateUrl = 'js/views/saveAs.html';
            this.restrict = 'E';
            this.contollerAs = 'cf';
            this.bindToContoller = true;
        }
        AifSaveAsScreen.prototype.link = function (scope, element, attributes, ctrl) {
        };
        AifSaveAsScreen.factory = function () {
            var directive = function () { return new AifSaveAsScreen(); };
            //directive.$inject = ['$location', 'toaster'];
            return directive;
        };
        return AifSaveAsScreen;
    }());
    AifSaveAsScreen.$inject = [''];
    aif.AifSaveAsScreen = AifSaveAsScreen;
    var AifRegisterScreen = (function () {
        function AifRegisterScreen() {
            this.templateUrl = 'js/views/register.html';
            this.restrict = 'E';
            this.contollerAs = 'rc';
            this.bindToContoller = true;
        }
        AifRegisterScreen.prototype.link = function (scope, element, attributes, ctrl) {
        };
        AifRegisterScreen.factory = function () {
            var directive = function () { return new AifRegisterScreen(); };
            //directive.$inject = ['$location', 'toaster'];
            return directive;
        };
        return AifRegisterScreen;
    }());
    AifRegisterScreen.$inject = [''];
    aif.AifRegisterScreen = AifRegisterScreen;
    var AifResetPassword = (function () {
        function AifResetPassword() {
            this.templateUrl = 'js/views/resetPassword.html';
            this.restrict = 'E';
            this.contollerAs = 'rc';
            this.bindToContoller = true;
        }
        AifResetPassword.prototype.link = function (scope, element, attributes, ctrl) {
        };
        AifResetPassword.factory = function () {
            var directive = function () { return new AifResetPassword(); };
            //directive.$inject = ['$location', 'toaster'];
            return directive;
        };
        return AifResetPassword;
    }());
    AifResetPassword.$inject = [''];
    aif.AifResetPassword = AifResetPassword;
    //
})(aif || (aif = {}));
