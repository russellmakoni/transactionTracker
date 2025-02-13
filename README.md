# Transaction Tracker

Welcome to the Transaction Tracker app! This application allows users to track their transactions efficiently and effectively.
**Technology Stack:**

**Banckend:**
- **Spring Boot:** The backend of the Transaction Tracker Mobile app  is built using Spring Boot, a Java-based framework known for its simplicity and ease of use. Spring Boot provides a robust and scalable foundation for developing enterprise-level applications.
*Frontend:*
 **React Native:** The framework is ideal for making apps for iOS, Android and also web.
## Features
- User authentication
- Transaction management
- Navigation using React Navigation

## Getting Started

### Running the Spring Boot Backend

To start the Spring Boot backend application, follow these steps:

#### Prerequisites
- Ensure you have [Java JDK 17](https://www.oracle.com/java/technologies/javase-jdk17-downloads.html) installed on your machine.
- Ensure you have [Maven](https://maven.apache.org/download.cgi) installed.

#### Running the Application
1. Navigate to the backend directory:
   ```bash
   cd backend/Transaction_tracker
   ```

2. Build the application:
   ```bash
   mvn clean install
   ```

3. Run the application:
   ```bash
   mvn spring-boot:run
   ```

The application will start on `http://localhost:8080` by default.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/russellmakoni/transactionTracker
   cd transactionTracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

You can start the app on different platforms using the following commands:

- For Android:
  ```bash
  npm run android
  ```

- For iOS:
  ```bash
  npm run ios
  ```

- For Web:
  ```bash
  npm run web
  ```

### Resetting the Project

If you need to reset the project to its initial state, run:
```bash
npm run reset-project
```

## Design Choices and Challenges

In developing the Transaction Tracker application, I chose React Native as the framework due to its ability to create cross-platform applications for both iOS and Android, which significantly reduces development time and effort. However, I faced challenges due to my limited experience in mobile app development and React Native itself. This lack of familiarity made it difficult to navigate the complexities of mobile UI design and state management. Additionally, I encountered resource limitations, particularly in downloading essential software like Android Studio and AVD Manager, which are crucial for testing and deploying the application. To overcome these challenges, I utilized online resources and documentation extensively, engaged with community forums for troubleshooting, and focused on incremental learning by building small features before integrating them into the larger application.

## Learn More

To learn more about developing your project with Expo, check out the [Expo documentation](https://docs.expo.dev/).

## Contributing

We welcome contributions! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License.
