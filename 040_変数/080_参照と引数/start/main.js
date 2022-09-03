let a = 0;

function fn1(arg1) {
  arg1 = 1;
  console.log(a, arg1);
}

fn1(a);

//上記の内容は以下と同じ

let arg1 = a;
arg1 = 1;
console.log(a, arg1);
