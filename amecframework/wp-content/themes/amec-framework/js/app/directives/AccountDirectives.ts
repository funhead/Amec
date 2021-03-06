declare var aif_constants: any;
declare let Spinner: any;
declare let Tether: any;

module aif {
    'use strict';

    const TEMPLATE_PATH: string = aif_constants.templateDir;

    export class AifLoginScreen implements ng.IDirective {

        static $inject: Array<string> = [''];

        templateUrl: string = TEMPLATE_PATH + '/js/app/views/login.html';
        restrict: string = 'E';

        controller: LoginCtrl;
        controllerAs: string = 'lc';
        bindToContoller: boolean = true;

        link(scope, element, attributes, ctrl: LoginCtrl): void {

        }

        constructor() {

        }

        static factory(): ng.IDirectiveFactory {
            const directive = () => new AifLoginScreen();
            //directive.$inject = ['$location'];
            return directive;
        }


    }

    export class AifUserScreens implements ng.IDirective {

        static $inject: Array<string> = [''];

        templateUrl: string = TEMPLATE_PATH + '/js/app/views/userScreens.html';
        //template: string = "<h1>User Screens</h1>";
        restrict: string = 'E';
        controller = UserScreensCtrl;
        controllerAs: string = 'us';
        bindToController: boolean = true;
        replace = true;
        //replace=true;

        link(scope, element, attributes): void {

        }

        constructor() {

        }

        static factory(): ng.IDirectiveFactory {
            const directive = () => new AifUserScreens();
            //directive.$inject = ['$location'];
            return directive;
        }


    }


    export class AifAccountScreen implements ng.IDirective {

        static $inject: Array<string> = [''];

        templateUrl: string = TEMPLATE_PATH + '/js/app/views/account.html';
        restrict: string = 'E';
        controller: AccountViewCtrl;
        controllerAs: string = 'av';
        bindToController: boolean = true;

        link(scope, element, attributes, ctrl: AccountViewCtrl): void {

        }

        constructor() {

        }

        static factory(): ng.IDirectiveFactory {
            const directive = () => new AifAccountScreen();
            //directive.$inject = ['$location'];
            return directive;
        }


    }

    export class AifCreateFwScreen implements ng.IDirective {

        static $inject: Array<string> = [''];

        templateUrl: string = TEMPLATE_PATH + '/js/app/views/create.html';
        restrict: string = 'E';
        controller: CreateFrameworkCtrl;
        controllerAs: string = 'cf';
        bindToController: boolean = true;

        link(scope, element, attributes, ctrl: CreateFrameworkCtrl): void {

        }

        constructor() {

        }

        static factory(): ng.IDirectiveFactory {
            const directive = () => new AifCreateFwScreen();
            //directive.$inject = ['$location'];
            return directive;
        }


    }

    export class AifSaveAsScreen implements ng.IDirective {

        static $inject: Array<string> = [''];

        templateUrl: string = TEMPLATE_PATH + '/js/app/views/saveAs.html';
        restrict: string = 'E';
        controller: SaveAsCtrl;
        controllerAs: string = 'cf';
        bindToController: boolean = true;

        link(scope, element, attributes, ctrl: SaveAsCtrl): void {

        }

        constructor() {

        }

        static factory(): ng.IDirectiveFactory {
            const directive = () => new AifSaveAsScreen();
            //directive.$inject = ['$location'];
            return directive;
        }


    }

    export class AifRegisterScreen implements ng.IDirective {

        static $inject: Array<string> = [''];

        templateUrl: string = TEMPLATE_PATH + '/js/app/views/register.html';
        restrict: string = 'E';
        controller: RegisterCtrl;
        controllerAs: string = 'rc';
        bindToController: boolean = true;

        link(scope, element, attributes, ctrl: RegisterCtrl): void {

        }

        constructor() {

        }

        static factory(): ng.IDirectiveFactory {
            const directive = () => new AifRegisterScreen();
            //directive.$inject = ['$location'];
            return directive;
        }


    }

    export class AifForgotPassword implements ng.IDirective {

        static $inject: Array<string> = [''];

        templateUrl: string = TEMPLATE_PATH + '/js/app/views/forgotPassword.html';
        restrict: string = 'E';
        controller = ForgotPasswordCtrl;
        controllerAs: string = 'fp';
        bindToController: boolean = true;

        link(scope, element, attributes, ctrl: ForgotPasswordCtrl): void {

        }

        constructor() {

        }

        static factory(): ng.IDirectiveFactory {
            const directive = () => new AifForgotPassword();
            //directive.$inject = ['$location'];
            return directive;
        }
    }


    export class AifResetPassword implements ng.IDirective {

        static $inject: Array<string> = [''];

        templateUrl: string = TEMPLATE_PATH + '/js/app/views/resetPassword.html';
        restrict: string = 'E';
        controller = ResetPasswordCtrl;
        controllerAs: string = 'rp';
        bindToController: boolean = true;

        link(scope, element, attributes, ctrl: ResetPasswordCtrl): void {
            console.log(element)
        }

        constructor() {

        }

        static factory(): ng.IDirectiveFactory {
            const directive = () => new AifResetPassword();
            //directive.$inject = ['$location'];
            return directive;
        }
    }

    export class AifFrameworkSummary implements ng.IDirective {

        static $inject: Array<string> = [''];
        templateUrl: string = TEMPLATE_PATH + '/js/app/views/frameworkSummary.html';
        restrict: string = 'E';


        static factory(): ng.IDirectiveFactory {
            const directive = () => new AifFrameworkSummary();
            //directive.$inject = ['$location'];
            return directive;
        }
    }

    export class AifRegisterReminder implements ng.IDirective {

        static $inject: Array<string> = [''];
        templateUrl: string = TEMPLATE_PATH + '/js/app/views/registerReminder.html';
        restrict: string = 'A';
        scope: { [key: string]: string } = {
            target: '@',
            copyKey: '@',
            dismissFn: '=',
            copyFn: '=',
        };

        constructor(private $sce: ng.ISCEService){

        }

        private regTether:any;

        link(scope, element, attributes): void {

            if(this.regTether)
            {
                this.regTether.show();
            }  else {
                this.doTether();
            }

            if(scope.copyFn && scope.copyKey){
                let copy = scope.copyFn(scope.copyKey, null, true);
                if(copy) {
                    scope.copy = copy;
                    scope.dismissText = scope.copyFn(scope.copyKey + '_D', "Don't show again") || "Don't show again";
                } else {
                    scope.copy = this.$sce.trustAsHtml("<p>New functionality has been added to the AMEC Integrated Evaluation Framework to improve the user experience. </p><p>Now you can save the progress of your work and can save and edit up to 10 different frameworks per user account.</p><p> To do so you must register, create an account and log in. While it is not compulsory to do so, this important new functionality is only available once logged into your account. Please either sign in or register if it’s your first time here to begin.Don’t worry, use of the framework remains completely free!</p>")
                    scope.dismissText = "Don't show again";
                }
            } else {
                scope.copy = this.$sce.trustAsHtml("<p>New functionality has been added to the AMEC Integrated Evaluation Framework to improve the user experience. </p><p>Now you can save the progress of your work and can save and edit up to 10 different frameworks per user account.</p><p> To do so you must register, create an account and log in. While it is not compulsory to do so, this important new functionality is only available once logged into your account. Please either sign in or register if it’s your first time here to begin.Don’t worry, use of the framework remains completely free!</p>")
                scope.dismissText = "Don't show again";
            }


            scope.$on('$destroy', () => {
                if(this.regTether){
                    this.regTether.destroy();
                    delete this.regTether;
                }
            });

            scope.dismiss = () => {

                scope.close();
                if(scope.dismissFn && typeof scope.dismissFn === "function")
                    scope.dismissFn();
            };

            scope.close = () => {

                if(this.regTether){
                    jQuery(this.regTether.element).remove();
                    this.regTether.destroy();
                }
            }


        }


        private doTether(): void {

            let tetherOptions = {
                attachment: "top left",
                element: "#register-reminder",
                target: "#register-button",
                targetAttachment: "bottom left"
            };

            this.regTether = new Tether(tetherOptions);

        }

        static factory(): ng.IDirectiveFactory {
            const directive = ($sce:ng.ISCEService) => new AifRegisterReminder($sce);
            directive.$inject = ['$sce'];
            return directive;
        }
    }

    export class AifLoadingSpinner implements ng.IDirective {

        restrict: string = 'A';
        scope: { [key: string]: string } = {
            loading: '='
        };

        link(scope, element, attributes, ctrl: InputGridCtrl): void {

            if(!Spinner) return;

            let opts = {
                lines: 8 // The number of lines to draw
                , length: 0 // The length of each line
                , width: 6 // The line thickness
                , radius: 14 // The radius of the inner circle
                , scale: 1 // Scales overall size of the spinner
                , corners: 1 // Corner roundness (0..1)
                , color: '#fff' // #rgb or #rrggbb or array of colors
                , opacity: 0.25 // Opacity of the lines
                , rotate: 12 // The rotation offset
                , direction: 1 // 1: clockwise, -1: counterclockwise
                , speed: 1.5 // Rounds per second
                , trail: 64 // Afterglow percentage
                , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
                , zIndex: 2e9 // The z-index (defaults to 2000000000)
                , className: 'spinner' // The CSS class to assign to the spinner
                , top: '50%' // Top position relative to parent
                , left: '50%' // Left position relative to parent
                , shadow: false // Whether to render a shadow
                , hwaccel: false // Whether to use hardware acceleration
                , position: 'absolute' // Element positioning
            };

            let spinner = new Spinner(opts).spin(element[0]);
            let jSpinner = jQuery(spinner.el);
            if(!scope.loading) jSpinner.hide();

            scope.$watch('loading', function (newValue, oldValue) {
                if(newValue){
                    jQuery(element).children().hide();
                    jSpinner.show();

                } else {
                    jQuery(element).children().show();
                    jSpinner.hide();
                }
            });
        }

        static factory(): ng.IDirectiveFactory {
            const directive = () => new AifLoadingSpinner();
            return directive;
        }

    }

    export class AifInputGrid implements ng.IDirective {

        static $inject: Array<string> = ['$timeout'];
        templateUrl: string = TEMPLATE_PATH + '/js/app/views/inputGrid.html';
        restrict: string = 'E';
        scope: { [key: string]: string } = {
            step: '='
        };
        controller = InputGridCtrl;
        controllerAs: string = 'ig';
        bindToController: boolean = true;

        constructor(private $timeout: ng.ITimeoutService) {

        }

        link(scope, element, attributes, ctrl: InputGridCtrl): void {
            let handler: string = null;
            if (ctrl) {

                handler = "click.outsideHandler" + ctrl.step.stepIndex.toString();
                let self = this;


                jQuery(element).on(handler, function (e) {
                    console.log(handler);
                    e.stopPropagation();
                });

                let allowFirst: boolean = true;
                jQuery(document).on(handler, function (e) {
                    if (allowFirst) {
                        allowFirst = false;
                    } else {
                        self.$timeout(function () {
                            ctrl.close();
                        });
                    }
                })


                ctrl.init()
            }

            scope.$on('$destroy', function (e) {
                console.log('off ' + handler);
                if (element) jQuery(element).off(handler);
                if (handler) jQuery(document).off(handler);
            });
        }

        static factory(): ng.IDirectiveFactory {
            const directive = ($timeout: ng.ITimeoutService) => new AifInputGrid($timeout);
            directive.$inject = ['$timeout'];
            return directive;
        }
    }

    export class AifListInputTile implements ng.IDirective {

        static $inject: Array<string> = [''];

        templateUrl: string = TEMPLATE_PATH + '/js/app/views/listInputTile.html';
        restrict: string = 'E';
        scope: { [key: string]: string } = {
            cell: '=',
            step: '='
        };
        controller = ListInputTileCtrl;
        controllerAs: string = 'li';
        //replace=true;

        link(scope, element, attributes): void {
        }

        constructor() {

        }

        static factory(): ng.IDirectiveFactory {
            const directive = () => new AifListInputTile();
            //directive.$inject = ['$location'];
            return directive;
        }

    }


}