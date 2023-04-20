Counteragent edit test case

## It should do counteragent edit:

### Preconditions

1. Open [Nova Structure]()
2. Repeat steps 2-7 from [login_valid_data](login_valid_data.md)
3. Url should be `/#/` - Home page

### Steps

4. Click **System configuration** item in navigation panel
5. Click **Counteragents** item in navigation panel
6. Url should be `/#/counteragents/` - Counteragents page
7. Page should have counteragents table
8. Click on **Edit** button in counteragent row
9. Counteragent row should have **Save** and **Cancel** buttons
10. Edit data in next fields in counteragent row:
    * `{name}` — company name
    * `{code}` — counteragent code
    * `{type}` — counteragent type
    * `{mnemo}` — counteragent mnemonics
11. Click on **Save** button in counteragent row
12. Edited data in counteragent fields should have updated

### Data type

* `{name}` — string with length <=50
* `{code}` — string with length <=50
* `{type}` — drop-down list
* `{mnemo}` — string with length <=50