I. HOW TO RUN THE APPLICATION

1. Start backend side
    - Go to entry-level-sessions-be
    - Run: `npm install` to install dependencies
    - Run: `npm run start` to start the application
    - The default host of application is 3000 and configurable at env/local.env
2. Start front end
    - Go to entry-level-sessions-fe
    - Run: `npm install` to install dependencies
    - Run: `npm start` to start the application

II. APPLICATION EXPLAINATION

1. Backend
    - I choose nestjs framework to work on this assignment because it's very powerful and have many library support to build fast application.
    Beside, I'm usually using mono repo at my real project but at the time is not enough so I just using one repository.
    - I apply clean architect to this application because: Clean architecture is a software design philosophy that separates the elements of a design into ring levels. Organize code in such a way that it encapsulates the business logic but keeps it separate from the delivery mechanism.
        + domain: contains the business code, interfaces
        + infrastructure: contains all the technical details, configuration, implementations
        + usecases: execute business logic
     So my code is very easy to maintain and split tasks to the teams.
    - Using axios to get data from provided API

2. Frontend
    - I chooose reactjs as the framework
    - Antd at UI framework, I also apply style-components as well
    - I choose redux toolkit for management state because it is powerfull, codeless and easy to maintain
    - I also do some reponsive for application.