// Import the necessary modules here
import nodemailer from "nodemailer"

export const sendWelcomeEmail = async (user) => {
  // Write your code here
  const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
      user:process.env.STORFLEET_SMPT_MAIL,
      pass:process.env.STORFLEET_SMPT_MAIL_PASSWORD
    },
  })
  const htmlContent = `
  <html>
  <head>
      <style>
          /* Center the body content */
          body {
              text-align: center;
              margin: 0;
              padding: 0;
          }
          img {
              max-width: 200px; /* Set the maximum width */
              height: auto; /* Maintain aspect ratio */
          }
          .container {
              margin: 50px auto; /* Center the container vertically and horizontally */
              max-width: 600px; /* Set maximum width for better readability */
              padding: 0 20px; /* Add padding for better readability on mobile devices */
              box-sizing: border-box; /* Include padding and border in element's total width and height */
              text-align: left; /* Align text content to the left within the container */
          }
          .button {
              background-color: #3a67bb; /* Blue */
              border: none;
              color: white;
              padding: 15px 32px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 16px;
              margin-top: 20px; /* Adjust the margin from the top */
              cursor: pointer;
              border-radius: 5px;
          }
          /* Add your CSS styles here */
      </style>
  </head>
  <body>
      <div class="container">
          <img src="https://files.codingninjas.in/logo1-32230.png">
          <h1>Welcome to Storefleet</h1>
          <p>Hello, <strong>${user.name}</strong>.</p>
          <p>Thank you for registering with Storefleet. We're excited to have you as a new member of our community.</p>
          <button class="button">Get Started</button>
      </div>
  </body>
  </html>
  `;
  
  
  

  const mailOptions = {
    from:process.env.STORFLEET_SMPT_MAIL,
    to:user.email,
    subject:"Welcome To Storefleet",
    html:htmlContent
  }

  try {
    const result = await transporter.sendMail(mailOptions)
    // console.log("done mailed")
  } catch (error) {
    // console.log("notDone")
  }
}
