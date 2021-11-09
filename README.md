# G_checkin
Glados auto checkin script.
## Fork此项目
![image](https://user-images.githubusercontent.com/59683877/139403346-9932acd5-cb0e-4d34-8208-df0f137708cf.png)
点击Star

## 需要配置的Actions secrets：
在签到界面按F12,
点击签到，找到新出现的那个
点击Headers，往下翻，Requset Headers里找到COOKIE
### COOKIE
![NGSJ_CC(0L)K)`3FNVZL%4J](https://user-images.githubusercontent.com/59683877/139402714-ce2435c0-c115-4e47-b4a1-f7c6e918cbf0.png)
### SCKEY
注册Server酱，复制SendKey（之前写的SCKEY现在懒得改了
![image](https://user-images.githubusercontent.com/59683877/139403035-7ea6ad3f-78ec-43b7-963f-adf6b05749a3.png)

## 在自己fork下来的repo的Settings里配置secrets
![image](https://user-images.githubusercontent.com/59683877/139403552-dd192569-cabb-4bba-8470-055f03b365ad.png)
键填那两个分别大写的，值分别填上面获取的
配置好是这样的：
![image](https://user-images.githubusercontent.com/59683877/139404308-e9f581ca-116c-4b0e-89c4-04ff1af6cc77.png)

## 开启workflow
点Actions，开启workflow，配置文件是`.github/workflows/checkIn.yml`
开启后是这样的：
![image](https://user-images.githubusercontent.com/59683877/139404509-03b89c0a-451f-42e6-b07e-e023a66cdd16.png)


