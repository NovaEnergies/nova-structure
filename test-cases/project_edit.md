Project edit test case

## It should do project edit:

### Preconditions

1. Open [Nova Structure]()
2. Repeat steps 2-7 from [login_valid_data](login_valid_data.md)
3. Url should be `/#/` - Home page

### Steps

4. Click **System configuration** item in navigation panel
5. Click **Projects** item in navigation panel
6. Url should be `/#/projects/` - Projects page
7. Page should have projects table
8. Click on **Edit** button in project row
9. Project row should have **Save** and **Cancel** buttons
10. Edit data in next fields in project row:
    * `{name}` — project name
    * `{code}` — project code
    * `{clientId}` — client/counteragent id
11. Click on **Save** button in project row
12. Edited data in project fields should have updated

### Data type

* `{name}` — string with length <=50
* `{code}` — string with length <=50
* `{clientId}` — drop-down list