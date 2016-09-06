var southParkNames = require('./index');

describe('South Park Names', function () {
  describe('all', function () {
    it('should contain items', function() {
      expect(southParkNames.all.length > 0).toBeTruthy();
    });
    it('should contain Towelie', function() {
      expect(southParkNames.all).toContain('Towelie');
    });
  });
  describe('random', function () {
    it('should return a item', function() {
      expect(southParkNames.random()).toBeTruthy();
    });
  });
});
