# Bank of Flatiron

Welcome to the Bank of Flatiron, where you can trust us with all your financial
data! Use the below gif as an example of how the app should function.

## Instructions

For this project, you’ll be building out a React application that displays a
list of your recent bank transactions, among other features.

## Setup
1. Run `npm install` in your terminal.
2. Run `npm run server`. This will run your backend on port `8001`.
3. In a new terminal, run `npm start`. This will run your React app on port `8000`.

Make sure to open
[http://localhost:8001/transactions](http://localhost:8001/transactions) in the
browser to verify that your backend is working before you proceed!

The app uses Bootsrap for styling. If you see any
unfamiliar classNames on some components, don't sweat! That's coming from
Semantic UI and you shouldn't need to touch it.

If you are unfamiliar with HTML tables, take a look at the
[docs with an example here](https://www.w3schools.com/html/html_tables.asp)

## Core Deliverables

As a user, I should be able to:

- See a table of the transactions.
- Fill out and submit the form to add a new transaction. This should add the new
  transaction to the table **as well as post the new transaction to the backend
  API for persistence**.
- Filter transactions by typing into the search bar. Only transactions with a
  description matching the search term should be shown in the transactions
  table.

### Endpoints for Core Deliverables

#### GET /transactions

Example Response:

```json
[
  {
    "id": 1,
    "date": "2019-12-01",
    "description": "Paycheck from Bob's Burgers",
    "category": "Income",
    "amount": 1000
  },
  {
    "id": 2,
    "date": "2019-12-01",
    "description": "South by Southwest Quinoa Bowl at Fresh & Co",
    "category": "Food",
    "amount": -10.55
  }
]
```

#### POST `/transactions`

Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "date": "string",
  "description": "string",
  "category": "string",
  "amount": number
}
```

Example Response:

```json
{
  "id": 1,
  "date": "2019-12-01",
  "description": "Paycheck from Bob's Burgers",
  "category": "Income",
  "amount": 1000
}
```
## Getting Started with Development
To contribute to the Bank of Flatiron project, follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch for your changes.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your forked repository.
5. Submit a pull request to the original repository

## Contributing
Contributions to the Bank of Flatiron project are welcome! If you encounter any issues or have ideas for improvements, feel free to open an issue or submit a pull request.

## License
The Bank of Flatiron project is open-source and available under the  License. Feel free to use, modify, and distribute the code according to the terms of the license.