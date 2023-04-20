Project add test case

## It should do project add:

### Preconditions

1. Open [Nova Structure]()
2. Repeat steps 2-7 from [login_valid_data](login_valid_data.md)
3. Url should be `/#/` - Home page

### Steps

4. Click **System configuration** item in navigation panel
5. Click **Projects** item in navigation panel
6. Url should be `/#/projects/` - Projects page
7. Page should have projects table
8. Click on **Add** button in projects table
9. Empty project row should be visible in projects table
10. Fill next fields in project row:
    * `{name}` — project name
    * `{code}` — project code
    * `{clientId}` — client/counteragent id
11. Click on **Save** button in project row
12. New project row should be added in projects table
13. Empty project row should be hidden in projects table

### Data type

* `{name}` — string with length <=50
* `{code}` — string with length <=50
* `{clientId}` — drop-down list
