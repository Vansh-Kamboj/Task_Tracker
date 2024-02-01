- **Description:** This application enables users to manage their tasks effectively through a user-friendly interface. Users can create, update, delete, and mark tasks as completed, ensuring organized and efficient task management.

- **Title:** Task Tracker Application using Java/Spring Boot Backend and ReactJS Frontend

**. Technologies Used:**

**\* Backend:**
_ Java
_ Spring Boot , MySQL (database)
**\* Frontend:**
_ ReactJS
_ Node.js (version 16.13.0)

**. Setup and Installation:**

**.Backend (Java/Spring Boot):**

1. **Prerequisites:**

   - Java Development Kit (JDK)
   - Spring Boot CLI or SpringToolSuite4
   - MySQL ([https://dev.mysql.com/downloads/installer/])

2. **Project Creation:**

   - Open Spring Initializr ([https://start.spring.io/](https://start.spring.io/))
   - Select Java, Spring Web, Spring Data JPA, MySQL Driver
   - Customize other options as needed (e.g., project name, packages)
   - Generate and download the project zip

3. **Database Setup:**

   - Create a MySQL database (or use an existing one).
   - Configure database connection details in `application.properties`:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
     spring.datasource.username=your_username
     spring.datasource.password=your_password
     spring.jpa.show-sql = true
     spring.jpa.hibernate.ddl-auto = update
     server.port=8080
     spring.batch.initialize-schema=ALWAYS
     ```
   - Consider using environment variables for sensitive information.

4. **Run the Backend:** - Unzip the downloaded project. - Open a terminal in the project directory. - Run `./mvnw spring-boot:run` (or `mvnw spring-boot:run` on Windows). - The application should start on port 8080 by default. - Or it can be run in Spring Tools .
   **B. Frontend (ReactJS):**

5. **Prerequisites:**

   - Node.js and npm ([https://nodejs.org/](https://nodejs.org/))

6. **Project Setup:**

   - Open a terminal in the project directory.
   - Run `npm install` to install React dependencies.

7. **Run the Frontend:**
   - Run `npm start` to start the development server.
   - The frontend should be accessible at `http://localhost:3000` by default.

**. Configuration and Customization:**

1. **Backend (Spring Boot):**

   - Adjust database connection details, API endpoints, security settings, and other configurations in `application.properties`.

2. **Frontend (ReactJS):**
   - Modify components, styling, and API interaction logic in React components and files.

**V. Usage and Functionalities:**

- Creating tasks with title, description, and optional due date.
- Updating task details.
- Marking tasks as completed.
- Viewing a list of tasks (e.g., all tasks, pending tasks, completed tasks).

- **Contact:** bt20eee008@nituk.ac.in or vanshkambojkh@gmail.com
