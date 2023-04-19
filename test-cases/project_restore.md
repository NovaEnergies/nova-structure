Project restore test case

## It should do project restore:

### Preconditions

1. Open [Nova Structure]()
2. Repeat steps 2-6 from [login_valid_data](login_valid_data.md)
3. Url should be `/#/` - Home page

### Steps

1. Click **System configuration** item in navigation panel
2. Click **Projects** item in navigation panel
3. Url should be `/#/projects/` - Projects page
4. Page should have projects table
5. Click on **Show archived** checkbox (checked state)
6. Archived projects should be visible in projects table
7. Archived project row should have **Restore** button
8. Click on **Restore** button in archived project row
9. Click on **Show archived** checkbox (unchecked state)
10. Restored project should be visible in projects table