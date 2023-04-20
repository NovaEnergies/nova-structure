User login empty field test case

## It should do user login error:

### Preconditions

1. Open [Nova Structure]()

### Steps

2. Login page should have authorization form
3. Type `{login}` into **Login** form field
4. Don't type `{password}` into **Password** form field
5. The **Join** button is disabled

### Data type:

* `{login}` — string with length <=50
    * valid user login
    * was created before **Keycloak**
        * mandatory field
* `{password}` — string with length <=50
    * current user password
    * mandatory field