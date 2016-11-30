

Array.prototype.toTwenty = function() {
  return Array.range(20, 1);
};
Array.prototype.toForty  = function() {
  return Array.range(40, 2);
};
Array.prototype.toOneThousand = function() {
  return Array.range(1000, 10);
};
Array.prototype.search = function(n) {
  var start = 0;
  var end = this.length - 1;
  var result = {count: 0, index: -1, length: this.length};
  while (start <= end) {
    mid = (start + end) / 2 >> 0;
    if (this[start] === n) {
      result.index = start;
      return result;
    } else if (this[end] === n) {
      result.index = end;
      return result;
    } else if (this[mid] === n) {
      result.index = mid;
      return result;
    } else if (this[mid] > n) {
      end = mid - 1;
      start += 1;
    } else {
      start = mid + 1;
      end -= 1;
    }
    result.count += 1;
  }
  return result;
};


Array.range = function (end, step) {
  var array = [];
  for (var i = step; i <= end; i += step) {
    array.push(i);
  }
  return array;
}