'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('/webnesday/app/index.html');
  });


  it('should automatically redirect to / when location hash/fragment is empty', function() {
    expect(browser().location().url()).toBe("/");
  });


  describe('signup', function() {

    it('should render signup when user navigates to /', function() {
      expect(element('h1').text()).
        toMatch("Sign up for further information.");
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser().navigateTo('/webnesday/app/#/contact');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element('[ng-view] p:first').text()).
        toMatch(/Currently we're looking for companies to host the Webnesday's and to sponsor beer. If your company wants to do either of it, please contact us./);
    });

  });
});
