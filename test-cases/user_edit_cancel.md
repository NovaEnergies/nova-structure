User edit cancel test case

## It should cancel user edit:

### Preconditions

1. Open [Nova Structure]()
2. Repeat steps 2-7 from [login_valid_data](login_valid_data.md)
3. Url should be `/#/` - Home page

### Steps

4. Click **System configuration** item in navigation panel
5. Click **Users** item in navigation panel
6. Url should be `/#/users/` - Users page
7. Page should have users list
8. Click **Edit** button in user row
9. Edit data in next fields in user row:
   * `{companyId}` — user’s employer
   * `{rolesIds}` — user’s roles
   * `{projectsIds}` — user’s related projects
10. Click on **Cancel** button in user row
11. Changed data in user fields should be restored to initial

### Data type:

* `{companyId}` — drop-down list
* `{rolesIds}` — drop-down list
* `{projectsIds}` — drop-down list