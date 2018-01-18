# Project
Implementation of the main project

# Building 
## Preface
To build the project, Spring Boot Utilizes Gradle Build tool.

There is nothing to download, unless you do not have a version of Java 8 installed.
  
The purpose of gradle is to allow any user on any platform to build the project.


## Instructions
First clone the repository and download this branch as a local copy.

Next run the command in your Intellij terminal (at project root):

Unix/OSX:  `./gradlew build` 

Windows:  `gradlew build` 

You will see it download a bunch of dependencies.  This is normal.

Next, enter:

Unix/OSX:  `./gradlew bootRun` 

Windows: `gradlew bootRun`

Wait until you see a line that mentions Tomcat has started on port 8080.

From here, open your web browser to `localhost:8080`, and you should see the Hello World.