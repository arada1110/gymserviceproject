# 📌 Affiliate Service "Gyms service"

## 🔍 เกี่ยวกับโปรเจกต์
โปรเจกต์นี้เป็น เว็บไซต์เกี่ยวกับการทำระบบ affiliate service ที่สร้าง Gym service ให้บริการกับ affiliator ในการ request ข้อมูลการจองคลาสออกกำลังกายประเภทต่างๆจาก Gym service ในรายวิชาเว็บเซอร์วิสและไมโครเซอร์วิส มีวัตถุประสงค์เพื่อให้เข้าใจหลักการและสถาปัตยกรรมของเว็บเซอร์วิสและไมโครเซอร์วิส โดยโปรเจกต์นี้ทีมพัฒนาได้ทำ Affiliate service เกี่ยวกับ Service การจองคลาสออกกำลัง ที่นำเอาความรู้จากการเรียนมาพัฒนาให้เว็บไซต์นี้สำเร็จ

พัฒนาโดยทีมงานทั้งหมด **6 คน** ซึ่งมีหน้าที่ดังนี้:

## 👥 ทีมพัฒนา  
| ชื่อ | บทบาท | รายละเอียด |
|------|------|----------|
| **อารดา แว่นวงษ์** | Backend Developer | พัฒนาและออกแบบฝั่ง Backend รวมถึงจัดการฐานข้อมูล |
| **สุพิพัฒน์ แสงสอน** | Frontend Developer | พัฒนาและออกแบบฝั่ง Frontend รวมถึงช่วยออกแบบ Database|
| **อัญชลี สกุลทิฆัมพร** | Frontend Developer | พัฒนาและออกแบบฝั่ง Frontend รวมถึงออกแบบ UI/UX |
| **สมัญญา กี่สุข** | Frontend Developer | พัฒนาและออกแบบฝั่ง Frontend |
| **บัณฑิตา บุญญภัทร** | Frontend Developer | พัฒนาและออกแบบฝั่ง Frontend |
| **อภิญญา แซ่อึ้ง** | Frontend Developer | พัฒนาและออกแบบฝั่ง Frontend |

## 🛠 เทคโนโลยีที่ใช้  
- **Frontend:** React  
- **Backend:** Rest Api with Golang
- **Database:** PostgreSQL  
- **อื่น ๆ:** Docker

## 🚀 วิธีติดตั้งและใช้งาน
-- ทำการ clone project จาก [gym service](https://github.com/arada1110/gymserviceproject)
```bash
# open terminal cli
cd gymserviceproject
```
- ทำการ set database ก่อน
```bash
# change directory to database for run database
cd database
```
  (ก่อนทำการ Run Docker config environment เพื่อใช้ในการ Run Project
  Set file .env
| Variable | คำอธิบาย |
|------|----------|
| **POSTGRES_DB** | ชื่อฐานข้อมูล |
| **POSTGRES_USER** | ชื่อผู้ใช้งานในฐานข้อมูล |
| **POSTGRES_PASSWORD** | รหัสผ่านของฐานข้อมูล |
| **POSTGRES_PORT** | Port ที่เปิดใช้งานสำหรับฐานข้อมูล |
| **PGADMIN_DEFAULT_EMAIL** | อีเมลสำหรับใช้งาน PgAdmin |
| **PGADMIN_DEFAULT_PASSWORD** | รหัสผ่านสำหรับใช้งาน PgAdmin |
| **PGADMIN_PORT** | Port ที่เปิดใช้งาน PgAdmin |

```bash
# PostgreSQL Environment Variables
POSTGRES_DB=gymservice
POSTGRES_USER=gymservice_user
POSTGRES_PASSWORD=your_strong_password  # สามารถแก้ไขได้
POSTGRES_PORT=5432

# pgAdmin Environment Variables
PGADMIN_DEFAULT_EMAIL=admin123@gmail.com  # สามารถแก้ไขได้
PGADMIN_DEFAULT_PASSWORD=admin123  # สามารถแก้ไขได้
PGADMIN_PORT=5050
```

- Run Folder ด้วย Docker ใช้คำสั่ง
```bash
docker-compose up -d
```
- ถ้าทำการ set Port สำหรับ PostgreSQL ที่ 5050 จะเปิด localhost:5050 

- จากนั้นทำการ set service Backend
  ทำการเข้า service backend project
```bash
# open terminal in VS code use Git bash or Ubuntu(WSL) ==> if you use windows you need to use Ubuntu or Git Bash for run command
cd backend/apiservice
```
- Complie and Run
```bash
go build
./gymservice
```

- จะเปิด localhost:8088 สำหรับ Service API
- จะใช้ Cloudflare Tunnel เพื่อให้ใช้บริการ server โดยไม่ต้องใช้ Public IP โดยจะใช้ Port 8088 ที่ทำการเปิด service API ในการเชื่อมต่อกับบริการของ cloudflare
```bash
# open terminal Ubuntu or Git bash
cd backend/apiservice
cloudflare tunnel --url http://0.0.0.0:8088
```

- ทำการ set frontend
- เพิ่ม Proxy สำหรับเชื่อมต่อกับฝั่ง Service Backend ในไฟล์ package.json เพิ่มไปยังส่วนสุดท้ายของไฟล์ก็ได้ โดยเราจะนำ link ที่ได้จาก cloudflare มาทำการ link ใน frontend
```bash
"proxy": "http ที่ได้จาก cloudflare"
```
- ก่อนทำการ Run Server ทำการ set link cloudflare ที่ใช้ใน Project ให้ครบก่อนทุกไฟล์
1. gym1.jsx
2. gym2.jsx
3. gym3.jsx
4. Login.jsx
5. profileAffiliator.jsx
6. Register.jsx
7. requestapi.jsx
8. user.jsx

- Run Server
```bash
npm start
```
- จะเปิด localhost:3000 สำหรับ react
