User login valid data test case

## It should do user login:

### Preconditions

1. Open [Nova Structure]()

### Steps

2. Login page should have authorization form
3. Type `{login}` into **Login** form field
4. Type `{password}` into **Password** form field
5. Click on **Join** button
6. Url should be `/#/` - Home page
7. Navigation panel should contains `{login}`

### Data type:

* `{login}` — string with length <=50
    * valid user login
    * was created before in **Keycloak**
    * mandatory field
* `{password}` — string with length <=50
    * current user password
    * mandatory field