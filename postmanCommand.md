curl http://localhost:3000/test #Test the Express.js server running on port 3000 from my terminal

| **Layer**     | **Tool**                                         | **know**                                                                                  |
| ------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| **Frontend**  | React + Tailwind CSS                             | Build modern, responsive UIs with reusable components and utility-first CSS               |
| **Backend**   | Express.js (Node)                                | Handle API routes, middleware, authentication, and business logic                         |
| **ORM**       | Sequelize (for MySQL) or Prisma (for PostgreSQL) | Interact with your SQL database using clean JavaScript instead of raw queries             |
| **Database**  | MySQL or PostgreSQL                              | Store, query, and relate structured data (PostgreSQL preferred for complex relationships) |
| **Dev Tools** | VS Code, Postman, pgAdmin, Docker (optional)     | Efficient coding, API testing, DB GUI, and environment setup                              |

CRUD stands for the four basic operations you can perform on data in a database:
| **Letter** | **Operation** | **What It Does** | **HTTP Method** | **SQL Command** |**Example Endpoint** |**Description**|
| ---------- | ------------- | --------------- | ---------------- | --------------- |
| **C** | **Create** | Add new data | `POST` | `INSERT` |POST /api/users |Saves new user to DB
| **R** | **Read** | Retrieve existing data | `GET` | `SELECT` |GET /api/users |Returns a list of users
|**R** | **Read** | Retrieve a single data | `Get` | `SELECT` |GET /api/users/:id |Returns user with specific ID
| **U** | **Update** | Modify existing data | `PUT` or `PATCH` | `UPDATE` |PUT /api/users/:id |Edits name, email, etc.
| **D** | **Delete** | Remove data | `DELETE` | `DELETE` |DELETE /api/users/:id |Removes user from database

#Example
// CREATE
await User.create({ name: 'ChrixSaint', email: 'chrix@example.com' });

// READ
const users = await User.findAll(); // or User.findByPk(1);

// UPDATE
await User.update({ name: 'Christian' }, { where: { id: 1 } });

// DELETE
await User.destroy({ where: { id: 1 } });

Let's correct your Postman setup now!

Step 1: Request a Signup Verification Code
Postman Setup for /api/signup/sendemail:

Open your existing request tab in Postman.

Method: Ensure it is POST (which it already is in your screenshot).

URL:
http://localhost:3000/api/signup/sendemail

Headers:

Go to the Headers tab.

Add a new header:

Key: Content-Type

Value: application/json

Body:

Go to the Body tab.

Select raw radio button.

From the dropdown next to raw, select JSON.

Enter the following JSON, replacing your_email@example.com with a valid email address:

JSON

{
"email": "testuser@example.com"
}
