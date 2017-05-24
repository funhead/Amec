

module aif {
  'use strict';

  export class ForgotPasswordCtrl {

    public static $inject = ["viewService", "userRepository" ];


    public linkSent:boolean;
    public resetError:string = null;

    constructor(public vs:ViewService, private userRepository: UserRepository) {
      this.init();
    }

    public init():void {

    }

    public resend():void {
      this.linkSent = false;
    }

    public sendReset(form:ng.IFormController):void{
      if(!form.$valid) return;
      this.userRepository.sendPasswordLink(this.email).then(s =>{

        if(s.success){
          this.resetError = null;
          this.linkSent = true;
        } else {
          this.resetError = s.message;
        }

      })


    }

  }

  export class ResetPasswordCtrl {

    public static $inject = ["viewService", "userRepository" ];

    public email:string;
    public key:string;
    public password:string;
    public passwordConfirmation:string;
    public linkSent:boolean;
    public resetError:string = null;

    constructor(public vs:ViewService, private userRepository: UserRepository) {
      this.init();
    }

    public init():void {
      if(this.vs && this.vs.passwordResetParams){
        this.email = this.vs.passwordResetParams.email;
        this.key = this.vs.passwordResetParams.key;
      }
    }

    public resend():void {
      this.linkSent = false;
    }

    public sendReset(form:ng.IFormController):void{
      if(!form.$valid) return;
      this.userRepository.sendPasswordLink(this.email).then(s =>{

        if(s.success){
          this.resetError = null;
          this.linkSent = true;
        } else {
          this.resetError = s.message;
        }

      })


    }

  }

}

