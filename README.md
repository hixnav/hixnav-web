# 海芯导航（hixnav）

## 安装依赖
```
npm install
```

### 运行
```
npm run serve
```

### 编译产物
```
npm run build
```

### 编译Go SDK包
#### 安装Golang

转至[下载](https://go.dev/dl/)


#### 安装依赖
```shell
go get -u github.com/jteeuwen/go-bindata/...
go get -u github.com/elazarl/go-bindata-assetfs/...
```

###### 编译打包

```shell
 go-bindata -o pkg/bindata.go -pkg pkg ./dist/...
```
