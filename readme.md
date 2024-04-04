# Automatic Mailing System with Gmail OAuth2 Integration

This project demonstrates how to set up an automatic mailing system using Express.js and Gmail's OAuth2 authentication for sending emails. It includes instructions on obtaining OAuth2 credentials, setting up the project, and storing email data in a MongoDB database.

## Getting Started

Follow the steps below to set up the project, obtain the required credentials, and integrate with a MongoDB database.

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

### Step 5: Set up MongoDB Database

1. Go to the [MongoDB site](https://www.mongodb.com/) and create a account or log into an existing account.
2. Create a new Project and Setup everything as needed.
3. After creating the project you will be redirected to the Overview of that project, here you need to create a deployment.
4. After clicking on create, click on "Go to Advanced Configuration" button this helps us to set up IP Whitelisting (Allow access from desired IP addresses).
5. Here you can choose your plan, region and provider and can change some settings according to your needs.
6. Once done with that give your cluster a name and click "Create Cluster".
7. After that Give your cluster a username and password and click create user (This will be needed when connecting from node js) and setup IP whitelisting, For global access give the IP address as 0.0.0.0 after this click "Finish and Close".
7. Now comes the important part, where you need to connect  your app to this database. To do so follow these steps :
    1. Click on connect
    2. Click on Drivers
    3. Scroll and copy the connection string and change the `<password>` with the password that was created while creating the user.


### Step 6: Update the Code

1. Clone or download this repository to your local machine.
2. Create a .env file and  add the following variables (replace the values with your own obtained from the previous steps):
    1. CONNECTION_STRING=`<Your Connection String>`
    2. YOUR_CLIENT_ID=`<Your Client ID>`
    3. YOUR_CLIENT_SECRET=`<Your Client Secret>`
    4. YOUR_REFRESH_TOKEN=`<Your Refresh Token>`

### Step 7: Install Dependencies

1. Open a terminal and navigate to the project directory.
2. Run `npm install` to install the required dependencies.

### Step 8: Run the Application

1. After completing the setup and updating the code, run the application by executing `node server.js` or `npm start`.
2. The server will start running on the specified port (default is 3000).

### Step 9: Save Emails to the DataBase

1. To save emails to the database simply make a POST request to the endpoint `/db/save` of your server (e.g., `http://localhost:3000/db/save`) with the email address in the req body.
2. Or you can upload the .csv or .xlsx file (For now only cvs can identify and use only the required 3 columns and ignore rest of them, xlsx file must have these first 3 columns in order i.e. name, email, data) and upload them on the endpoint `/upload` of your server (e.g., `http://localhost:3000/upload`). This will automatically make a POST request with the selected file in request and save the data in DB.

### Step 10: Trigger Email Sending

1. Access the endpoint `/sendEmails` of your server (e.g., `http://localhost:3000/sendEmails`) to trigger sending emails.
2. Check the console for logs indicating whether the emails were sent successfully or if any errors occurred.

## Important Note

- Deployment Link - [Render link](https://bulk-email-sender-5pem.onrender.com/api-docs/)
- Keep your OAuth2 credentials and refresh token secure. Do not expose them in public repositories or insecure environments.
- Handle refresh token expiration gracefully in your application to ensure uninterrupted access to Gmail's services.
- This project is only for Learning and development purposes and you should use dedicated marketing services to send bulk emails.
- You also should note that however there is no publicly known limit for the count of sending mail but these mails should be kept under 500 per day.
