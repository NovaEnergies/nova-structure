Project edit cancel test case

## It should cancel project edit:

### Preconditions

1. Open [Nova Structure]()
2. Repeat steps 2-6 from [login_valid_data](login_valid_data.md)
3. Url should be `/#/` - Home page

### Steps

1. Click **System configuration** item in navigation panel
2. Click **Projects** item in navigation panel
3. Url should be `/#/projects/` - Projects page
4. Page should have projects table
5. Click on **Edit** button in project row
6. Project row should have **Save** and **Cancel** buttons
7. Edit data in next fields in project row:
    * `{name}` — project name
    * `{code}` — project code
    * `{clientId}` — client/counteragent id
8. Click on **Cancel** button in project row
9. Edited data in project fields should be restored to initial

### Data type

* `{name}` — string with length <=50
* `{code}` — string with length <=50
* `{clientId}` — drop-down list