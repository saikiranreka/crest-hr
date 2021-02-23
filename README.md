CREST-HR is a Java EE 7 application that provides the skeleton for a simple 
RESTful API implementing a HR system. The application's API is deployed to a 
Wildfly 10 Java EE container that uses a PostgreSQL database to persist data.

The frontend is served by a node server. Browser requests are forwarded
to the backend API using a reverse-proxy managed by traefik 
(https://github.com/containous/traefik).
 
To get the system up and running quickly you should first download and 
install Docker (http://www.docker.com) if it is not already installed on 
your system. Once Docker is installed do the following:

1. Open a command line terminal and navigate to the project folder: 

``` cd crest-hr```

2. Enter the command: 

```docker-compose up```

This will download all application dependencies, configure the system, and 
start the application. As the system starts, it will 
automatically populate the CREST-HR database schema using the SQL located 
at $PROJECT_HOME/resources/META-INF/import.sql. Once up and running the 
application can be accessed at http://localhost/.  To access the API, 
go to http://localhost/api/.

The frontend has been designed to allow you to add/modify departments and
employees. Your task is to fill out the stubs in the backend API to 
implement the following functionality.

The API should allow a user to:

1. Create a new department
2. Update an existing department
3. Create a new employee
4. Update an existing employee

Note that you do not have to implement the ability to delete data.

There are multiple ways that you can deploy your WAR as your are testing
your application. The instructions that follow document ONE way to do this.

1. Using your browser access the Wildfly management console at
http://localhost:9990.
2. Username and password are admin/admin.
3. Click Deployments and then click Add in the upper left-hand corner.
4. Make sure Upload a new deployment is selected and click Next.
5. Select the WAR file that you want to deploy and click Next.
6. Click Finish. You should see a successful deployment message.

If all goes as expected you should now be able to access the frontend
by pointing your browser at http://localhost. For subsequent deployments
click on your WAR file in the management console and click Replace.


