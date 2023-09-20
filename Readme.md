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
   cd Book_Library_Service_Backend
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
https://book-library-service.onrender.com  
Add endpoints end of this above url if you want to work on it or check it.

The service provides the following API endpoints:

- `POST /book/add`: Add a new book to the catalog.
- `GET /book`: Retrieve a list of all books in the catalog.
- `PUT /book/edit/:_id`: Update the data of an existing book.
- `DELETE /book/delete/:_id`: Delete a book from the catalog by its ID.

## Deployment

This Book Library Service is live and deployed on [Render](https://render.com/), providing a reliable hosting platform for your backend.

- **Production URL**: [Your Render Production URL](https://book-library-service.onrender.com)

The backend of this service is hosted on Render, ensuring high availability and scalability.

## Testing 
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/25331572-a5044163-f027-4156-927f-1e3316e1b056?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D25331572-a5044163-f027-4156-927f-1e3316e1b056%26entityType%3Dcollection%26workspaceId%3D07c0e9f9-a009-454b-89c5-4ec002b06b8e)

## Contact Info

    Email:- adeshtayde6@gmail.com
    Contact Number:- 7709598474




