function a() {
  console.log('hello');
}

// 関数aにプロパティの設定
a.prop = 0;
a.method = function() {
  console.log('method');
}

a();  //関数aの呼び出し
a.method();  //methodプロパティの呼び出し
console.log(a.prop);  //propプロパティの呼び出し
