Counteragent restore test case

## It should do counteragent restore:

### Preconditions

1. Open [Nova Structure]()
2. Repeat steps 2-7 from [login_valid_data](login_valid_data.md)
3. Url should be `/#/` - Home page

### Steps

4. Click **System configuration** item in navigation panel
5. Click **Counteragents** item in navigation panel
6. Url should be `/#/counteragents/` - Counteragents page
7. Page should have counteragents table
8. Click on **Show archived** checkbox (checked state) in counteragents table
9. Archived counteragents should be visible in counteragents table
10. Archived counteragent row should have **Restore** button
11. Click on **Restore** button in archived counteragent row
12. Click on **Show archived** checkbox (unchecked state) in counteragents table
13. Restored counteragent should be visible in counteragents table