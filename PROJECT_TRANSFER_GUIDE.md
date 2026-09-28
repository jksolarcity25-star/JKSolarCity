# JK Solar City - Project Transfer Guide

## Overview
Transfer entire project from personal Gmail to official jksolarcity25@gmail.com

---

## 📋 Pre-Transfer Checklist

- [ ] Official Gmail account ready: jksolarcity25@gmail.com
- [ ] Access to personal Gmail account (current owner)
- [ ] Access to jksolarcity25@gmail.com
- [ ] Domain: jksolarcity.com (already purchased)
- [ ] GitHub repository: jsoumyanarayanan/JKSolarCity
- [ ] Google Apps Script (current owner)
- [ ] Google Sheet (current owner)

---

## 1. GitHub Repository Transfer

### Step 1.1: Invite Official Account to Repository
1. Go to: https://github.com/jsoumyanarayanan/JKSolarCity
2. Click **Settings** tab
3. Click **Collaborators and teams** in sidebar
4. Click **Add people**
5. Enter: jksolarcity25@gmail.com
6. Select role: **Admin**
7. Click **Add jksolarcity25@gmail.com**
8. Official account accepts invitation

### Step 1.2: Transfer Repository Ownership
1. Go to: https://github.com/jsoumyanarayanan/JKSolarCity/settings
2. Scroll to **Danger Zone**
3. Click **Transfer ownership**
4. Read transfer information
5. Enter repository name: JKSolarCity
6. Enter: jksolarcity25@gmail.com
7. Click **I understand, transfer this repository**
8. Confirm transfer

### Step 1.3: Verify Transfer
- Repository now appears under jksolarcity25@gmail.com
- Personal account removed from repo
- All Git history preserved
- All branches preserved

---

## 2. Google Apps Script Transfer

### Step 2.1: Open Current Script
1. Go to: https://script.google.com/
2. Open current script under personal account
3. Click **Share** button
4. Add: jksolarcity25@gmail.com
5. Set permission: **Editor**
6. Click **Send**

### Step 2.2: Clone Script to Official Account
1. Login to jksolarcity25@gmail.com
2. Go to: https://script.google.com/
3. Click **New project**
4. Delete all default code
5. Copy entire code from personal account script
6. Paste into new script
7. Save project as: "JK Solar City - Callback Form"

### Step 2.3: Update Google Sheet Reference
In the new script:
1. Find: `SHEET_ID = '1Nz1-VOAjXejnTIlvtGhmEahORiOCdUxfBOn_g0Vsfzo'`
2. Keep this ID (same sheet)
3. Update email addresses if needed:
   - `TO_EMAILS` array
   - `CC_EMAILS` array

### Step 2.4: Deploy New Script
1. Click **Deploy** → **New deployment**
2. Click gear icon → **Web app**
3. Description: "JK Solar City Callback Form"
4. Execute as: **Me (jksolarcity25@gmail.com)**
5. Who has access: **Anyone**
6. Click **Deploy**
7. Authorize script with jksolarcity25@gmail.com
8. Copy new Web App URL

### Step 2.5: Update HTML with New Script URL
1. Open HTML file in GitHub repository
2. Find: `const scriptUrl = 'https://script.google.com/macros/s/...'`
3. Replace with new Web App URL from Step 2.4
4. Commit and push changes

### Step 2.6: Test New Script
1. Open jksolarcity.com
2. Fill out callback form
3. Submit form
4. Check Google Sheet for new entry
5. Check jksolarcity25@gmail.com for email notification

### Step 2.7: Remove Personal Account from Old Script (Optional)
1. Go to old script under personal account
2. Click **Share**
3. Remove jksolarcity25@gmail.com (no longer needed)
4. Or delete old script entirely

---

## 3. Google Sheet Transfer

### Step 3.1: Share Sheet with Official Account
1. Open current Google Sheet (Inquiries)
2. Click **Share** button
3. Add: jksolarcity25@gmail.com
4. Set permission: **Editor**
5. Click **Send**

### Step 3.2: Transfer Sheet Ownership (Optional)
Option A: Keep as is (Editor access is sufficient)
Option B: Transfer ownership:

1. Open Google Sheet
2. Click **Share**
3. Click **Advanced**
4. Click **Transfer ownership**
5. Enter: jksolarcity25@gmail.com
6. Click **Send email**
7. Official account accepts transfer

### Step 3.3: Verify Sheet Access
- Official account can view and edit sheet
- All inquiry data preserved
- Form submissions work correctly

---

## 4. Domain Configuration

### Step 4.1: Login to Domain Registrar
- Hostinger or GoDaddy account
- Locate jksolarcity.com domain

### Step 4.2: Update DNS Records
If using GitHub Pages:

**For Apex Domain (jksolarcity.com):**
Add A records:
- Name: @ (or blank)
- Value: 185.199.108.153
- TTL: Auto

- Name: @ (or blank)
- Value: 185.199.109.153
- TTL: Auto

- Name: @ (or blank)
- Value: 185.199.110.153
- TTL: Auto

- Name: @ (or blank)
- Value: 185.199.111.153
- TTL: Auto

**For www subdomain:**
- Type: CNAME
- Name: www
- Value: jsoumyanarayanan.github.io (initially)
- TTL: Auto

### Step 4.3: Update GitHub Pages Custom Domain
1. Go to: https://github.com/jsoumyanarayanan/JKSolarCity/settings/pages
2. Under "Custom domain", enter: jksolarcity.com
3. Click **Save**
4. Wait for DNS propagation (5-30 minutes)
5. Enable **Enforce HTTPS**

### Step 4.4: Update www CNAME After Repository Transfer
After repository transfer (Step 1.2):
1. Go to domain DNS settings
2. Update www CNAME:
   - Name: www
   - Value: jksolarcity25.github.io (new owner)
   - TTL: Auto

### Step 4.5: Verify Domain
- Visit: https://jksolarcity.com
- Should see website
- SSL certificate active (HTTPS)
- All functionality working

---

## 5. Email Configuration

### Step 5.1: Set Up Email Forwarding (Optional)
If using domain registrar's email forwarding:

1. Go to domain registrar (Hostinger/GoDaddy)
2. Find **Email** or **Email Forwarding**
3. Create forwarding rule:
   - From: info@jksolarcity.com
   - To: jksolarcity25@gmail.com
4. Save settings

### Step 5.2: Update Google Apps Script Email Configuration
In the new Google Apps Script (under jksolarcity25@gmail.com):

Update email variables:
```javascript
const TO_EMAILS = ['jksolarcity25@gmail.com'];
const CC_EMAILS = []; // Add CC if needed
```

### Step 5.3: Test Email
1. Submit callback form
2. Verify email received at jksolarcity25@gmail.com
3. Check spam folder if not received

---

## 6. GitHub Pages Repository Settings

### Step 6.1: Update Repository Name (Optional)
After transfer, you can rename:
1. Go to: https://github.com/jksolarcity25/JKSolarCity/settings
2. Under "Repository name", change if desired
3. Click **Rename**

### Step 6.2: Update GitHub Pages Settings
1. Go to Settings → Pages
2. Verify custom domain: jksolarcity.com
3. Verify source branch: master
4. Verify HTTPS enabled
5. Verify all green checkmarks

---

## 7. Final Verification Checklist

### GitHub Repository
- [ ] Repository owned by jksolarcity25@gmail.com
- [ ] All code present and working
- [ ] Custom domain configured: jksolarcity.com
- [ ] HTTPS enabled
- [ ] Website loads correctly at jksolarcity.com

### Google Apps Script
- [ ] Script owned by jksolarcity25@gmail.com
- [ ] New Web App URL deployed
- [ ] HTML updated with new script URL
- [ ] Form submissions working
- [ ] Email notifications sent to jksolarcity25@gmail.com

### Google Sheet
- [ ] Sheet accessible to jksolarcity25@gmail.com
- [ ] Form submissions saving to sheet
- [ ] All inquiry data preserved

### Domain
- [ ] DNS records configured correctly
- [ ] HTTPS certificate active
- [ ] Website accessible at jksolarcity.com
- [ ] Email forwarding configured (if used)

### Email
- [ ] jksolarcity25@gmail.com receiving form emails
- [ ] Google Apps Script sending to correct email
- [ ] All email alerts working

---

## 8. Post-Transfer Tasks

### Step 8.1: Remove Personal Account Access
From GitHub repository:
1. Go to Settings → Collaborators
2. Remove personal account (if no longer needed)

From Google Sheet:
1. Click Share
2. Remove personal account (if ownership transferred)

From Google Apps Script:
1. Delete old script under personal account (optional)

### Step 8.2: Update Documentation
- Update any documentation with new owner details
- Update contact information if needed
- Update team access permissions

### Step 8.3: Backup
- Export Google Sheet to Excel (backup)
- Download repository as ZIP (backup)
- Save important credentials securely

---

## 9. Troubleshooting

### Issue: GitHub Pages not loading
- Check DNS records are correct
- Wait for DNS propagation (up to 48 hours)
- Verify GitHub Pages custom domain settings
- Check for CNAME file in repository

### Issue: Form submissions not working
- Verify Google Apps Script Web App URL is correct in HTML
- Check script deployment settings (Anyone access)
- Verify Google Sheet ID is correct
- Check browser console for errors

### Issue: Email not received
- Check spam folder
- Verify email addresses in Google Apps Script
- Check Google Apps Script deployment is active
- Verify script has permission to send email

### Issue: HTTPS not working
- Wait up to 24 hours for SSL certificate
- Check DNS records are correct
- Verify custom domain is added to GitHub Pages
- Enforce HTTPS in GitHub Pages settings

---

## 10. Contact Information

### Official Account
- Email: jksolarcity25@gmail.com
- GitHub: jksolarcity25
- Domain: jksolarcity.com

### Important Links
- GitHub Repository: https://github.com/jksolarcity25/JKSolarCity
- Google Apps Script: [New script URL after deployment]
- Google Sheet: [Sheet URL]
- Website: https://jksolarcity.com

---

## 11. Security Notes

- ✅ Two-factor authentication enabled on jksolarcity25@gmail.com
- ✅ Strong password on all accounts
- ✅ Regular backups of Google Sheet
- ✅ GitHub repository set to private if needed
- ✅ Access permissions reviewed regularly

---

## 12. Completion Date

Transfer completed on: _______________

Verified by: _______________

---

## Summary

After completing this guide:
- ✅ GitHub repository owned by jksolarcity25@gmail.com
- ✅ Google Apps Script owned by jksolarcity25@gmail.com
- ✅ Google Sheet accessible to jksolarcity25@gmail.com
- ✅ Domain jksolarcity.com pointing to GitHub Pages
- ✅ Form submissions working with new script
- ✅ Email notifications sent to jksolarcity25@gmail.com
- ✅ Website fully functional at jksolarcity.com

The entire project is now under the official jksolarcity25@gmail.com account.
