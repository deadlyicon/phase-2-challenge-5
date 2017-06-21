/*describe('')
describe('Determine day of the Week', function() {
  it('returns day of the week for a given date', function() {
    expect(weekday).toBe(month + ' ', + day + ', ' + year)
  })
})
*/

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
