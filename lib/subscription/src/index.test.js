var {expect} = require('chai');


var MembershipApplication = require("../models/membershipApplication");

describe('Applying for an account -- valid if...', () => {
  describe('Using valid email, firstname and lastname', () => {

    var validAccount;

  before(function () {
    validAccount = new MembershipApplication(
      {
       lName : "TestLNAME",
        fName : "TestLNAME",
        confPw : "c123457WW",
        pw : "c123457WW",
        email: "cesar@gm.com"

      }
    );
  });

    it("is a valid firstname", () => {
      expect(true).to.equal(validAccount.fNameIsValid());
    });

    it("is a valid last name", () => {
      expect(true).to.equal(validAccount.lNameIsValid());
    });

    it("the account doesn't already exist", () => {

    });

  it('passwords match', () => {
    expect(true).to.equal(validAccount.pwConfIsValid());
  })
    it('passwords aplhanum and > 7 char', () => {
      expect(true).to.equal(validAccount.pwIsValid());
    })

    it("is account valid",  () => {
      validAccount.validationMessage();
      expect(true).to.equal(validAccount.isValid());

    });

  })});



