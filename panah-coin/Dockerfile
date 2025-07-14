# مرحله اول: استفاده از تصویر سبک Node.js
FROM node:18-alpine

# تنظیم دایرکتوری کاری
WORKDIR /app

# کپی فایل‌های استاتیک (فرضاً در مسیر build/)
COPY ./ ./build

# نصب پکیج serve به صورت سراسری
RUN npm install -g serve

# اکسپوز کردن پورت 8000
EXPOSE 80

# اجرای برنامه با serve روی پورت 8000
CMD ["serve", "-s", "build", "-l", "80"]
