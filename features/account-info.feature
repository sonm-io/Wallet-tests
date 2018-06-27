@accountinfo
Feature: Account Info

  Scenario: Account - Redirect to History Page
    Given Login to wallet "with3accounts" with password "1" with Three Accounts
    Then Accounts page is displayed
    When Click the Account's address "0x9bb7510dfce448af7b3588291ca8b1362e19d250"
    Then Account Detail page is displayed
    When Click the View Operation History
    Then History page is displayed with Account Name "Some Account" in Header
    And Account address is "0x9bb7510dfce448af7b3588291ca8b1362e19d250"

  Scenario: Account - Redirect to Send Ether Page
    Given Login to wallet "with3accounts" with password "1" with Three Accounts
    Then Accounts page is displayed
    When Click the Account's address "0x9bb7510dfce448af7b3588291ca8b1362e19d250"
    Then Account Detail page is displayed
    And Account address is "0x9bb7510dfce448af7b3588291ca8b1362e19d250"
    When Click the Send Ethereum button
    Then Send page is displayed

  Scenario: Account - Redirect to Send Sonm Page
    Given Login to wallet "with3accounts" with password "1" with Three Accounts
    Then Accounts page is displayed
    When Click the Account's address "0x9bb7510dfce448af7b3588291ca8b1362e19d250"
    Then Account Detail page is displayed
    And Account address is "0x9bb7510dfce448af7b3588291ca8b1362e19d250"
    When Click the Send Sonm button
    Then Send page is displayed

  Scenario: Account - Get SONM test Tokens - Incorrect Account password
    Given Login to wallet "with3accounts" with password "1" with Three Accounts
    Then Accounts page is displayed
    When Click the Account's address "0x8f890bb038859234db3f397bb2474713defee42c"
    Then Account Detail page is displayed
    And Account address is "0x8f890bb038859234db3f397bb2474713defee42c"
    When Click the Give me SONM tokens! button
    Then Alert "Required parameter missed" is displayed
    And Close Alert Message
    And Fill in the Account Password field for request tokens "1"
    When Click the Give me SONM tokens! button
    Then Alert "SNM delivery delayed cause: Password is not valid" is displayed

  Scenario: Account - Switching Accounts
    Given Login to wallet "with3accounts" with password "1" with Three Accounts
    Then Accounts page is displayed
    When Click the Account's address "0x8f890bb038859234db3f397bb2474713defee42c"
    Then Account Detail page is displayed
    And Account address is "0x8f890bb038859234db3f397bb2474713defee42c"
    When Select Account "Some Account" from Accounts Dropdown
    Then Account Detail page is displayed
    And Account address is "0x9bb7510dfce448af7b3588291ca8b1362e19d250"