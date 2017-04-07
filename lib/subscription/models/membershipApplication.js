var _ = require("underscore")._;
var validator = require("validator");

var MembershipApplication = function(args){
  args || (args = {});
  _.extend(this,args);


  this.emailIsValid = function(){
    return validator.isEmail(this.email);
  };

  this.fNameIsValid = function(){
    return validator.isAlpha(this.fName);
  };

  this.lNameIsValid = function(){
    return validator.isAlpha(this.lName);
  };

  this.pwIsValid = function(){
    return validator.isAlphanumeric(this.pw) && this.pw.length > 7;
  };
  this.pwConfIsValid = function(){
    return this.confPw === this.pw;
  };

  this.validationMessage = function(){
    if(this.isValid()){
      return "Application is valid";
    }else if(!this.emailIsValid()){
      return "Email is invalid";
    }else if(!this.fNameIsValid()){
      return "first name is required";
    }else if(!this.lNameIsValid()){
      return "last name is required";
    }else if(!this.pwConfIsValid()){
      return "passwords do not match";
    }else if(!this.pwIsValid()){
      return "password must contain letters and numbers with a minimum of 7 characters";
    }
  };

  this.isValid = function(){
    return this.emailIsValid() &&
      this.fNameIsValid() &&
      this.lNameIsValid() &&
      this.pwIsValid() &&
      this.pwConfIsValid();
  };

};

module.exports = MembershipApplication;
