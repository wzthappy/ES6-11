import * as m1from from "./hello.js";
// 获取元素
const btn = document.getElementById('btn');

btn.onclick = function() {
    import(__dirname + '/hello.js').then(module => {
        module.hello();
    });
}