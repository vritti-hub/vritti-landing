import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    // Basic rate limiting (in production, use Redis or similar)
    const userIP = request.headers.get('x-forwarded-for') || 'unknown';
    
    // Log the contact form submission
    console.log('Contact form submission:', {
      timestamp: new Date().toISOString(),
      ip: userIP,
      data: {
        name: body.name,
        email: body.email,
        company: body.company || 'Not provided',
        message: body.message,
      },
    });
    
    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification using a service like SendGrid, Resend, or Nodemailer
    // 3. Add to CRM system
    // 4. Send auto-reply to user
    
    // For now, simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // TODO: Integrate with email service
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'noreply@vritti.ai',
    //   to: 'hello@vritti.ai',
    //   subject: `New Contact: ${body.name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${body.name}</p>
    //     <p><strong>Email:</strong> ${body.email}</p>
    //     <p><strong>Company:</strong> ${body.company || 'Not provided'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${body.message.replace(/\n/g, '<br>')}</p>
    //   `,
    // });
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully' 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Contact form API error:', error);
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}