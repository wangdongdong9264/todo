# todo

## plan

1. node mongodb
2. node test
3. mongodb test
4. vue todoList
5. vue test
6. docker
7. github actions

## start

### 安装koa typescrpt 依赖

```bash
yarn add koa koa-router
yarn add -D typescript ts-node nodemon
yarn add -D @types/koa @types/koa-router

```

### 配置 eslint ts

```bash
yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

### 配置 jest ts

```bash

yarn  add -D jest ts-jest

```

### mongodb

安装 mongodb

```sh

yarn add mongodb

```

连接数据库

```sh

# --dbpath 设置数据存放目录
# --logpath 设置日志存放目录
# --fork 在后台运行
mongod --dbpath /Users/wangdongdong/Downloads/mongodb/db --logpath /Users/wangdongdong/Downloads/mongodb/log/mongo.log --fork

```

mac默认配置`/usr/local/etc/mongod.conf`

```yml
systemLog:
  destination: file
  path: /Users/wangdongdong/Downloads/mongodb/log/mongo.log
  logAppend: true
storage:
  dbPath: /Users/wangdongdong/Downloads/mongodb/db
net:
  bindIp: 127.0.0.1
security:
  authorization: enabled

```

更改 mongod 的启动配置

```sh
mongod --config /Users/wangdongdong/Downloads/mongodb/config/mongod.conf

```

列表设置

```json
{
  "title":"代办标题",
  "desc":"详情",
  "startDate": "创建时间", // 2020-11-09
  "endDate": "结束时间", // 2020-11-09
  "complete": true, // 代办完成?
}
```

客户端 使用 ant Pro

```shell script
yarn create umi
# 简化命令 1. 全局安装umi或更新umi到最新 2. 执行包package.json中bin指向的程序 并转发参数
# yarn global add umi
# umi
```

## which means
