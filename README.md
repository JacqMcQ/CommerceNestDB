# CommerceNestDB

CommerceNestDB is a backend database management system designed for e-commerce websites. It uses Sequelize to interact with a relational database.

Video Tutorial on Google Drive: https://drive.google.com/file/d/1-ZI_RtcMx6V4Pol5743dxTNaJb1pSGK-/view?usp=drive_link

## Table of Contents

1. [Overview](#overview)
2. [Features](#featuresfeatures)
3. [Installation](#installation)
4. [Setup](#setup)
5. [Usage](#usage)
6. [Resources](#resources)
7. [Contributing](#contributing)
8. [License](#license)

## Overview

CommerceNestDB facilitates database management for e-commerce applications. It integrates with Sequelize, an ORM (Object-Relational Mapping) library for Node.js, to manage database operations.

## Features

- CRUD operations (Create, Read, Update, Delete) for managing products, users, orders, etc.
- Integration with Sequelize for easy database interaction
- Customizable models and relationships
- Support for various database dialects (e.g., MySQL, PostgreSQL)

## Installation

To get started with CommerceNestDB, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/CommerceNestDB.git

2. navigate to the database cd CommerceNestDB.

3. Install dependencies with <npm i>.

## Setup

1. Create a '.env' file in the root of the project dand add your database configuration.
2. Run database migrations to set up your database schema and seed. 
3. npm run

## Usage

After setting up, you can interact with the API endpoints using tools like Insomnia or Postman. (In the example, Insomnia is used). 

Example Endpoints:

GET /api/products - Retrieve a list of products.
POST /api/products - Create a new product.
PUT /api/products/
- Update a product by ID.
DELETE /api/products/
- Delete a product by ID.

## Resources:

- Sequelize Documentation:  (https://dev.to/luqmanshaban/building-a-nodejs-server-side-application-with-sequelize-and-express-beginners-guide-5758)
- Express Documentation: https://expressjs.com/en/guide/routing.html
- Insomnia Video Tutorial: https://youtu.be/fzLPHpOP3Wc
- UT Austin Boot Camp Course Material from Week 13 Object-Relational Mapping
- AI was used for troubleshooting different route js files to include proper formatting of the API calls for 'get', 'put' and 'delete' requests. 

# Contributing:

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Make sure to include tests and follow the coding style used in the project.

- Fork the repository
- Create a new branch (git checkout -b feature/your-feature)
- Make your changes
- Commit your changes (git commit -am 'Add new feature')
- Push to the branch (git push origin feature/your-feature)
- Create a new Pull Request

## License: 
This project is licensed under the MIT License - see the LICENSE file for details.