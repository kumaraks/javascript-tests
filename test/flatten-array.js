describe('flatten array', function () {
  it('should flatten an array', function () {
      var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]];
      var  expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];
      var arr = flatten(arr).sort();
      expect(arr).toEqual(expected);
  });

  function flatten(array) {
  return array.reduce(function(memo, el) {
    var items = Array.isArray(el) ? flatten(el) : [el];
    return memo.concat(items);
  }, []);
}
});