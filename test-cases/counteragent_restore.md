Counteragent restore test case

## It should do counteragent restore:

### Preconditions

1. Open [Nova Structure]()
2. Repeat steps 2-6 from [login_valid_data](login_valid_data.md)
3. Url should be `/#/` - Home page

### Steps

1. Click **System configuration** item in navigation panel
2. Click **Counteragents** item in navigation panel
3. Url should be `/#/counteragents/` - Counteragents page
4. Page should have counteragents table
5. Click on **Show archived** checkbox (checked state) in counteragents table
6. Archived counteragents should be visible in counteragents table
7. Archived counteragent row should have **Restore** button
8. Click on **Restore** button in archived counteragent row
9. Click on **Show archived** checkbox (unchecked state) in counteragents table
10. Restored counteragent should be visible in counteragents table