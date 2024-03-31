# Automatic Mailing System with Gmail OAuth2 Integration

This project demonstrates how to set up an automatic mailing system using Express.js and Gmail's OAuth2 authentication for sending emails. It includes instructions on obtaining OAuth2 credentials and setting up the project.

## Getting Started

Follow the steps below to set up the project and obtain the required credentials.

### Prerequisites

- Node.js installed on your system
- A Google account (Preferably new and shouldn't logged in the android device so it won't cause any issue with two factor auth or android passkey)

### Step 1: Create a Google Cloud Platform Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing one.

### Step 2: Enable the Gmail API

1. In the Google Cloud Console, navigate to APIs & Services > Library.
2. Search for "Gmail API" and enable it for your project.

### Step 3: Create OAuth2 Credentials

1. In the Google Cloud Console, navigate to APIs & Services > Credentials.
2. Click on "Create credentials" and select "OAuth client ID".
3. Choose "Web application" as the application type.
4. Set the authorized redirect URIs (for testing, you can use `https://developers.google.com/oauthplayground`).
5. Click "Create" to create your OAuth2 credentials.
6. Note down the Client ID and Client Secret.

### Step 4: Obtain the Refresh Token

1. Go to the [OAuth 2.0 Playground](https://developers.google.com/oauthplayground).
2. Click on the gear icon in the top right corner and check "Use your own OAuth credentials".
3. Enter the Client ID and Client Secret obtained earlier.
4. In the left panel, under "Step 1 - Select & authorize APIs", enter `https://mail.google.com` in the "Input your own scopes" field.
5. Click "Authorize APIs".
6. You'll be prompted to log in to your Google account and grant permissions to the OAuth Playground.
7. After granting permission, click "Exchange authorization code for tokens".
8. Note down the refresh token.

### Step 5: Update the Code

1. Clone or download this repository to your local machine.
2. Replace `'YOUR_CLIENT_ID'`, `'YOUR_CLIENT_SECRET'`, and `'YOUR_REFRESH_TOKEN'` in the code with the credentials obtained in the previous steps.

### Step 6: Install Dependencies

1. Open a terminal and navigate to the project directory.
2. Run `npm install` to install the required dependencies.

### Step 7: Run the Application

1. After completing the setup and updating the code, run the application by executing `node app.js` or `npm start`.
2. The server will start running on the specified port (default is 3000).

### Step 8: Trigger Email Sending

1. Access the endpoint `/sendEmails` of your server (e.g., `http://localhost:3000/sendEmails`) to trigger sending emails.
2. Check the console for logs indicating whether the emails were sent successfully or if any errors occurred.

## Important Note

- Keep your OAuth2 credentials and refresh token secure. Do not expose them in public repositories or insecure environments.
- Handle refresh token expiration gracefully in your application to ensure uninterrupted access to Gmail's services.
- This project is only for Learning and development purposes and you should use dedicated marketing services to send bulk emails.
- You also should note that however there is no publicly known limit for the count of sending mail but these mails should be kept under 500 per day.
