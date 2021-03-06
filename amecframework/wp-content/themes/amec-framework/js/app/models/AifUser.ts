/// <reference path="../_all.ts" />


/*

  New User

    Login -> don't have an account? -> register
    Register -> create subscriber + meta, return user object
        username
        password
        First Name
        Last Name
        Job Title
        Company
        Language

        -> User logged in
        -> No frameworks -> create new framework


  Existing User

     Register -> already registered -> forgot password?
     Forgot details
     Successful Login

        -> User logged in

        Has saved frameworks?

          Yes
          -> List existing
          -> or create new

          No
          -> No frameworks -> create new framework


    Create new framework

      Name
      Description


    Save frame work

        User logged in?
          No -> You need to log in to save.  User login below or register as a new amec user

          Yes ->

          Framework loaded?

            Yes?

            Save as xxxx dropdown or create new


            No ?

              Has other frameworks?

                No?

                Create new (limit)

                Yes?

                Create new or save over existing








* */

module aif {
  'use strict';

  export class AifApp {

    public maxFrameworks: number = 3;

    public user: AifUser = null;

    public loggedIn(): boolean {
        return this.user !== null;

    }
  }




  export interface IAifUser {

    email:string;
    firstName:string,
    lastName:string,
    organisation:string,
    jobTitle:string,
    language:string,
    contactNumber:string
  }
  
  export class AppUser implements IAifUser {

    constructor(
      public email:string,
      public firstName:string,
      public lastName:string,
      public organisation:string,
      public jobTitle:string,
      public language:string,
      public contactNumber:string,

    ){}

    public password: string = null;
    public passwordConfirmation: string = null;
    public country:string
  }

  export class AifUser implements IAifUser {

    public frameworks : Array<AifFramework> = [];
    public currentFramework : AifFramework = null;

    public hasExistingFrameworks():boolean {
      return this.frameworks != null && this.frameworks.length > 0;
    }

    public id?:number;
    public loggedInFromSave?:boolean;

    constructor(
        public email:string,
        public firstName:string,
        public lastName:string,
        public organisation:string,
        public jobTitle:string,
        public language:string,
        public contactNumber:string
    ){


    }


    setExistingFramework(id:number):void {
      let matches = this.frameworks.filter(f => f.id === id);
      if(matches.length) {
        this.currentFramework = matches[0];
      } else {
        this.currentFramework = null;
      }
    }

    addNewFramework(newFramework:AifFramework){
          this.frameworks.push(newFramework);
          this.currentFramework = newFramework;

    }

    hasFrameworks():boolean{
          return this.frameworks.length >0;
    }

    asAppUser():AppUser {
          return new AppUser(
            this.email,
            this.firstName,
            this.lastName,
            this.organisation,
            this.jobTitle,
            this.language,
            this.contactNumber
          )
            ;
    }

    public static createFromData(data: IAifUser):AifUser{

          return new AifUser(
            data.email,
            data.firstName,
            data.lastName,
            data.organisation,
            data.jobTitle,
            data.language,
            data.contactNumber
          );


    }

  }



  export class LoginResult {

    constructor(
      public success:boolean,
      public user:AifUser,
      public message:string
    ){

    }

  }



}