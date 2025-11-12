import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

async function sendTestEmail() {
  console.log('Fetching PDF from Google Drive...');
  const pdfUrl = process.env.SHODO_EBOOK_URL!;
  const pdfResponse = await fetch(pdfUrl);
  const pdfBuffer = await pdfResponse.arrayBuffer();
  const pdfBase64 = Buffer.from(pdfBuffer).toString('base64');

  console.log('PDF fetched. Sending test email to jasamluka312@gmail.com...\n');

  try {
    const result = await resend.emails.send({
      from: 'Japanese Calligraphy School <support@japanesecalligraphyschool.com>',
      to: 'jasamluka312@gmail.com',
      subject: 'Your Japanese Calligraphy Class Access ✨',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <p style="color: #34495e; line-height: 1.6;">Hi there,</p>

          <p style="color: #34495e; line-height: 1.6;">Your Japanese Calligraphy guide is attached to this email - check your attachments!</p>

          <p style="color: #34495e; line-height: 1.6;">Questions? Reply to this email anytime.</p>

          <p style="color: #34495e; line-height: 1.6;">We wish you all the best on your journey,<br>Japanese Calligraphy School Team</p>
        </div>
      `,
      attachments: [
        {
          filename: 'Japanese-Calligraphy-Beginners-Guide.pdf',
          content: pdfBase64,
        },
      ],
    });

    console.log('✅ Test email sent successfully to jasamluka312@gmail.com');
    console.log('Result:', JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('❌ Failed to send test email:', error);
    if (error && typeof error === 'object') {
      console.error('Error details:', JSON.stringify(error, null, 2));
    }
  }
}

sendTestEmail();
