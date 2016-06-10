var uniqueInOrder = function(iterable){
  var arr;
  Array.isArray(iterable) ? arr = iterable : arr = iterable.split('');

 return arr.reduce(function(u, cur, i, a){
    if(cur !== a[i +1]){
      u.push(cur)
      return u
    } else {
      return u
    }
  }, [])
}

console.log(uniqueInOrder("AAAABBCAADD"));
