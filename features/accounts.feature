@account
Feature: Account

  Scenario: Account - Creating new account
    Given Login to wallet "emptyWallet" with password "11111111"
    Then Accounts page is displayed
    When Click the Create Account button
    Then Create New Account dialogue is displayed
    When Fill Create New Account Name field "asda"
    And Fill Create New Account Password field "asdaasda"
    And Fill Create New Account Password Confirmation field "asdaasda"
    And Click the Create button
    Then Account "asda" is present in Accounts list

  Scenario: Account - Creating new account from private key
    Given Login to wallet "emptyWallet" with password "11111111"
    Then Accounts page is displayed
    When Click the Create Account button
    Then Create New Account dialogue is displayed
    When Fill Create New Account Name field "from privateKey"
    And Fill Create New Account Password field "asdaasda"
    And Fill Create New Account Password Confirmation field "asdaasda"
    And Fill Create New Account Private Key field "b7bacfa65397ea40b67608bf0d2b93da9bf807a4fde55f122922db2373e7f432"
    And Click the Create button
    Then Account "from privateKey" is present in Accounts list with hash "0x3195198151a456f59d39ce95dd302c5b2d034bff"

  Scenario: Account - Creating new account - Cancel
    Given Login to wallet "emptyWallet" with password "11111111"
    Then Accounts page is displayed
    When Click the Create Account button
    Then Create New Account dialogue is displayed
    When Fill Create New Account Name field "asda"
    And Fill Create New Account Password field "asdaasda"
    And Fill Create New Account Password Confirmation field "asdaasda"
    And Fill Create New Account Private Key field "b7bacfa65397ea40b67608bf0d2b93da9bf807a4fde55f122922db2373e7f432"
    And Close Create New Account dialogue
    Then Account "asda" was not created
    When Click the Create Account button
    Then Create New Account dialogue is displayed
    And All Create New Account fields are empty

  Scenario: Account - Creating new account - fields validation
    Given Login to wallet "emptyWallet" with password "11111111"
    Then Accounts page is displayed
    When Click the Create Account button
    Then Create New Account dialogue is displayed
    When Click the Create button
    Then Create New Account Name field validation error message is displayed
    And Create New Account Password field validation error message "Password is required" is displayed
    And Fill Create New Account Name field "test"
    And Fill Create New Account Password field "1"
    When Click the Create button
    Then Create New Account Password field validation error message "Password must be at least 8 character" is displayed
    And Create New Account Password Confirmation field validation error message is displayed
    And Clear Create New Account Password field
    And Fill Create New Account Password field "12345678"
    And Fill Create New Account Password Confirmation field "12345678"
    When Click the Create button
    Then Account "test" is present in Accounts list

  Scenario: Account - Editing Account name
    Given Login to wallet "with2accounts" with password "1" with Two Accounts
    Then Accounts page is displayed
    And Click the Edit Account button next to "Test Account" Name
    And Clear Account Name field
    And Fill Account "Test Account" Name field with new "Edit Account" Name
    When Press ENTER button
    Then Account Name is "Edit Account" is present in Accounts list

  Scenario: Account - Editing Account name - Empty name
    Given Login to wallet "with2accounts" with password "1" with Two Accounts
    Then Accounts page is displayed
    And Click the Edit Account button next to "Test Account" Name
    And Clear Account Name field
    When Press ENTER button
    Then Account Name is "Test Account" is present in Accounts list

  Scenario: Account - Delete Account
    Given Login to wallet "with2accounts" with password "1" with Two Accounts
    Then Accounts page is displayed
    When Click the Delete Account button next to "Some Account" Name
    Then Delete Account dialogue is displayed
    And Account "Some Account" Name for Delete is correct
    When Click the Delete Account button
    Then Account "Some Account" is not present in Accounts list

  Scenario: Account - Delete Account - Cancel
    Given Login to wallet "with2accounts" with password "1" with Two Accounts
    Then Accounts page is displayed
    When Click the Delete Account button next to "Some Account" Name
    Then Delete Account dialogue is displayed
    And Account "Some Account" Name for Delete is correct
    When Click the Cancel Delete Account button
    Then Account Name is "Some Account" is present in Accounts list

  Scenario: Account - Verify Ether/Sonm values and sum
    Given Login to wallet "with2accounts" with password "1" with Two Accounts
    Then Accounts page is displayed
    And Account's "Some Account" Ether value is "76500"
    And Account's "Some Account" Sonm value is "10000"
    And Account's "Test Account" Ether value is "76500"
    And Account's "Test Account" Sonm value is "10000"
    And Total Ether value is "153000"
    And Total SONM value is "20000"

  Scenario: Account - View Private Key
    Given Login to wallet "with2accounts" with password "1" with Two Accounts
    Then Accounts page is displayed
    When Click the Show Private Key button next to "Some Account" Name
    Then Show Private Key dialogue is displayed
    And Fill Show Private Key Password field "11111111"
    When Click the Show button
    Then Private Key "285a745c8179f9771946b1d35449534eb25594aec8b2e694550d7bac64" is displayed

  Scenario: Account - Validate Private Key
    Given Login to wallet "with2accounts" with password "1" with Two Accounts
    Then Accounts page is displayed
    When Click the Show Private Key button next to "Some Account" Name
    Then Show Private Key dialogue is displayed
    When Click the Show button
    Then Private Key Password validation error message is displayed
    And Fill Show Private Key Password field "1"
    When Click the Show button
    Then Private Key Password validation error message is displayed

  Scenario: Account - Redirect to Account Detail
    Given Login to wallet "with2accounts" with password "1" with Two Accounts
    Then Accounts page is displayed
    When Click the Account's address "0x9bb7510dfce448af7b3588291ca8b1362e19d250"
    Then Account Detail page is displayed