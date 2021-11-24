# Glados_checkin
Glados auto checkin script.

## 科班项目，禁止非科班访问
## Fork此项目
点击Star, 点击Fork
![1.png](https://user-images.githubusercontent.com/59683877/141311261-f03aa9e5-972f-4a99-9e76-182b86cda314.png)

## 需要配置的Actions secrets：
在签到界面按F12,
点击签到，找到新出现的那个
点击Headers，往下翻，Requset Headers里找到COOKIE
![2.png](https://user-images.githubusercontent.com/59683877/141311487-2deff965-b9b1-455f-aa72-df2fab52cbd9.png)

### COOKIE
![3.png](https://user-images.githubusercontent.com/59683877/141311576-e5204c3f-a487-452d-bca0-632c2efc353b.png)
复制cookie值，回到fork下来的项目
![4.png](https://user-images.githubusercontent.com/59683877/141311654-ce46dcc9-4e06-4d21-9a0c-cd92ab860c99.png)
![5.png](https://user-images.githubusercontent.com/59683877/141311918-2c47df2c-7bec-4ab6-908a-2c60d48af26e.png)


### SCKEY
注册Server酱，复制SendKey（之前写的SCKEY现在懒得改了
![6.png](https://user-images.githubusercontent.com/59683877/141311828-48c487a5-8012-43cb-8c34-8add5200e3cd.png)
![7.png](https://user-images.githubusercontent.com/59683877/141311840-e82510a6-49ee-4914-871a-a919e920c440.png)
配置secret
![8.png](https://user-images.githubusercontent.com/59683877/141311893-e41a0f40-03d8-4283-a8b8-661d85f9b4c1.png)


## 在自己fork下来的repo的Settings里配置secrets
刚刚配置的，配置好是这样的：
![image](https://user-images.githubusercontent.com/59683877/141312328-ca93eec5-347f-456e-b9e3-242f8b82daaf.png)

## 开启workflow
点Actions，开启workflow，配置文件是`.github/workflows/checkIn.yml`
![{5DJ4M9LQE7CE073B(_8Y G](https://user-images.githubusercontent.com/59683877/141312427-8a7b83bb-b6f5-4abd-9cb5-bcb4c4cece41.png)
![0_N~ML(SR{EW3 TLVYY{X16](https://user-images.githubusercontent.com/59683877/141312437-2cf06c47-356e-406d-9c60-6849c1b8fcf7.png)

开启后是这样的：
![image](https://user-images.githubusercontent.com/59683877/139404509-03b89c0a-451f-42e6-b07e-e023a66cdd16.png)

以后每天10：10左右会收到自动签到成功的推送，现在可以在js代码后面加一个空行，手动试试效果


