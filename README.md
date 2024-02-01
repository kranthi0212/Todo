# Task Management App Documentation

This documentation provides information on the technologies used and instructions on how to run the Task Management App locally.

## Technologies Used

- **Frontend:**
  - ReactJS (TypeScript)
  - HTML/CSS
  - Axios (for API requests)
  
- **Backend:**
  - Spring Boot (Java)
  - Spring Data JPA
  - Spring MVC
  - PostgreSQL (as the database)
  
## Prerequisites

Before running the application locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/) - for the frontend
- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-downloads.html) - for the backend
- [PostgreSQL](https://www.postgresql.org/download/) - as the database

## Setup Instructions

### Frontend (ReactJS)

1. Navigate to the `frontend` directory.

    ```bash
    cd frontend
    ```

2. Install dependencies.

    ```bash
    npm install
    ```

3. Start the React development server.

    ```bash
    npm start
    ```

4. The application will be accessible at [http://localhost:3000](http://localhost:3000).

### Backend (Spring Boot)

1. Open the project in your preferred Java IDE (e.g., IntelliJ IDEA, Eclipse).

2. Configure your database settings in `src/main/resources/application.properties`.

3. Run the Spring Boot application.

4. The backend will be accessible at [http://localhost:8080](http://localhost:8080).

## Database Configuration

- Ensure you have PostgreSQL installed and create a database named `your_database_name`.

- Update `src/main/resources/application.properties` with your database configuration.

    ```properties
    spring.datasource.url=jdbc:postgresql://localhost:5432/your_database_name
    spring.datasource.username=your_database_username
    spring.datasource.password=your_database_password
    spring.jpa.show-sql=true
    spring.jpa.hibernate.ddl-auto=update
    ```

## API Endpoints

- **GET all tasks:** [http://localhost:8080/api/tasks](http://localhost:8080/api/tasks)

- **GET task by ID:** [http://localhost:8080/api/tasks/{id}](http://localhost:8080/api/tasks/{id})

- **POST create task:** [http://localhost:8080/api/tasks](http://localhost:8080/api/tasks)

- **PUT update task:** [http://localhost:8080/api/tasks/{id}](http://localhost:8080/api/tasks/{id})

- **DELETE delete task:** [http://localhost:8080/api/tasks/{id}](http://localhost:8080/api/tasks/{id})

Feel free to explore and use the provided API endpoints.

## Additional Notes

- Ensure both frontend and backend are running simultaneously for full application functionality.

- Customize the application based on your specific requirements.

