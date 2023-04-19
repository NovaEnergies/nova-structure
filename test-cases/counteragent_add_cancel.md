Counteragent add cancel test case

## It should cancel counteragent add:

### Preconditions

1. Open [Nova Structure]()
2. Repeat steps 2-6 from [login_valid_data](login_valid_data.md)
3. Url should be `/#/` - Home page

### Steps

1. Click **System configuration** item in navigation panel
2. Click **Counteragents** item in navigation panel
3. Url should be `/#/counteragents/` - Counteragents page
4. Page should have counteragents table
5. Click on **Add** button in counteragents table
6. Empty counteragent row should be visible in counteragents table
7. Fill next fields in counteragent row:
   * `{name}` — company name
   * `{code}` — counteragent code
   * `{type}` — counteragent type
   * `{mnemo}` — counteragent mnemonics
8. Click on **Cancel** button in counteragent row
9. New counteragent row should be hidden in counteragents table

### Data type

* `{name}` — string with length <=50
* `{code}` — string with length <=50
* `{type}` — drop-down list
* `{mnemo}` — string with length <=50