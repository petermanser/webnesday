'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('/app/index.html');
  });


  it('should automatically redirect to / when location hash/fragment is empty', function() {
    expect(browser().location().url()).toBe("/");
  });


  describe('signup', function() {

    it('should render signup when user navigates to /', function() {
      expect(element('h1').text()).
        toMatch("Sign up for further information.");
      expect(element('.active').text()).
        toMatch("Sign up");
    });

  });

  describe('signup click', function() {

    beforeEach(function() {
      browser().navigateTo('#/');
    });

    it('should render signup when user navigates to signup', function() {
      expect(element('h1').text()).
        toMatch("Sign up for further information");
      expect(element('.active').text()).
        toMatch("Sign up");
    });

  });


  describe('contact', function() {

    beforeEach(function() {
      browser().navigateTo('#/contact');
    });


    it('should render contact when user navigates to contact', function() {
      expect(element('[ng-view] p:first').text()).
        toMatch(/Currently we're looking for companies to host the Webnesday's and to sponsor beer. If your company wants to do either of it, please contact us./);
      expect(element('.active').text()).
        toMatch(/Contact/);
    });

  });
});
