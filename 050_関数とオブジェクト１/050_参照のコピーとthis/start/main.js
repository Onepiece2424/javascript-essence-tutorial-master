window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
        a();

        const person = {
            name: 'Tim',
            hello: function() {
                console.log('Hello ' + this.name);
                a();
            }
        }
        person.hello();
    }
}
// const ref = person.hello;
// ref();

person.hello();

function a() {
    console.log('Hello ' + this.name);
}




// function doTwice(func) {
//     func(); // 1回目！
//     func(); // 2回目！
//   }

//   // あいさつするだけの関数
//   function hello() {
//     console.log('Hello!');
//   }

//   // あいさつを2回実行する
//   doTwice(hello);
