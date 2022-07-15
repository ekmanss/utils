const {join, extname, basename} = require('path');
const {readdirSync, renameSync} = require('fs');

const path = require('path');
const fs = require("fs");
const url = path.join('./nfts/');

let i = 0;

for (const oldFile of readdirSync(url, 'utf8')) {
    let item = oldFile;

    let length = item.split('.').length;
    // 获取文件后缀名
    let type = '.' + item.split('.')[length - 1];
    let oldName = item;
    // 新名称,根据需求修改名称，可以使用正则等等
    // 后缀可用之前的type 也可统一自定义
    let newName = i + '.jpg';
    i++;
    renameSync(url + oldName, url + newName);
}