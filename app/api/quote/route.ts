//route.ts;
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      serviceType,
      eventDate,
      guestCount,
      budget,
      location,
      details,
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !serviceType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'pearlgate27@gmail.com',
      subject: `Quote Request: ${serviceType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #9333ea;">New Quote Request</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
            <h3 style="color: #333;">Client Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            
            <hr style="border: 1px solid #ddd; margin: 20px 0;">
            
            <h3 style="color: #333;">Event Details</h3>
            <p><strong>Service Type:</strong> ${serviceType}</p>
            <p><strong>Event Date:</strong> ${eventDate || 'Not specified'}</p>
            <p><strong>Guest Count:</strong> ${
              guestCount || 'Not specified'
            }</p>
            <p><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
            <p><strong>Location:</strong> ${location || 'Not specified'}</p>
            
            ${
              details
                ? `
              <hr style="border: 1px solid #ddd; margin: 20px 0;">
              <h3 style="color: #333;">Additional Details</h3>
              <p style="white-space: pre-wrap;">${details}</p>
            `
                : ''
            }
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Quote request sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send quote request' },
      { status: 500 }
    );
  }
}
