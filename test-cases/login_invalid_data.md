User login invalid data test case

## It should do user login error:

### Preconditions

1. Open [Nova Structure]()

### Steps

2. Login page should have authorization form
3. Type `{login}` into **Login** form field
4. Type random `{password}` into **Password** form field
5. Click on **Join** button
6. 'Invalid credentials' notification is displayed below the login form fields

### Data type:

* `{login}` — string with length <=50
    * valid user login
    * was created before **Keycloak**
    * mandatory field
* `{password}` — string with length <=50
    * current user password
    * mandatory field