module.exports = {

  findMissing: function findMissing(arr1, arr2){
  var Arr = [];
  var Brr = [];
  if (arr1.length === 0 || arr2.length === 0) return 0;
  else if (arr1.length==arr2.length) return 0;
  else if (arr1.length > arr2.length){
    Arr = arr1;
    Brr = arr2;
  }
  else{
    Arr=arr2;
    Brr=arr1;
  }
  for (var i = 0 ; i<Arr.length;i++){
    var position = Brr.indexOf(Arr[i]);
    if (position == -1) return Arr[i];
    }
}
}