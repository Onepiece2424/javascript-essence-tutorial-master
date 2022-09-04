window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
const ref = person.hello;
ref();


function doTwice(func) {
    func(); // 1回目！
    func(); // 2回目！
  }

  // あいさつするだけの関数
  function hello() {
    console.log('Hello!');
  }

  // あいさつを2回実行する
  doTwice(hello);
