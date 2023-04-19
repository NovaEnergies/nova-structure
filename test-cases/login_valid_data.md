User login valid data test case

## It should do user login:

### Preconditions

1. Open [Nova Structure]()

### Steps

1. Login page should have authorization form
2. Type `{login}` into **Login** form field
3. Type `{password}` into **Password** form field
4. Click on **Join** button
5. Url should be `/#/` - Home page
6. Navigation panel should contains `{login}`

### Data type:

* `{login}` — string with length <=50
    * valid user login
    * was created before in **Keycloak**
    * mandatory field
* `{password}` — string with length <=50
    * current user password
    * mandatory field