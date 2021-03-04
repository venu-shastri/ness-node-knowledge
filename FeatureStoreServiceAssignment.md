## Implementing the Feature Store Service with Express and MongoDB

#### What is Feature Store ?

---

Data scientists are duplicating work because they don’t have a centralized feature store. Everybody I talk to really wants to build or even buy a feature store......if an organization had a feature store, the ramp-up period [for Data Scientists can be much faster]. , A feature store provides a single pane of glass for sharing all available features.

[Feature Store for ML](https://www.featurestore.org/)

##### What is Feature?

---

A **feature** is an individual measurable property or characteristic of a phenomenon being observed.

[Feature (machine Learning) (jspayne.com)](http://www.jspayne.com/php/SummaryGet.php?FindGo=Feature_(machine_learning))





#### Design a REST API

---



| Http Verb | Api - Url                                              | Description              |
| --------- | ------------------------------------------------------ | ------------------------ |
| POST      | http://localhost:7000/api/features/feature             | Create a new feature     |
| GET       | http://localhost:7000/api/features                     | Get all Features         |
| PUT       | http://localhost:7000/api/features/{feature_id}        | Update  Existing Feature |
| DELETE    | http://localhost:7000/api/features/{feature_id}        | Remove Feature           |
| GET       | http://localhost:7000/api/features/search/{feature_id} | Get Feature By id        |

### feature schema

---

- feature_id
- feature_name
- feature_type ( int ,float, array of string , string )
- feature_description
- feature_created_timestamp
- feature_version
- feature_owner
- feature_data (data can be of any  form (single value(int,boolean,float) , array of values))

### Expectation

---

- Prepare  MongoDb to  store feature information
- Design REST api using Node + TypeScript +Express.js (Explore Routing and route parameter )
- Test Api using Postman
- Push the code to your own  git repository 

















