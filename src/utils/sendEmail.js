const transporterInfo = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    // user and pass must be genuine
    user: "alishshakya44@gmail.com",
    pass: "cjpe uepw unnv hais",
  },
};

export const sendEmail = async (mailInfo) => {
  try {
    let transporter = nodemailer.createTransport(transporterInfo);
    let info = await transporter.sendMail(mailInfo);
  } catch (error) {
    console.log("mail error has occured", error.message);
  }
};
