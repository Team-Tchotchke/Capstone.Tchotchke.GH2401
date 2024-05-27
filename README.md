# Capstone.Tchotchke.GH2401

![App Screenshot](https://github.com/Team-Tchotchke/Capstone.Tchotchke.GH2401/assets/156130068/097c51f5-f3d5-4330-b5a6-d4f6a342346e)

## Overview

Capstone Project

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
    createdb acme_talent_agency_db
    ```

2. **Install dependencies:**

    ```sh
    npm install && cd client && npm install
    ```

3. **Start the server in the root directory of the repository:**

    ```sh
    npm run start:dev
    ```

4. **Start the Vite server in the client directory:**

    ```sh
    npm run dev
    ```

5. **Test deployment:**

    ```sh
    cd client && npm run build
    ```

    Browse to `localhost:3000` (or the port you configured).

6. **Build script for deployment:**

    ```sh
    npm install && cd client && npm run build
    ```

7. **Start script for deployment:**

    ```sh
    node server/index.js
    ```

### Environment Variables

Set the following environment variables for deployment:

- `JWT`: Your JWT secret.
- `DATABASE_URL`: Your PostgreSQL database URL.

## Built With

- [Nodemon](https://nodemon.io/)
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
