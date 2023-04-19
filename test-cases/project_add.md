Project add test case

## It should do project add:

### Preconditions

1. Open [Nova Structure]()
2. Repeat steps 2-6 from [login_valid_data](login_valid_data.md)
3. Url should be `/#/` - Home page

### Steps

1. Click **System configuration** item in navigation panel
2. Click **Projects** item in navigation panel
3. Url should be `/#/projects/` - Projects page
4. Page should have projects table
5. Click on **Add** button in projects table
6. Empty project row should be visible in projects table
7. Fill next fields in project row:
    * `{name}` — project name
    * `{code}` — project code
    * `{clientId}` — client/counteragent id
8. Click on **Save** button in project row
9. New project row should be added in projects table
10. Empty project row should be hidden in projects table

### Data type

* `{name}` — string with length <=50
* `{code}` — string with length <=50
* `{clientId}` — drop-down list
