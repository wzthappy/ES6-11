// 引入 fs 模块
const fs = require('fs');

// fs.readFile(__dirname + '/文学.md', (err, data1) => {
//     fs.readFile(__dirname + '/文函数.md', (err, data2) => {
//         let result = data1 + '\r\n' + data2;
//         console.log(result);
//     });
// });

// 使用 Promise 实现
const p = new Promise((resovle, reject) => {
    fs.readFile(__dirname + '/文学.md', (err, data) => {
        resovle(data);
    });
}); 

p.then(value => {
    return new Promise((resovle, reject) => {
        fs.readFile(__dirname + '/文学.md', (err, data) => {
            resovle([value, data]);
        });
    }); 
}).then(value => {
    return new Promise((resovle, reject) => {
        fs.readFile(__dirname + '/文艺.md', (err, data) => {
            // 压入
            value.push(data);
            resovle(value);
        });
    }); 
}).then(value => {
    console.log(value.join('\r\n'));
});
