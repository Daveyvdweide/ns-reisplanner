# NS Reisplanner

Journey planner for the Dutch railnet. 

## Journey planner
Select start and end stations:
![image](https://github.com/Daveyvdweide/react-ns-reisplanner/assets/55092870/4c0a1052-7ccf-44fb-b424-4e4c764c4788)

View a specific journey:
![image](https://github.com/Daveyvdweide/react-ns-reisplanner/assets/55092870/97b12b42-6139-4c39-bc96-172ae5a9efd4)

View disruptions:
![image](https://github.com/Daveyvdweide/react-ns-reisplanner/assets/55092870/1f01c4c3-98a0-4e5f-a4a2-5e09e46157b8)

## Host locally

### Setup
Install node modules

```cmd
npm run dev
```

### API Key
Create api key here: https://apiportalacc.ns.nl/

Copy .env.example to .env

```cmd
cp .env.example .env
```

Update key with your personal NS API key
```js
REACT_APP_NS_API_KEY=yourkeygoeshere
```
### Run server
Run local development server

```cmd
npm start
```
