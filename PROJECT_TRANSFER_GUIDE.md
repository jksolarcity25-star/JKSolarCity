# JK Solar City - Project Transfer Guide (Detailed Technical Steps)

## Overview
Transfer entire project from personal Gmail to official jksolarcity25@gmail.com with detailed technical steps

---

## 📋 Pre-Transfer Checklist

- [ ] Official Gmail account ready: jksolarcity25@gmail.com
- [ ] Access to personal Gmail account (current owner)
- [ ] Access to jksolarcity25@gmail.com
- [ ] Domain: jksolarcity.com (already purchased)
- [ ] GitHub repository: jsoumyanarayanan/JKSolarCity
- [ ] Google Apps Script (current owner)
- [ ] Google Sheet (current owner)
- [ ] Current Google Apps Script URL: https://script.google.com/macros/s/AKfycbzcf7su6gWChej5QH3yuTAo0E3lm7EUgQGQGiZ5pDPRrzHFTszS_ekdMsHUErREYqcQeA/exec
- [ ] Google Sheet ID: 1Nz1-VOAjXejnTIlvtGhmEahORiOCdUxfBOn_g0Vsfzo

---

## 1. GitHub Repository Transfer

### Step 1.1: Invite Official Account to Repository
1. Navigate to: https://github.com/jsoumyanarayanan/JKSolarCity
2. Click **Settings** tab (top navigation)
3. In left sidebar, click **Collaborators and teams**
4. Click **Add people** button
5. Enter email: jksolarcity25@gmail.com
6. Under "Permission", select: **Admin** (this allows full control)
7. Click **Add jksolarcity25@gmail.com**
8. Open jksolarcity25@gmail.com email and accept the invitation
9. Verify that the account now appears in collaborators list with Admin role

**Technical Notes:**
- Admin role allows: repository transfer, manage settings, delete repository
- Without Admin role, repository ownership cannot be transferred

### Step 1.2: Transfer Repository Ownership
1. Navigate to: https://github.com/jsoumyanarayanan/JKSolarCity/settings
2. Scroll down to **Danger Zone** section (red box at bottom)
3. Click **Transfer ownership** button
4. Read the transfer warning dialog carefully:
   - All issues, pull requests, and wikis will be transferred
   - You will lose admin access after transfer
   - Git history will be preserved
5. Enter repository name to confirm: `JKSolarCity`
6. Enter destination username: `jksolarcity25`
7. Click **I understand, transfer this repository**
8. A final confirmation dialog will appear - click **Transfer ownership**
9. Wait for transfer to complete (usually takes 10-30 seconds)

**Technical Notes:**
- Repository will now appear under jksolarcity25's account
- All branches (master, etc.) are preserved
- All commit history is preserved
- Issues and PRs are transferred
- Personal account will lose all access (unless re-invited as collaborator)

### Step 1.3: Verify Transfer
1. Login to jksolarcity25@gmail.com GitHub account
2. Navigate to: https://github.com/jksolarcity25/JKSolarCity
3. Verify repository appears in your repositories list
4. Click on repository → Verify all code is present
5. Check Settings → Verify you are the owner
6. Check that personal account is no longer listed (or if still present, it will be as collaborator)
7. Verify all branches exist: main/master branch should have all commits

**Technical Notes:**
- Check that IMAGES folder exists with all 6 images
- Verify index.html file is in root
- Git commit history should show all previous commits

---

## 2. Google Apps Script Transfer

### Step 2.1: Open Current Script (Personal Account)
1. Navigate to: https://script.google.com/
2. Sign in with personal Gmail account
3. Open the current script project (named "JK Solar City Callback Form" or similar)
4. Verify the current code and configuration

### Step 2.2: Export Current Script Code
1. In the script editor, select all code (Ctrl+A or Cmd+A)
2. Copy the entire code to clipboard (Ctrl+C or Cmd+C)
3. Open a text editor (Notepad, VS Code, etc.)
4. Paste the code and save as backup: `google_script_backup.js`
5. This is your safety backup in case anything goes wrong

**Technical Notes:**
- Script code contains:
  - SHEET_ID configuration
  - Email configuration (TO_EMAILS, CC_EMAILS)
  - doPost function for form handling
  - Email sending logic

### Step 2.3: Share Script with Official Account
1. In the script editor, click **Share** button (top right)
2. In "Invite people" field, enter: jksolarcity25@gmail.com
3. Under "Notify people", set: **Editors can be notified**
4. Under "Editors can comment", set: **Can comment**
5. Set permission: **Editor** (allows viewing and editing)
6. Click **Send**
7. Official account accepts invitation via email

**Technical Notes:**
- Editor permission allows: view code, edit code, deploy new versions
- Viewer permission is insufficient for deployment
- Owner permission is not yet (will be after cloning)

### Step 2.4: Clone Script to Official Account
1. Logout of personal Gmail account
2. Login to jksolarcity25@gmail.com
3. Navigate to: https://script.google.com/
4. Click **New project**
5. A new script editor will open with default code template
6. Delete all default code (Ctrl+A or Cmd+A, then Delete)
7. Paste the backed-up code from Step 2.2
8. Save the project (Ctrl+S or Cmd+S)
9. Click **Untitled project** in top left
10. Rename to: `JK Solar City - Callback Form`
11. Click **Rename**

**Technical Notes:**
- Ensure all code is copied including:
  - `SHEET_ID` variable
  - `TO_EMAILS` array
  - `CC_EMAILS` array
  - `doPost` function
  - All helper functions

### Step 2.5: Update Google Sheet Reference (If Needed)
In the new script, verify or update:

```javascript
const SHEET_ID = '1Nz1-VOAjXejnTIlvtGhmEahORiOCdUxfBOn_g0Vsfzo';
```

**Update email configuration if needed:**
```javascript
const TO_EMAILS = ['jksolarcity25@gmail.com'];
const CC_EMAILS = []; // Add additional email addresses if needed
```

**Technical Notes:**
- SHEET_ID should remain the same (same Google Sheet)
- TO_EMAILS should be jksolarcity25@gmail.com
- CC_EMAILS can be left empty or add additional recipients

### Step 2.6: Deploy New Script as Web App
1. In the script editor, click **Deploy** button (top right)
2. Click **New deployment**
3. Click the gear icon (⚙️) next to "Select type"
4. Select **Web app**
5. Fill in deployment details:
   - **Description**: JK Solar City Callback Form
   - **Execute as**: Me (jksolarcity25@gmail.com)
   - **Who has access**: Anyone
6. Click **Deploy**
7. A Google authorization dialog will appear
8. Sign in with jksolarcity25@gmail.com if prompted
9. Review permissions and click **Allow**
10. Wait for deployment to complete (usually 10-30 seconds)
11. Copy the Web App URL that appears (format: https://script.google.com/macros/s/...)

**Technical Notes:**
- Execute as "Me" means script runs under jksolarcity25@gmail.com identity
- "Anyone" access allows public access without Google login
- Copy the URL carefully - this is what will be used in HTML

### Step 2.7: Update HTML with New Script URL
1. Login to jksolarcity25@gmail.com GitHub account
2. Navigate to: https://github.com/jksolarcity25/JKSolarCity
3. Click on index.html file
4. Click **Edit** (pencil icon)
5. Search for: `const scriptUrl = 'https://script.google.com/macros/s/...'`
6. Replace the URL with the new Web App URL from Step 2.6
7. Save the file (Ctrl+S or Cmd+S)
8. Commit changes: Enter commit message "Updated Google Apps Script URL"
9. Click **Commit** button

**Technical Notes:**
- The script URL should be exactly as copied (no trailing slashes)
- Format: https://script.google.com/macros/s/AKfycbzcf7su6gWChej5QH3yuTAo0E3lm7EUgQGQGiZ5pDPRrzHFTszS_ekdMsHUErREYqcQeA/exec
- No modifications to the URL (copy-paste exactly)

### Step 2.8: Test New Script Functionality
1. Open jksolarcity.com in browser (or refresh page: Ctrl+F5)
2. Navigate to "Get in touch" section
3. Fill out the callback form with test data:
   - Name: Test User
   - Phone: 9999999999
   - Email: test@example.com
   - Property type: Home
   - Roof area: 1000
   - Monthly bill: 5000
4. Click "We'd love to connect" button
5. Wait for submission to complete
6. Check Google Sheet for new entry:
   - Open: https://docs.google.com/spreadsheets/d/1Nz1-VOAjXejnTIlvtGhmEahORiOCdUxfBOn_g0Vsfzo
   - Verify new row with test data appears
7. Check jksolarcity25@gmail.com for email notification
8. Check spam folder if email not received

**Technical Notes:**
- If form doesn't submit, check browser console (F12) for errors
- Common errors: CORS issues, script deployment issues, script URL incorrect
- If sheet doesn't update, verify SHEET_ID is correct in script

### Step 2.9: Remove Personal Account from Old Script (Optional)
1. Login to personal Gmail account
2. Navigate to: https://script.google.com/
3. Open the old script
4. Click **Share** button
5. Find jksolarcity25@gmail.com in the list
6. Click **Remove** next to the email
7. Or delete the entire old script project if no longer needed

**Technical Notes:**
- Removing access prevents jksolarcity25 from editing old script
- Deleting old script is permanent - ensure new script is working first

---

## 3. Google Sheet Transfer

### Step 3.1: Share Sheet with Official Account
1. Open Google Sheet: https://docs.google.com/spreadsheets/d/1Nz1-VOAjXejnTIlvtGhmEahORiOCdUxfBOn_g0Vsfzo
2. Click **Share** button (top right)
3. In "Share with people and groups" field, enter: jksolarcity25@gmail.com
4. Set permission: **Editor** (allows view and edit)
5. Uncheck "Notify people" (optional, prevents email notification)
6. Click **Send**
7. Official account accepts via email

**Technical Notes:**
- Editor permission allows: view, edit, add comments, share with others
- Viewer permission is insufficient for form submissions
- Owner permission is not yet (transfer is optional)

### Step 3.2: Transfer Sheet Ownership (Optional)
**Option A: Keep as is (Editor access is sufficient)**
- This is recommended for most cases
- Form submissions will work with Editor access
- No need to transfer ownership

**Option B: Transfer ownership (if needed):**
1. In Google Sheet, click **Share** button
2. Click **Advanced** (bottom right of share dialog)
3. Under "Share with people and groups", find jksolarcity25@gmail.com
4. Click **Transfer ownership** link next to the email
5. Enter jksolarcity25@gmail.com as new owner
6. Click **Send email**
7. Official account accepts transfer via email
8. Old owner will lose all access

**Technical Notes:**
- Transfer ownership gives full control including:
  - Can delete the sheet
  - Can change sheet access permissions
  - Can transfer to another account
- Not necessary for form functionality

### Step 3.3: Verify Sheet Access
1. Login to jksolarcity25@gmail.com
2. Open Google Sheet
3. Verify you can view and edit cells
4. Verify sheet structure:
   - Headers should be: Timestamp, Name, Phone, Email, Property Type, Roof Area, Monthly Bill, Followup Status, Remarks
5. Verify existing inquiry data is preserved
6. Try editing a cell to confirm edit access

**Technical Notes:**
- Sheet ID remains: 1Nz1-VOAjXejnTIlvtGhmEahORiOCdUxfBOn_g0Vsfzo
- Form submissions use Apps Script `SheetApp.openById()` with this ID
- Sheet ID is case-sensitive - must be exact

---

## 4. Domain Configuration

### Step 4.1: Login to Domain Registrar
1. Login to Hostinger or GoDaddy account
2. Navigate to Domains → My Domains
3. Find jksolarcity.com in the list
4. Click on the domain to manage it
5. Locate DNS or DNS Management section

**Technical Notes:**
- If using Hostinger: Domain → Manage → DNS
- If using GoDaddy: DNS Management

### Step 4.2: Update DNS Records for GitHub Pages
**Initial Setup (before repository transfer):**

**For Apex Domain (jksolarcity.com):**
Add 4 A records:
- **Record 1:**
  - Type: A
  - Name: @ (or leave blank depending on registrar)
  - Value: 185.199.108.153
  - TTL: 3600 (or "Auto" if available)

- **Record 2:**
  - Type: A
  - Name: @ (or leave blank)
  - Value: 185.199.109.153
  - TTL: 3600 (or "Auto")

- **Record 3:**
  - Type: A
  - Name: @ (or leave blank)
  - Value: 185.199.110.153
  - TTL: 3600 (or "Auto")

- **Record 4:**
  - Type: A
  - Name: @ (or leave blank)
  - Value: 185.199.111.153
  - TTL: 3600 (or "Auto")

**For www subdomain:**
- **Record 5:**
  - Type: CNAME
  - Name: www
  - Value: jsoumyanarayanan.github.io
  - TTL: 3600 (or "Auto")

**Technical Notes:**
- GitHub Pages provides 4 IP addresses for redundancy
- All 4 A records are required for apex domain
- CNAME for www points to GitHub Pages GitHub Pages subdomain
- TTL 3600 = 1 hour (standard for DNS)

### Step 4.3: Update GitHub Pages Custom Domain (Before Transfer)
1. Login to personal GitHub account
2. Navigate to: https://github.com/jsoumyanarayanan/JKSolarCity/settings/pages
3. Under "Custom domain", enter: jksolarcity.com
4. Click **Save**
5. Wait for DNS propagation (5-30 minutes)
6. After propagation, you'll see a green checkmark
7. Enable **Enforce HTTPS** (toggle switch)
8. Wait for SSL certificate to provision (up to 24 hours)

**Technical Notes:**
- DNS propagation time varies by registrar (5 min to 48 hours)
- SSL certificate is automatic with GitHub Pages (Let's Encrypt)
- Enforce HTTPS ensures all traffic uses HTTPS
- Custom domain verification uses DNS TXT record (auto-configured by GitHub)

### Step 4.4: Update www CNAME After Repository Transfer
After repository transfer (Step 1.2) is complete:
1. Login to domain registrar (Hostinger/GoDaddy)
2. Navigate to DNS management for jksolarcity.com
3. Find the CNAME record for www
4. Update the value from: `jsoumyanarayanan.github.io`
5. To: `jksolarcity25.github.io`
6. Save DNS changes
7. Wait for DNS propagation (5-30 minutes)

**Technical Notes:**
- This change is required because GitHub Pages username changes
- New GitHub Pages URL format: username.github.io
- Without this update, www.jksolarcity.com will break

### Step 4.5: Verify Domain and HTTPS
1. Visit: https://jksolarcity.com
2. Verify website loads correctly
3. Verify SSL certificate is active (lock icon in browser)
4. Click padlock icon to view certificate details
5. Verify no browser security warnings
6. Test both http:// and https:// (should redirect to https)
7. Verify all links work (contact form, navigation, etc.)

**Technical Notes:**
- If SSL doesn't activate within 24 hours, check DNS records
- Common SSL issues: incorrect A records, DNS not propagated, CNAME missing
- GitHub Pages provides free SSL via Let's Encrypt (auto-renews every 90 days)

---

## 5. Email Configuration

### Step 5.1: Set Up Email Forwarding (Optional)
If using domain registrar's email forwarding:

1. Login to domain registrar (Hostinger/GoDaddy)
2. Navigate to Email or Email Forwarding section
3. Create new forwarding rule:
   - From: info@jksolarcity.com (or other addresses)
   - To: jksolarcity25@gmail.com
4. Save settings
5. Test by sending email to info@jksolarcity.com
6. Verify it appears in jksolarcity25@gmail.com inbox

**Technical Notes:**
- Email forwarding is not required for website functionality
- Google Apps Script sends directly to jksolarcity25@gmail.com
- Forwarding is only for custom email addresses @jksolarcity.com

### Step 5.2: Update Google Apps Script Email Configuration
In the new Google Apps Script (under jksolarcity25@gmail.com):

Locate these variables in the code:
```javascript
const TO_EMAILS = ['jksolarcity25@gmail.com'];
const CC_EMAILS = [];
```

**Update if needed:**
- Add additional recipient to TO_EMAILS array: `['jksolarcity25@gmail.com', 'owner@example.com']`
- Add CC recipients to CC_EMAILS array: `['manager@example.com']`

**Technical Notes:**
- TO_EMAILS: Primary recipients (will receive email)
- CC_EMAILS: Carbon copy recipients (will receive copy)
- Email script uses `MailApp.sendEmail()` to send to both

### Step 5.3: Test Email Functionality
1. Open jksolarcity.com
2. Navigate to callback form
3. Fill out form with test data
4. Submit form
5. Check jksolarcity25@gmail.com inbox
6. Check spam folder if not received within 5 minutes
7. Verify email contains all form data:
   - Name, Phone, Email
   - Property Type, Roof Area, Monthly Bill
   - Timestamp

**Technical Notes:**
- Email is sent via Gmail's email service
- Check Gmail filters if email not received
- Email may be in "Social" or "Promotions" tab

---

## 6. GitHub Pages Repository Settings

### Step 6.1: Update Repository Name (Optional)
After transfer, if you want to rename:
1. Navigate to: https://github.com/jksolarcity25/JKSolarCity/settings
2. Under "Repository name", enter new name if desired
3. Click **Rename**
4. Verify repository URL changes to: https://github.com/jksolarcity25/[new-name]

**Technical Notes:**
- Renaming does not affect Git history
- Repository URL will change
- Custom domain configuration is not affected
- Links in website will still work (if using custom domain)

### Step 6.2: Update GitHub Pages Settings
1. Navigate to: https://github.com/jksolarcity25/JKSolarCity/settings/pages
2. Verify custom domain: jksolarcity.com
3. Verify source branch: master (or main)
4. Verify HTTPS enabled (green checkmark)
5. Verify all green checkmarks for DNS configuration
6. Check that "Source" is set to "Deploy from a branch"
7. Branch is set to "master" (or "main")

**Technical Notes:**
- If DNS shows errors, check A and CNAME records
- If HTTPS shows issues, wait for SSL certificate
- Branch name changed from "master" to "main" in newer repos - use whatever exists

---

## 7. Final Verification Checklist

### GitHub Repository
- [ ] Repository owned by jksolarcity25@gmail.com
- [ ] All code present and working (check index.html, IMAGES folder)
- [ ] Custom domain configured: jksolarcity.com
- [ ] HTTPS enabled (green checkmark in Pages settings)
- [ ] Website loads correctly at https://jksolarcity.com
- [ ] All navigation links work
- [ ] Callback form is accessible

### Google Apps Script
- [ ] Script owned by jksolarcity25@gmail.com
- [ ] New Web App URL deployed and active
- [ ] HTML updated with new script URL
- [ ] Form submissions working (test with real submission)
- [ ] Email notifications sent to jksolarcity25@gmail.com
- [ ] Google Sheet receiving form data correctly
- [ ] Followup Status and Remarks columns are being populated

### Google Sheet
- [ ] Sheet accessible to jksolarcity25@gmail.com (Editor or Owner)
- [ ] Form submissions saving to sheet
- [ ] All inquiry data preserved from before transfer
- [ ] Sheet structure intact (Timestamp, Name, Phone, Email, Property Type, Roof Area, Monthly Bill, Followup Status, Remarks)

### Domain
- [ ] DNS records configured correctly (4 A records + 1 CNAME)
- [ ] HTTPS certificate active (green lock in browser)
- [ ] Website accessible at https://jksolarcity.com
- [ ] www.jksolarcity.com redirects to jksolarcity.com
- [ ] No browser security warnings
- [ ] Email forwarding configured (if used)

### Email
- [ ] jksolarcity25@gmail.com receiving form emails
- [ ] Google Apps Script sending to correct email
- [ ] All email alerts working immediately
- [ ] No email delivery failures

---

## 8. Post-Transfer Tasks

### Step 8.1: Remove Personal Account Access
**From GitHub repository:**
1. Navigate to: https://github.com/jksolarcity25/JKSolarCity/settings
2. Click **Collaborators and teams**
3. Find personal account in the list
4. Click **Remove** or change role to "Read only"
5. Confirm removal

**From Google Sheet:**
1. Open Google Sheet
2. Click **Share**
3. Find personal account
4. Click **Remove** (if ownership was transferred)
5. Or keep as Editor if access is still needed

**From Google Apps Script:**
1. Login to personal Gmail account
2. Navigate to https://script.google.com/
3. Delete old script project
4. Confirm deletion (permanent)

**Technical Notes:**
- Removing personal account prevents future access
- Delete old script only after verifying new script works
- Keep personal account as collaborator if ongoing support needed

### Step 8.2: Update Documentation
1. Update PROJECT_TRANSFER_GUIDE.md with completion date
2. Update any internal documentation with new owner details
3. Update contact information in website if needed
4. Update team access permissions if team structure changes
5. Update any API keys or credentials if business needs change

**Technical Notes:**
- Documentation should reflect current ownership
- Update credentials in secure password manager
- Review access permissions quarterly

### Step 8.3: Create Backups
**Google Sheet Backup:**
1. Open Google Sheet
2. Click **File** → **Download** → **Microsoft Excel (.xlsx)**
3. Save with date: `JK_Solar_City_Backup_YYYY-MM-DD.xlsx`

**Repository Backup:**
1. Navigate to: https://github.com/jksolarcity25/JKSolarCity
2. Click **Code** → Download ZIP
3. Save with date: `JK_SolarCity_Repository_Backup_YYYY-MM-DD.zip`

**Credential Backup:**
- Save important credentials in secure password manager
- Document all account logins in secure location
- Include: GitHub, Google Sheet, Google Apps Script, Domain Registrar

**Technical Notes:**
- Regular backups recommended (monthly for sheet, quarterly for repo)
- Use encrypted storage for credentials
- Keep multiple backup copies

---

## 9. Troubleshooting

### Issue: GitHub Pages not loading at jksolarcity.com
**Diagnosis Steps:**
1. Check DNS propagation: Use `nslookup jksolarcity.com` in command line
2. Verify DNS records: Ensure all 4 A records are present
3. Check GitHub Pages settings: Custom domain should show green checkmark
4. Check for CNAME file: Repository should have CNAME file with "jksolarcity.com"
5. Check if repository is private: Must be public for GitHub Pages

**Solutions:**
- Wait for DNS propagation (up to 48 hours)
- Re-add missing A records
- Re-add CNAME file if missing
- Make repository public if needed

### Issue: Form submissions not working
**Diagnosis Steps:**
1. Open browser console (F12) and refresh page
2. Try submitting form and check for errors in console
3. Check network tab for failed requests
4. Verify script URL is correct in HTML (line around 2193)
5. Check script deployment status in Google Apps Script

**Common Errors:**
- "Network error" → Script URL incorrect or script not deployed
- "CORS error" → Script deployment settings wrong
- "404 Not Found" → Web app URL not found

**Solutions:**
- Re-deploy script with correct settings (Anyone access)
- Verify script URL in HTML
- Check Google Apps Script deployment logs
- Test script URL directly in browser (should return "Script executed successfully")

### Issue: Email not received at jksolarcity@gmail.com
**Diagnosis Steps:**
1. Check Gmail inbox and spam folder
2. Check Google Apps Script execution logs
3. Verify email addresses in script configuration
4. Check if script has email sending permissions

**Solutions:**
- Add email to contacts in Gmail
- Check `TO_EMAILS` array in script
- Verify script authorization includes Gmail access
- Check email quota limits (Gmail has daily limits)

### Issue: HTTPS not working after domain transfer
**Diagnosis Steps:**
1. Check GitHub Pages settings - Enforce HTTPS enabled
2. Wait up to 24 hours for SSL certificate
3. Check DNS records are correct
4. Verify custom domain is verified in GitHub Pages

**Solutions:**
- Disable and re-enable Enforce HTTPS
- Verify A records are correct
- Wait for Let's Encrypt certificate generation
- Check that domain is verified (TXT record present)

### Issue: Google Sheet not receiving form data
**Diagnosis Steps:**
1. Check SHEET_ID in script matches actual sheet ID
2. Verify sheet sharing permissions
3. Check Google Apps Script execution logs
4. Try manual Apps Script test: Deploy as Web app, test with manual trigger

**Solutions:**
- Verify SHEET_ID: 1Nz1-VOAjXejnTIlvtGhmEahORiOCdUxfBOn_g0Vsfzo
- Ensure sheet is shared with script owner
- Check script is authorized to access sheet data
- Re-deploy script with correct permissions

---

## 10. Contact Information

### Official Account
- **Email:** jksolarcity25@gmail.com
- **GitHub:** jksolarcity25
- **Domain:** jksolarcity.com

### Important Links
- **GitHub Repository:** https://github.com/jksolarcity25/JKSolarCity
- **Google Apps Script:** [New script URL after deployment]
- **Google Sheet:** https://docs.google.com/spreadsheets/d/1Nz1-VOAjXejnTIlvtGhmEahORiOCdUxfBOn_g0Vsfzo
- **Website:** https://jksolarcity.com
- **Domain Registrar:** [Hostinger or GoDaddy account]

### Technical References
- **GitHub Pages Documentation:** https://docs.github.com/en/pages/
- **Google Apps Script Documentation:** https://developers.google.com/apps-script/
- **Google Sheets API:** https://developers.google.com/sheets/api/

---

## 11. Security Notes

- ✅ Enable two-factor authentication on jksolarcity25@gmail.com
- ✅ Use strong passwords for all accounts (12+ characters, mixed case, numbers, symbols)
- ✅ Enable regular backups of Google Sheet (monthly recommended)
- ✅ Keep GitHub repository private if needed (currently public for GitHub Pages)
- Review access permissions quarterly
- Use secure password manager for credentials
- Never share passwords via email or chat
- Enable login notifications for all accounts
- Monitor for unauthorized access or activity

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

---

## Technical Specifications

### Current System Configuration

**GitHub Repository:**
- Owner: Personal account (to be transferred)
- Name: JKSolarCity
- Branch: master
- Files: index.html, IMAGES/ folder (6 images)
- Hosting: GitHub Pages

**Google Apps Script:**
- Owner: Personal account (to be transferred)
- Type: Web App (doGet/doPost)
- Current URL: https://script.google.com/macros/s/AKfycbzcf7su6gWChej5QH3yuTAo0E3lm7EUgQGQGiZ5pDPRrzHFTszS_ekdMsHUErREYqcQeA/exec
- Triggers: doPost on form submission

**Google Sheet:**
- ID: 1Nz1-VOAjXejnTIlvtGhmEahORiOCdUxfBOn_g0Vsfzo
- Owner: Personal account (to be shared/transferred)
- Columns: Timestamp, Name, Phone, Email, Property Type, Roof Area, Monthly Bill, Followup Status, Remarks

**Domain:**
- Registrar: Hostinger or GoDaddy
- Name: jksolarcity.com
- Type: Custom domain
- DNS: Configured for GitHub Pages

**Contact Email:**
- Official: jksolarcity25@gmail.com
- Backup: adhurshdx@gmail.com (if in script configuration)
