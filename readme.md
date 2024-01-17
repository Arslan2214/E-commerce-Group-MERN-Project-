<h1 style="text-align:center; margin: 8px; color:">
Welcome to Our E-commerce Website
</h1>
In this Project we are going to create a new ecommerce website.

Here are keypoints to navigate to:
- [Technologies used](#technologies-used)
- [How to contribute?](#how-to-contribute)
- [Folder structure:](#folder-structure)

## Technologies used


Technologies we are using are following:
- React 
- Tailwind 
- Express
- mongoose


## How to contribute?
Repeat following steps to start contribution.


1. **Fork the Repository:**
   - **Click "Fork"** button on the top right corner of this repository to create a copy in your GitHub account.

2. **Clone the Repository:**
   - Clone the forked repository to your local machine.
     ```cmd
     git clone https://github.com/your-username/parent-directory.git
     ```

3. **Install Dependencies:**
   - Install **server's** dependencies
     ```cmd
     npm install
     ```
   - Navigate to the `ecommerce-frontend` directory.
     ```cmd
     cd ecommerce-frontend
     ```
   - Install project dependencies.
     ```cmd
     npm install
     ```

4. **Run the Frontend:**
   - Start the development server for the React app.
     ```cmd
     npm start
     ```
   - Open your browser and visit `http://localhost:3000` to see the app running.

5. **Run the Backend:**
   - Navigate back to the parent directory.
     ```cmd
     cd ..
     ```
   - Start the Express server for the backend.
     ```cmd
     npm start
     ```
   - Ensure the backend server is running on `http://localhost:5000`.

6. **Make Changes:**
   - Create a new branch for your changes.
     ```cmd
     git checkout -b feature/<feature_name>
     ```
   - Implement your changes in the relevant folders (`routes`, `model`, etc.).

7. **Commit Changes:**
   - Commit your changes with meaningful messages.
     ```cmd
     git add .
     git commit -m "[feat] Discribe added feature"
     ```

8. **Push Changes:**
   - Push your changes to your forked repository.
     ```cmd
     git push origin feature/<feature_name>
     ```

9.  **Create Pull Request:**
    - *<span style="text-decoration: underline;text-underline-offset: 3px;">Open a pull request on GitHub</span>* to merge your changes into the main repository.

<div style="margin: 20px 0; font-size: 20px; text-align:center; font-weight: 600;">Congratulations on Your Contribution! 🎉</div>

<hr style="height: 1px;">


## Folder structure:
After installing `node_modules` your folder structure will be:


```
project-folder/
│
├── ecommerce-frontend/
│   ├── node_modules/
│   ├── public/
│   │   ├── index.html
│   │   └── ...
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── .gitignore
│   ├── package.json
│   └── ...
│
├── controller/
├── node_modules/
├── model/
├── routes/
├── .env
├── .gitignore
├── readme.md
├── package.json
├── server.js
└── ...

```

Some folders are following:
- **`server.js`** is main server file.
- `routes` for API routes.
- `model` for mongoose models.
- `controller` for API's controller functions.
- **`ecommerce-frontend`** is react project for ecommerce frontend.

You are ready to start, <span style="font-size: 18px; font-weight: 700;">Happy Coding 😍</span>

<hr style="height: 1px;">