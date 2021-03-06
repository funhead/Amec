let getEntireDom;
let downloadPDF;

module aif {
    'use strict';
    import IFormController = angular.IFormController;

    export class AppCtrl {

        public app: AifApp;
        public static $inject = ["$scope", "$interval", "$sce", "$location", "userRepository", "viewService"];

        public loginFailure: boolean = false;
        public message: string = null;
        public initialised: boolean = false;

        public currentFramework: AifFramework = null;
        public currentUser: AifUser = null;
        public displayLoginReminder: boolean;
        private reminderIntervalPromise: ng.IPromise<boolean>;

        constructor(private $scope: ng.IScope, private $interval: ng.IIntervalService, private $sce: ng.ISCEService, private $location: ng.ILocationService,
                    private userRepository: UserRepository, public vs: ViewService) {
            this.init();
        }

        private init(): void {

            this.$scope.$on("user:loggedIn", (event: ng.IAngularEvent, data: any) => {
                this.userLoggedChanged(data)
            });
            this.$scope.$on("user:loggedOut", (event: ng.IAngularEvent) => {
                this.userLoggedChanged(null)
            });
            this.$scope.$on("framework:frameworkUpdated", (event: ng.IAngularEvent, data: any) => {
                this.setCurrentFramework(data)
            });
            this.$scope.$on("framework:frameworkSwitched", (event: ng.IAngularEvent, data: any) => {
                this.setCurrentFramework(data)
            });

            this.vs.showLoading();
            this.userRepository.get().then(
                status => {
                    if (status.backendError) {
                        //Handle no back end here and return
                    }


                    let url = this.$location.absUrl();

                    if (url.toLowerCase().indexOf("rp=true") > -1) {
                        let params = this.extractPasswordParams(url);
                        this.vs.showResetPassword(params.key, params.email);
                        this.initialised = true;
                        return;
                    }

                    this.vs.resetView();
                    if (status.user) {
                        this.currentUser = status.user;
                        if (this.currentUser.loggedInFromSave) {
                            this.initialised = true;
                            this.vs.showCreateFramework(AccountDisplayRoute.FromSave, this.currentUser.hasFrameworks());
                            return;
                        }
                        if (!this.currentUser.currentFramework) {
                            this.initialised = true;

                            if (this.userRepository.currentUserFramework && this.userRepository.currentUserFramework.isDraft) {

                                this.vs.showCreateFramework(AccountDisplayRoute.FromDetectUnsaved, this.currentUser.hasFrameworks());
                                return;
                            }

                            if (this.currentUser.hasExistingFrameworks())
                                this.vs.showAccount(AccountDisplayRoute.FromLogin);
                            else {
                                this.vs.showCreateFramework(AccountDisplayRoute.FromLogin, this.currentUser.hasFrameworks());
                            }
                        }
                        if (this.currentUser.currentFramework) this.currentFramework = this.currentUser.currentFramework;

                    } else {
                        if (status.registerReminderStatus < ReminderStatus.Dismissed)
                            this.reminderIntervalPromise = this.$interval((): boolean => {

                                if (this.vs.displayLogin || this.vs.displayRegister) {
                                    return true;
                                }
                                this.$interval.cancel(this.reminderIntervalPromise);
                                this.displayLoginReminder = true;


                                return false;
                            }, 2500);

                    }
                    this.initialised = true;
                }
            );
        }

        private getCopyFunction = (key:string, defaultCopy:string = null, asHtml:boolean = false):string =>  {
            return this.vs.getCopyForKey(key, defaultCopy, asHtml);
        };


        private userLoggedChanged(user: AifUser): void {
            if (user) {
                this.displayLoginReminder = false;
                if (this.reminderIntervalPromise) this.$interval.cancel(this.reminderIntervalPromise);
                this.currentUser = user;
                if (this.currentUser.currentFramework) {
                    this.setCurrentFramework(this.currentUser.currentFramework);
                } else {
                    if (user.hasExistingFrameworks())
                        this.vs.showAccount(AccountDisplayRoute.FromLogin);
                    else {
                        this.vs.showCreateFramework(AccountDisplayRoute.FromLogin, false);
                    }
                }
            } else {
                this.currentUser = null;
                this.currentFramework = null;
            }

        }

        private setCurrentFramework(framework: AifFramework): void {
            if (this.currentUser) {
                this.currentFramework = this.currentUser.currentFramework;
            } else {
                this.currentFramework = framework;
            }
        }

        public dismissLoginReminder = (): void => {

            this.displayLoginReminder = false;
            this.userRepository.setRegisterReminderStatus(ReminderStatus.Dismissed)

        };

        public isLoggedIn(): boolean {

            return !!this.currentUser;

        }

        public submitFramework() {
            //TODO: saving etc

            this.vs.showSummary();
        }

        public showLogin(): void {
            this.vs.showLogin();
        }

        public showForgottenDetails(): void {
            this.vs.showForgottenDetails();
        }

        public hideLoginBox(): void {
            this.vs.resetView();
        }

        public showRegister(): void {
            this.vs.showRegister();
        }

        public viewAccount(): void {
            this.vs.showAccount(AccountDisplayRoute.FromViewAccount);
        }

        public saveProgress() {
            let loggedIn = this.isLoggedIn();
            let hasExisting = loggedIn ? this.currentUser.hasExistingFrameworks() : false;
            let hasCurrent = loggedIn ? !!this.currentUser.currentFramework : false;
            this.vs.attemptSave(loggedIn, hasExisting, !hasCurrent);
        }

        public downloadAifPdf() {
            let title = this.currentFramework ? this.currentFramework.name : null;
            let fileName = "AMEC Measurement Framework" + (title ? ' - ' + title : '');
            if (getEntireDom && downloadPDF) {
                let opts = {
                    document_type: 'pdf',
                    document_content: getEntireDom(title),
                    name: fileName,
                    javascript: false,
                    test: false
                };
                downloadPDF(opts, 'UmPbAOzv3fSfgTsHLZV');
            }

        }

        public registerNewUser(form: ng.IFormController) {
            if (!form.$valid) return;
            this.hideLoginBox();
        }


        private extractPasswordParams(url: string): any {
            let split = url.indexOf("?");
            if (split > -1) {

                let argString = url.substr(split + 1);
                let args = argString.split("&").map(s => {
                    let kv = s.split("=");
                    return {key: decodeURIComponent(kv[0]).toLowerCase(), value: decodeURIComponent(kv[1])};
                });
                let key:string, email:string;
                for (let i = 0; i < args.length; i++) {
                    let kv = args[i];
                    if(kv.key === "key") key = kv.value;
                    if(kv.key === "login") email = kv.value;

                }

                if(key && email){
                    return {key:key, email: email};
                }


            }
            return {};

        }
    }
}