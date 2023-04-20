Project restore test case

## It should do project restore:

### Preconditions

1. Open [Nova Structure]()
2. Repeat steps 2-7 from [login_valid_data](login_valid_data.md)
3. Url should be `/#/` - Home page

### Steps

4. Click **System configuration** item in navigation panel
5. Click **Projects** item in navigation panel
6. Url should be `/#/projects/` - Projects page
7. Page should have projects table
8. Click on **Show archived** checkbox (checked state)
9. Archived projects should be visible in projects table
10. Archived project row should have **Restore** button
11. Click on **Restore** button in archived project row
12. Click on **Show archived** checkbox (unchecked state)
13. Restored project should be visible in projects table