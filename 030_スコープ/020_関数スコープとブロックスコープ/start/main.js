function a() {
  let b = 0;   // 変数bは関数aの中でのみ取得可能
  console.log(b);
}

a();

{
  let c = 1;
  console.log(c);
}
