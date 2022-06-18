### <div align = "center"> Concept of JWT Bearer Token and Accessing to other services using Microservice architecture </div> 

---
- used service with port <code>3000</code> to post the user auth

```http
http://localhost:3000/v1/login
```
![image](https://user-images.githubusercontent.com/54970142/174454700-1ffd0f38-f724-4405-a13a-3a41495faf7e.png)

---
- used service with port <code>6000</code> to get the user credential with token base64

```http
http://localhost:6000/v1/post
```
![image](https://user-images.githubusercontent.com/54970142/174454855-fff94192-ca0f-489f-bf17-0b9893b7222e.png)
