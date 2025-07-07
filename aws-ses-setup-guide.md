# AWS SES Email Setup Guide

## Problem
Your email service is configured correctly, but AWS SES requires email addresses to be verified before they can send emails.

## Current Error
```
Email address is not verified: noreply@careerframe.co.uk
```

## Solution: Verify Email Addresses in AWS SES

### Step 1: Access AWS SES Console
1. Go to AWS Console → Simple Email Service (SES)
2. Make sure you're in the correct region: **EU-WEST-2** (London)

### Step 2: Verify Email Addresses
You need to verify these email addresses:

1. **noreply@careerframe.co.uk** (sender email)
2. **Arron@careerframe.co.uk** (recipient email)

### Step 3: Verification Process
1. In AWS SES Console, go to "Verified identities"
2. Click "Create identity"
3. Select "Email address"
4. Enter: `noreply@careerframe.co.uk`
5. Click "Create identity"
6. AWS will send a verification email to that address
7. Check your email and click the verification link

### Step 4: Repeat for Recipient
1. Create another identity for: `Arron@careerframe.co.uk`
2. Verify this email address as well

### Step 5: Domain Verification (Alternative)
Instead of individual emails, you can verify the entire domain:
1. In AWS SES Console, go to "Verified identities"
2. Click "Create identity"
3. Select "Domain"
4. Enter: `careerframe.co.uk`
5. Follow DNS setup instructions

## Alternative: Use Verified Email Address
If you can't verify careerframe.co.uk emails immediately, use a verified email address you already have:

1. Use your personal email as the sender
2. Update the email service to use your verified address
3. Change the "From" field to your verified email

## Testing
Once emails are verified, test with:
```bash
curl -X POST http://localhost:5000/api/newsletter/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com"}'
```

## Status Check
- ✅ AWS SES credentials configured
- ✅ Email service code working
- ❌ Email addresses not verified
- ❌ Emails not being sent

## Next Steps
1. Verify email addresses in AWS SES Console
2. Test email functionality
3. Deploy to production