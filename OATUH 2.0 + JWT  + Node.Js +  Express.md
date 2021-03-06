#### OATUH 2.0 + JWT  + Node.Js +  Express

---

##### OUATH Facts

- OAUTH is **not a Authentication protocol**  ,OAUTH **meant for Authorization**
- **OAuth was not created for service to authorize a person, it is meant for service to authorize another service.**



#### Scenario

----

Imagine when you open a website, choose which data provider and which particular account to use, give permission to use the data (if it’s necessary) and work further on behalf of the owner of this account. You do not recall the password, do not waste time on a boring registration — it all happens in a few clicks. Obviously, you need to have an account of this provider for the purpose

The term «provider» presupposes a service which owns user data and provides third-party services (clients) with secure access to this data with the user’s consent. An application that wants to get user data is a client.



#### OAUTH Actors

---

- Resource Owner
  - An entity capable of granting access to protected resources (User is a resource owner who allows the google photos service to share photos with some third party service)
- Resource Server
  - The server which has all the protected resources . (Google photos service is a resource server who has all the photos.)
- Client
  - An application making protected resource request on behalf of its resource owner and with its authorization.
- Authorization Server
  - This is the server that issue access token to the clients. It is the main engine of OAuth



#### OAuth Tokens

---

> **Access tokens** are the token the client uses to access the Resource Server (API). They have very short lifetime  (minutes, one time or hours )
>
> **Refresh Tokens** are the tokens that the client uses to get a new Access token . lifetime is much longer than access tokens (Days, Months and Years)

#### OAuth Flow

> Process of requesting ,granting and life management of tokens is called  **Flow**
>
> Different kind of **Flow**  for different kind of Clients
>
> - **Authorization Code Flow **
> - **Implicit Code Flow**



#### What about JWT

---

>  JSON Web Token is an open standard for tokens creation in Json format
>
> Consists of Three Parts
>
> - Header
> - Payload
> - Signature





```
npm install express ejs express-session passport passport-google-oauth --save
```













