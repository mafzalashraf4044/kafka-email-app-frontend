# Email Sending Application with React

This is the user interface for a simple email sending application. This frontend is built using React/Vite.

## Requirements

- Node.js
- Docker
- Docker Compose

## Getting Started

Follow these steps to set up and run the applicatioClone the repository from GitHub:

1. ```shell
   git clone https://github.com/mafzalashraf4044/kafka-email-app-frontend.git
   ```
2. Navigate to the project directory:
   ```shell
   cd kafka-email-app-frontend
   ```
3. Build and start the Docker containers using Docker Compose:
   ```shell
   docker-compose up --build
   ```
4. The application will be accessible at [http://localhost:300](http://localhost:3003/)0.

## Technologies Used

This frontend application is part of a larger system that includes the following services:

1. **Frontend**: React-based user interface (This repository)
2. **Backend**: Nest.js backend responsible for handling email jobs
3. **Queue**: Kafka for managing email sending jobs
4. **Database**: MySQL for storing relevant data

## Usage

This section provides an overview of how to effectively utilize the application to manage email job requests and monitor their progress:

1. **Initiating Email Jobs**
   * On the application's main interface i.e the home page, loclocate the 'New Email Job' button.
   * Input the desired quantity of emails you wish to send into this designated field named 'Number of Emails'.
   * Activate the email job request by clicking the "Submit" button.
2. **Tracking Job Progress**
   * Upon clicking the "Submit" button, the frontend seamlessly communicates with the backend system.
   * The backend promptly responds by furnishing a distinctive job ID or email sending ID that is unique to your request.
   * The progress of your job can be effectively monitored utilizing this exclusive identifier.
   * You will be notified after creatiion and completion of the job via toast message.
3. **Queueing Email Jobs**
   * In the background, the backend skillfully adds your email job request to a message queue, i.e Kafka.
4. **Email Sending Process**
   * Workers, operating within the application's framework, regularly retrieve jobs from the queue for the purpose of sending emails.
   * It's important to note that the actual email sending process has been intentionally commented out in this application for instructional purposes.
5. **Real-time Status Monitoring**
   * You are presented with the ability to observe the real-time count of total number of emails sent.
   * You can check this count in home page. This will be updated regularly using websockets.

This user-friendly guide outlines the fundamental steps and features of the application, enabling you to effectively manage email job requests and stay informed about their progress at all times.

## [Contributing](https://github.com/mafzalashraf4044/kafka-email-app-backend#contributing)

If you would like to contribute to this project or report issues, please visit the GitHub repository at [https://github.com/mafzalashraf4044/kafka-email-app-frontend](https://github.com/yourusername/email-sending-app).
