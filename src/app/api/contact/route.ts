import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Create the submission record
    const submission = {
      id: Date.now().toString(),
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    };

    // Save to a JSON file in the project root
    const filePath = path.join(process.cwd(), 'contact-submissions.json');
    
    let submissions = [];
    try {
      const existing = fs.readFileSync(filePath, 'utf-8');
      submissions = JSON.parse(existing);
    } catch {
      // File doesn't exist yet, start fresh
    }

    submissions.push(submission);
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));

    console.log(`📩 New contact form submission from ${name} (${email}): ${subject}`);

    return NextResponse.json({ success: true, message: 'Message received!' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
