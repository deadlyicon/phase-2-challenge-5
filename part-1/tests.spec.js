describe('weekday', function( ())
it('should return day of the Week', function() {

describe('snippet', function() {
  it('should return snippet', function() {
    var string = 'Hello world!';
    var maxlength = 5;
    function snippet(string, maxlength) {
      if (string > maxlength) {
        return string.substring(0, maxlength - 3) + '...'
      };
      expect(snippet()).toEqual('He...')
    }) it('should return string', function() {
      var string = 'Hello world';
      var maxlength = 15;
      function snippet(string, maxlength) {
        if (string < maxlength) {
          return string
        };
        expect(snippet()).toEqual('Hello world!')
      }
    })
)}
