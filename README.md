# Capstone.Tchotchke.GH2401

## Overview
A tchotchke (/ˈtʃɒtʃkə/ CHOTCH-kə, /ˈtʃɒtʃkiː/ CHOTCH-kee)is a small bric-à-brac or miscellaneous item. The word has long been used by Jewish-Americans and in the regional speech of New York City and elsewhere. It is borrowed from Yiddish and is ultimately Slavic in origin.

We've built a fullstack e-commerce application selling tchotchke using the modern PERN stack (React, Node.js, Express, and PostgreSQL)

[View Project Presentation with Functionality Video](https://www.canva.com/design/DAGDJ9b30_0/65CflTSAX9ohosBPq2b8nA/view?utm_content=DAGDJ9b30_0&utm_campaign=designshare&utm_medium=link&utm_source=editor)

## Site Display

![App Screenshot](https://github.com/Team-Tchotchke/Capstone.Tchotchke.GH2401/assets/156130068/097c51f5-f3d5-4330-b5a6-d4f6a342346e)

![viewAll](https://github.com/Team-Tchotchke/Capstone.Tchotchke.GH2401/assets/156130068/70b8a152-bc5d-4dab-adbb-91df42cb85f6)

![selectByCategory](https://github.com/Team-Tchotchke/Capstone.Tchotchke.GH2401/assets/156130068/60c0fec8-7f12-46bb-993d-ddf478779763)

![login](https://github.com/Team-Tchotchke/Capstone.Tchotchke.GH2401/assets/156130068/62a18a48-9148-4d12-9005-48d30ccbccb2)

![cart](https://github.com/Team-Tchotchke/Capstone.Tchotchke.GH2401/assets/156130068/923ba8e7-a47e-4a4f-9697-0f2879b2d81f)


![Stripe](https://github.com/Team-Tchotchke/Capstone.Tchotchke.GH2401/assets/156130068/8e34fa5b-a463-49b4-bdbe-c40713538dfd)


## Links

- [Trello Board](https://trello.com/b/PNUsHDcf/capstone-project)
- [Documentation](https://docs.google.com/spreadsheets/d/1tYqxJT_uP_ADT2LviBncoi75aRR_CYzKj5O136JIA7A/edit?usp=drive_web&ouid=104809665772122790445)

## Scrum Master Lineup

- **3/21 - 3/31:** Allison R.
- **4/1 - 4/7:** Katy B.
- **4/8 - 4/14:** Ali H.
- **4/15 - 4/21:** Kira L.

## Installation

### Prerequisites

Ensure you have the following installed:
- Node.js
- PostgreSQL

### Steps

1. **Create the database:**

    ```sh
    createdb tchotchke_db
    ```

2. **Install dependencies:**

    ```sh
    cd client && npm install
    ```

   ```sh
    cd server && npm install
    ```

4. **Start the server in the root directory of the repository:**

    ```sh
    cd server && npm run start:dev
    ```

5. **Start the Vite server in the client directory:**

    ```sh
    cd client && npm run dev
    ```

6. **Test deployment:**

    ```sh
    cd client && npm run build
    ```

    Browse to `localhost:3000` (or the port you configured).

7. **Build script for deployment:**

    ```sh
    npm install && cd client && npm run build
    ```

8. **Start script for deployment:**

    ```sh
    node server/index.js
    ```

### Environment Variables

Set the following environment variables for deployment:

- `JWT`: Your JWT secret.
- `POSTGRES_PRISMA_URL`: Your PostgreSQL database URL with username & password.

## Built With

- [Nodemon](https://nodemon.io/)
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
