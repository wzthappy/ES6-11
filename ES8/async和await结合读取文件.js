// 1. 引入 fs 模块
const fs = require('fs');

// 读取  文学
function readWenXue() {
    return new Promise((resolve, reject) => {
        fs.readFile(__dirname + '/文学.md', (err, data) => {
            // 如果失败
            if (err) reject(err);
            // 如果成功
            resolve(data);
        });
    });
}

// 读取  文函数
function readWenHanShu() {
    return new Promise((resolve, reject) => {
        fs.readFile(__dirname + '/文函数.md', (err, data) => {
            // 如果失败
            if (err) reject(err);
            // 如果成功
            resolve(data);
        });
    });
}

// 读取  文艺
function readWenYi() {
    return new Promise((resolve, reject) => {
        fs.readFile(__dirname + '/文艺.md', (err, data) => {
            // 如果失败
            if (err) reject(err);
            // 如果成功
            resolve(data);
        });
    });
}

// 声明一个 async 函数
async function main() {
    // 获取  文学 
    let wenxue = await readWenXue();
    // 获取   文函数
    let eanhanshu = await readWenHanShu();
    // 获取    文艺
    let wenyi = await readWenYi();

    console.log(wenxue.toString());
    console.log(eanhanshu.toString());
    console.log(wenyi.toString());
}

main();