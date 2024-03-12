import nodemailer from "nodemailer";

export const sendPasswordResetEmail = async (user, resetPasswordURL) => {
    // console.log("am here")
  const transporter = nodemailer.createTransport({
    
    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.STORFLEET_SMPT_MAIL,
      pass: process.env.STORFLEET_SMPT_MAIL_PASSWORD,
    },
  });
//   console.log(process.env.SMPT_SERVICE,process.env.STORFLEET_SMPT_MAIL,process.env.STORFLEET_SMPT_MAIL_PASSWORD)
//   console.log(user.email)
//   console.log(resetPasswordURL)
  const mailOptions = {
    from: process.env.STORFLEET_MAIL,
    to: user.email,
    subject: "Password Reset",
    html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                /* Add your custom CSS styles here */
                body {
                    font-family: Arial, sans-serif;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                }
                .header {
                    text-align: center;
                }
                .logo {
                    max-width: 150px;
                }
                .content {
                    margin-top: 20px;
                }
                .button {
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: #20d49a;
                    color: #ffffff;
                    text-decoration: none;
                    border-radius: 5px;
                }
                /* Mobile Responsive Styles */
                @media only screen and (max-width: 600px) {
                    .container {
                        padding: 10px;
                    }
                    .logo {
                        max-width: 100px;
                    }
                    .button {
                        display: block;
                        margin-top: 10px;
                    }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <img class="logo" src="https://files.codingninjas.in/logo1-32230.png" alt="Storefleet Logo">
                    <h1>Password Reset</h1>
                </div>
                <div class="content">
                    <p>Hello, ${user.name}</p>
                    <p>Enter the token complete the reset <strong>${resetPasswordURL}</strong> :</p>
                    <p>use this token as a parameter in reset password route. if you didnt request the password reset. kindly ignore this mail.</p>
                </div>
            </div>
        </body>
        </html>
    `,
  };
  
  try {
    const result = await transporter.sendMail(mailOptions)
    // console.log("done mailed")
  } catch (error) {
    // console.log("notDone")
  }
};
