User edit test case

## It should do user edit:

### Preconditions

1. Open [Nova Structure]()
2. Repeat steps 2-7 from [login_valid_data](login_valid_data.md)
3. Url should be `/#/` - Home page

### Steps

4. Click **System configuration** item in navigation panel
5. Click **Users** item in navigation panel
6. Url should be `/#/users/` - Users page
7. Page should have users table
8. Click **Edit** button in user row
9. Edit data in next fields in user row:
    * `{companyId}` — user’s employer
    * `{rolesIds}` — user’s roles
    * `{projectsIds}` — user’s related projects
10. Click on **Save** button in user row
11. Edited data in user fields should have updated

### Data type:

* `{companyId}` — drop-down list
* `{rolesIds}` — drop-down list
* `{projectsIds}` — drop-down list