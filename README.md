# Capstone.Tchotchke.GH2401

![Screen Shot 2024-05-23 at 2 20 16 PM](https://github.com/Team-Tchotchke/Capstone.Tchotchke.GH2401/assets/156130068/097c51f5-f3d5-4330-b5a6-d4f6a342346e)


Capstone Project
Link to Trello Board:
https://trello.com/b/PNUsHDcf/capstone-project

Link to documentation:
https://docs.google.com/spreadsheets/d/1tYqxJT_uP_ADT2LviBncoi75aRR_CYzKj5O136JIA7A/edit?usp=drive_web&ouid=104809665772122790445

_Scrum Master Lineup:_

- 3/21 - 3/31: Allison R.
- 4/1 - 4/7: Katy B.
- 4/8 - 4/14: Ali H.
- 4/15 - 4/21: Kira L.

_Installed: _

- Nodemon
- Vite
- React

# Setup

- create database

```
createdb acme_talent_agency_db
```

- install dependencies

```
npm install && cd client && npm install
```

- start server in root directory of repository

```
npm run start:dev
```

- start vite server in client directory

```
npm run dev
```

- to test deployment

```
cd client && npm run build
```

browse to localhost:3000 (or whatever server port you used)

- build script for deploy

```
npm install && cd client && npm run build

```

- start script for deploy

```
node server/index.js

```

- environment variables for deploy

```
JWT for jwt secret
DATABASE_URL for postgres database
```

- environment variables for deployed site
