### What Server Less is

---

Server less is a method of deploying and running applications on cloud infrastructure, on a pay-per-use basis and without renting or buying servers.

Here the server less platform provider is responsible for capacity planning, scaling, balancing, and monitoring; the provider is also able to treat your applications as **functions**

> server less **does not exclude the existence of servers**; software requires hardware to run. Server less just removes the need for companies, organizations, or developers to physically rent or buy a server

> Some of you may be wondering whether serverless removes a company’s need for large DevOps teams. For most situations, the answer is **yes**



### How does serverless work?

---

Server less providers supply an isolated compute container for your application. The compute container is event-driven, so it’s activated only when a certain event triggers.

In a more technical manner, with serverless, your function containers are both event listeners and event emitters.

Finally, serverless providers offer various triggers that can run your functions. The list of triggers depends on the provider and implementation, but some of the most common triggers are

- HTTP requests,
-  File uploads to file storage,
-  Database updates
- Internet of Things (IoT) events.

**NOTE** A serverless function runs only when triggered, and you pay only for its execution time. After execution, the serverless provider shuts the function down, while keeping its trigger active

More precisely, the provider stores your application inside a certain container. The container represents an isolated environment that contains everything your application needs to run.

##### Why Containers ?

---

The container allows the server less provider to safely move and store your application, and to execute it and make copies of it depending on your needs.



#### Serverless infrastructure — AWS

---

- Amazon’s AWS Lambda 

- Microsoft’s Azure Functions

- Google’s Cloud Functions

#### AWS - Lamda

---

AWS Lambda is an event-driven serverless computing platform provided by Amazon as part of Amazon Web Services. It is a compute service that runs code in response to events and automatically manages the compute resources required by that code

- Lambda is used for computing.
- API Gateway is a router that accepts HTTP requests and invokes other services
  depending on the routes.
- DynamoDB is an autoscalable database.
-  Simple Storage Service (S3) is a storage service that abstracts the standard hard
  drives and offers you unlimited storage.



| Functionality | AWS service | Short description                                            |
| ------------- | ----------- | ------------------------------------------------------------ |
| Computing     | Lamda       | Computing component, used for your business logic            |
| Router        | API Gateway | Routing component, used to route HTTP request data to your<br/>Lambda function |
| Database      | DynamoDB    | Autoscalable document database                               |
| Storage       | S3          | Autoscalable file storage service                            |



#### What is Claudia, and how does it fit?

---

> Claudia is a Node.js library that eases the deployment of Node.js projects to AWS Lambda and API Gateway . It automates all the error-prone deployment and configuration tasks, and sets everything up the way JavaScript developers expect out of the box
>
> Claudia is a command line tool that runs on the client side and communicates with the AWS platform using the AWS SDK
> for Node.js.





