# Book Library Service

The Book Library Service is an API that allows you to manage and interact with a catalog of books. This service provides endpoints for adding, retrieving, updating, and deleting book data.


## Technology Stack

- **Node.js**: A JavaScript runtime environment.
- **Express.js**: A popular web application framework for Node.js, used for building the API.
- **MongoDB**: A NoSQL database used to store book data.
- **npm**: The package manager for Node.js, used to manage project dependencies.

## Features

- Add new books to the catalog.
- Retrieve a list of all books in the catalog.
- Update the information of existing books.
- Delete books from the catalog.


### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/book-library-service.git
   ```

2. Configuration

    Before running the application, you need to configure it by providing the necessary API keys and database connection details. Create a `.env` file in the project root directory and add the following environment variables:

    ```env
    # MongoDB Configuration
    mongourl=your_mongodb_url
    port=3000 || <Your Desired Port>
    ```

     Replace the placeholders with your actual values.

3. Change into the project directory:

   ```bash
   cd book-library-service
   ```

4. Install the project dependencies:

   ```bash
   npm install
   ```

5. Start the server:

   ```bash
   npm start
   ```

The service should now be running locally on port 5000 by default. You can access the API endpoints as described below.

## API Endpoints

The service provides the following API endpoints:

- `POST /book/add`: Add a new book to the catalog.
- `GET /`: Retrieve a list of all books in the catalog.
- `PUT /edit/:_id`: Update the data of an existing book.
- `DELETE /delete/:_id`: Delete a book from the catalog by its ID.

## Deployment

This Book Library Service is live and deployed on [Render](https://render.com/), providing a reliable hosting platform for your backend.

- **Production URL**: [Your Render Production URL](https://your-render-production-url.com)

The backend of this service is hosted on Render, ensuring high availability and scalability.

## Contact Info

    Email:- adeshtayde6@gmail.com
    Contact Number:- 7709598474




