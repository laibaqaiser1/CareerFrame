import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// Initialize AWS SES client
const sesClient = new SESClient({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  }
});

export async function sendWaitlistNotification(subscriberEmail: string): Promise<boolean> {
  try {
    const command = new SendEmailCommand({
      Source: 'Arron@careerframe.co.uk', // Using your email as sender (verify this in AWS SES)
      Destination: {
        ToAddresses: ['Arron@careerframe.co.uk'],
      },
      Message: {
        Subject: {
          Data: 'New CareerFrame Waitlist Signup',
          Charset: 'UTF-8',
        },
        Body: {
          Html: {
            Data: `
              <html>
                <body>
                  <h2>New Waitlist Signup</h2>
                  <p>A new user has joined the CareerFrame waitlist:</p>
                  <p><strong>Email:</strong> ${subscriberEmail}</p>
                  <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
                  <hr>
                  <p style="color: #666; font-size: 12px;">
                    This email was sent from your CareerFrame website waitlist system.
                  </p>
                </body>
              </html>
            `,
            Charset: 'UTF-8',
          },
          Text: {
            Data: `
New CareerFrame Waitlist Signup

Email: ${subscriberEmail}
Time: ${new Date().toLocaleString()}

This email was sent from your CareerFrame website waitlist system.
            `,
            Charset: 'UTF-8',
          },
        },
      },
    });

    const response = await sesClient.send(command);
    console.log('Email sent successfully:', response.MessageId);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
}

export async function sendWelcomeEmail(subscriberEmail: string): Promise<boolean> {
  try {
    const command = new SendEmailCommand({
      Source: 'Arron@careerframe.co.uk', // Using your email as sender (verify this in AWS SES)
      Destination: {
        ToAddresses: [subscriberEmail],
      },
      Message: {
        Subject: {
          Data: 'Welcome to CareerFrame - You\'re on the waitlist!',
          Charset: 'UTF-8',
        },
        Body: {
          Html: {
            Data: `
              <html>
                <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                  <h2 style="color: #1E3A8A;">Welcome to CareerFrame!</h2>
                  <p>Thank you for joining our exclusive waitlist. You're now one of the first 500 people who will get early access to CareerFrame.</p>
                  
                  <h3>What happens next?</h3>
                  <ul>
                    <li>We'll notify you as soon as we launch</li>
                    <li>You'll get exclusive early access before everyone else</li>
                    <li>Special launch pricing just for waitlist members</li>
                  </ul>
                  
                  <p>Get ready to transform your career journey with AI-powered coaching, personalized roadmaps, and industry connections.</p>
                  
                  <p style="margin-top: 30px;">
                    Best regards,<br>
                    <strong>Arron McWilliam</strong><br>
                    Founder, CareerFrame
                  </p>
                  
                  <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
                  <p style="color: #666; font-size: 12px;">
                    CareerFrame Ltd | Find the Right Role. Get There Faster.
                  </p>
                </body>
              </html>
            `,
            Charset: 'UTF-8',
          },
          Text: {
            Data: `
Welcome to CareerFrame!

Thank you for joining our exclusive waitlist. You're now one of the first 500 people who will get early access to CareerFrame.

What happens next?
- We'll notify you as soon as we launch
- You'll get exclusive early access before everyone else
- Special launch pricing just for waitlist members

Get ready to transform your career journey with AI-powered coaching, personalized roadmaps, and industry connections.

Best regards,
Arron McWilliam
Founder, CareerFrame

---
CareerFrame Ltd | Find the Right Role. Get There Faster.
            `,
            Charset: 'UTF-8',
          },
        },
      },
    });

    const response = await sesClient.send(command);
    console.log('Welcome email sent successfully:', response.MessageId);
    return true;
  } catch (error) {
    console.error('Failed to send welcome email:', error);
    return false;
  }
}