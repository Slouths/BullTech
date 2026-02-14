import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const {
      firstName,
      lastName,
      company,
      email,
      subject,
      message,
      services = [],
      otherService,
      shootLocation,
      shootLocationDetails,
      locationType,
      shootType,
      equipmentNeeds,
      budget
    } = data;

    // Create a transporter
    const port = parseInt(process.env.EMAIL_PORT || '465');
    
    // Configure transporter with connection retry and debug options
    const transporter = nodemailer.createTransport({
      host: 'smtp.fatcow.com',
      port: 465,
      secure: true, // true for 465
      auth: {
        user: 'hello@bulldigital.tech',
        pass: process.env.EMAIL_PASS, // Only use the environment variable for the password
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Email content
    const mailOptions = {
      from: 'hello@bulldigital.tech', // Sender address
      to: 'hello@bulldigital.tech', // Receiver address
      replyTo: email, // Allow replying directly to the submitter
      subject: `New Inquiry: ${subject}`,
      text: `
Name: ${firstName} ${lastName}
Company: ${company}
Email: ${email}

Subject: ${subject}

Message:
${message}

---
Service Details:
Workflow: ${Array.isArray(services) ? services.join(', ') : ''}${otherService ? ` (${otherService})` : ''}
Shoot Location: ${shootLocation} ${shootLocationDetails ? `(${shootLocationDetails})` : ''}
Location Type: ${locationType}
Shoot Type: ${shootType}
Equipment Needs: ${equipmentNeeds}
Budget: ${budget}
      `,
      html: `
        <h2>New Website Inquiry</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <br/>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
        <hr/>
        <h3>Service Details</h3>
        <ul>
          <li><strong>Workflow:</strong> ${Array.isArray(services) ? services.join(', ') : ''}${otherService ? ` (${otherService})` : ''}</li>
          <li><strong>Shoot Location:</strong> ${shootLocation} ${shootLocationDetails ? `(${shootLocationDetails})` : ''}</li>
          <li><strong>Location Type:</strong> ${locationType}</li>
          <li><strong>Shoot Type:</strong> ${shootType}</li>
          <li><strong>Equipment Needs:</strong> ${equipmentNeeds}</li>
          <li><strong>Budget:</strong> ${budget}</li>
        </ul>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
    } catch (error: any) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ success: false, message: error.message || 'Failed to send email' }, { status: 500 });
  }
}
