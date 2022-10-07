
# SpringBoot Application bundled with ReactJs in single jar

Looking for creating a single jar-based server for both frontend and backend? This project will help you out.


## How to use during development?
    We need to run both the application serprately and continue your developement.
    These command can be used to run these application while development.
    Root directory: ./gradlew bootRun
    Frontend directory inside root: npm start

## How to build for production deployment?
    Once development completed and ready for deployment, update your build.gradle file to build react app as well during this.

    plugins {
	    id 'org.siouan.frontend-jdk11' version '6.0.0'
    }

    frontend {
        nodeVersion = '16.1.0'
        packageJsonDirectory= file("${projectDir}/frontend")
        nodeInstallDirectory = file("${projectDir}/frontend/node")
        assembleScript = 'run build'
    }
    *Above task will do the react app build for you
    Now we need to copy this build to our spring application build folder
    
    task copyReactApp(type: Copy) {
        from "${projectDir}/frontend/build"
        into "${projectDir}/build/resources/main/public/."
    }
    bootJar.dependsOn(copyReactApp)

    And you are done with gradle changes to be done. Next gradle build will give you jar file with react application in it.



## How this work?

Modified build.gradle helps to execute node/npm command while building springboot application.

'org.siouan.frontend-jdk11' plugin helps to manage node related enviroment and scripts and excute them.
We ne to provid it the location where my react-app is located and node-version required and it downloads that on the go while building the spring application which actually helps to create a single jar with react production build static file to be served.
