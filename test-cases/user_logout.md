User logout test case

## It should do user logout:

### Preconditions

1. Open [Nova Structure]()
2. Repeat steps 2-7 from [login_valid_data](login_valid_data.md)

### Steps

3. Click **Logout** button in navigation panel
4. Url should be `/` - Authorization page
5. Page should have authorization form

### Data type:

* `{login}` — string with length <=50
    * valid user login
    * was created before in **Keycloak**
    * mandatory field
* `{password}` — string with length <=50
    * current user password
    * mandatory field