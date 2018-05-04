@send
Feature: Send

  Scenario: Send snm to address without 0x
    Given Login to wallet "oneAccount" with password "11111111"
    And Navigate to Send page
    When Account "one-account" is selected From Accounts dropdown
    And Fill Send To Address field "233a526fb4b4b96809432b17d39309bae0a1513d"
    And Fill Amount field "123"
    And Select currency "SONM"
    And Click the Next button
    Then Transfer Confirmation page is displayed
    And Account From Name is "one-account" and Address is "0x53b14178576e5597a0ab529ba8ba46166599c3af" is displayed
    And Account to is equal to "233a526fb4b4b96809432b17d39309bae0a1513d"
    And Amount is equal to "123 SNM"
    And Gas limit is equal to "defaultGasLimit"
    When Fill Account Password field "11111111"
    And Click the Send button
    Then Transaction Completed page is displayed
    And Notification contained text "123 SNM has been sent to the address" is displayed
    And Close Notification

  Scenario: Send ethereum to address without 0x
    Given Login to wallet "oneAccount" with password "11111111"
    And Navigate to Send page
    When Account "one-account" is selected From Accounts dropdown
    And Fill Send To Address field "233a526fb4b4b96809432b17d39309bae0a1513d"
    And Fill Amount field "321"
    And Select currency "Ethereum"
    And Click the Next button
    Then Transfer Confirmation page is displayed
    And Account From Name is "one-account" and Address is "0x53b14178576e5597a0ab529ba8ba46166599c3af" is displayed
    And Account to is equal to "233a526fb4b4b96809432b17d39309bae0a1513d"
    And Amount is equal to "321 Ether"
    And Gas limit is equal to "defaultGasLimit"
    When Fill Account Password field "11111111"
    And Click the Send button
    Then Transaction Completed page is displayed
    And Notification contained text "321 Ether has been sent to the address" is displayed
    And Close Notification

  Scenario: Send ethereum to address with 0x
    Given Login to wallet "oneAccount" with password "11111111"
    And Navigate to Send page
    When Account "one-account" is selected From Accounts dropdown
    And Fill Send To Address field "0x233a526fb4b4b96809432b17d39309bae0a1513d"
    And Fill Amount field "132"
    And Select currency "Ethereum"
    And Click the Next button
    Then Transfer Confirmation page is displayed
    And Account From Name is "one-account" and Address is "0x53b14178576e5597a0ab529ba8ba46166599c3af" is displayed
    And Account to is equal to "0x233a526fb4b4b96809432b17d39309bae0a1513d"
    And Amount is equal to "132 Ether"
    And Gas limit is equal to "defaultGasLimit"
    When Fill Account Password field "11111111"
    And Click the Send button
    Then Transaction Completed page is displayed
    And Notification contained text "132 Ether has been sent to the address" is displayed
    And Close Notification

  Scenario: Send ethereum to address from account page
    Given Login to wallet "oneAccount" with password "11111111"
    When Open Account "one-account" details
    And Click the Send Ethereum button
    Then Send page is displayed
    And Selected Currency "Ethereum" is displayed
    When Fill Send To Address field "0x233a526fb4b4b96809432b17d39309bae0a1513d"
    And Fill Amount field "312"
    And Click the Next button
    Then Transfer Confirmation page is displayed
    And Account From Name is "one-account" and Address is "0x53b14178576e5597a0ab529ba8ba46166599c3af" is displayed
    And Account to is equal to "0x233a526fb4b4b96809432b17d39309bae0a1513d"
    And Amount is equal to "312 Ether"
    And Gas limit is equal to "defaultGasLimit"
    When Fill Account Password field "11111111"
    And Click the Send button
    Then Transaction Completed page is displayed
    And Notification contained text "312 Ether has been sent to the address" is displayed
    And Close Notification

  Scenario: Send snm to address from account page
    Given Login to wallet "oneAccount" with password "11111111"
    When Open Account "one-account" details
    And Click the Send Sonm button
    Then Send page is displayed
    And Selected Currency "SONM" is displayed
    When Fill Send To Address field "0x233a526fb4b4b96809432b17d39309bae0a1513d"
    And Fill Amount field "313"
    And Click the Next button
    Then Transfer Confirmation page is displayed
    And Account From Name is "one-account" and Address is "0x53b14178576e5597a0ab529ba8ba46166599c3af" is displayed
    And Account to is equal to "0x233a526fb4b4b96809432b17d39309bae0a1513d"
    And Amount is equal to "313 SNM"
    And Gas limit is equal to "defaultGasLimit"
    When Fill Account Password field "11111111"
    And Click the Send button
    Then Transaction Completed page is displayed
    And Notification contained text "313 SNM has been sent to the address" is displayed
    And Close Notification

  Scenario: Send - Validate Send To Address field
    Given Login to wallet "with3accounts" with password "1" with Three Accounts
    And Navigate to Send page
    And Account "Some Account" is selected From Accounts dropdown
    And Fill Send To Address field "0x9bb7510dfce448af7b3588291ca8b1362e19d250"
    Then Send To Address validation error message "The destination address must differ the sender address" is displayed
    When Account "Test Account" is selected From Accounts dropdown
    Then Send To Address validation message in not displayed
    When Account "Some Account" is selected From Accounts dropdown
    Then Send To Address validation error message "The destination address must differ the sender address" is displayed

  Scenario: Send - Send Maximum Ether
    Given Login to wallet "with3accounts" with password "1" with Three Accounts
    And Navigate to Send page
    When Account "Token Account" is selected From Accounts dropdown
    And Fill Send To Address field "a62ce519e29976d340790e2e61058346506b8ac1"
    When Click the Add Maximum button
    Then Amount field is equal to "9.9792"
    And Click the Next button
    Then Transfer Confirmation page is displayed
    And Account From Name is "Token Account" and Address is "0x8f890bb038859234db3f397bb2474713defee42c" is displayed
    And Account to is equal to "a62ce519e29976d340790e2e61058346506b8ac1"
    And Amount is equal to "9.9792 Ether"
    And Gas limit is equal to "defaultGasLimit"
    When Fill Account Password field "11111111"
    And Click the Send button
    Then Transaction Completed page is displayed
    And Notification contained text "9.9792 Ether has been sent to the address" is displayed
    And Close Notification
    And Navigate to Accounts page
    When Accounts page is displayed
    Then Account's "Test Account" Ether value is "76509.98"
    Then Account's "Token Account" Ether value is "0.0195"

  Scenario: Send - Send Maximum Sonm
    Given Login to wallet "with3accounts" with password "1" with Three Accounts
    And Navigate to Send page
    When Account "Test Account" is selected From Accounts dropdown
    And Fill Send To Address field "0x9bb7510dfce448af7b3588291ca8b1362e19d250"
    And Select currency "SONM"
    When Click the Add Maximum button
    Then Amount field is equal to "1000"
    And Click the Next button
    Then Transfer Confirmation page is displayed
    And Account From Name is "Test Account" and Address is "0xa62ce519e29976d340790e2e61058346506b8ac1" is displayed
    And Account to is equal to "0x9bb7510dfce448af7b3588291ca8b1362e19d250"
    And Amount is equal to "1000 SNM"
    And Gas limit is equal to "defaultGasLimit"
    When Fill Account Password field "11111111"
    And Click the Send button
    Then Transaction Completed page is displayed
    And Notification contained text "1000 SNM has been sent to the address" is displayed
    And Close Notification
    And Navigate to Accounts page
    When Accounts page is displayed
    Then Account's "Some Account" Sonm value is "2000.0000"
    Then Account's "Test Account" Ether value is "76499.9995"
    Then Account's "Test Account" Sonm value is "0"

  Scenario: Send - Validate input fields
    Given Login to wallet "with3accounts" with password "1" with Three Accounts
    And Navigate to Send page
    And Account "Token Account" is selected From Accounts dropdown
    When Fill Send To Address field "#%#$lalala"
    Then Send To Address validation error message "Please input correct address" is displayed
    When Fill Amount field "!@#erfdf"
    Then Amount validation error message "Should be positive number" is displayed
    When Fill Gas Limit field "!№4#%#%"
    Then Gas Limit validation error message is displayed

  Scenario: Send - Send eth value more than account has
    Given Login to wallet "with3accounts" with password "1" with Three Accounts
    And Navigate to Send page
    And Account "Test Account" is selected From Accounts dropdown
    And Fill Send To Address field "0x8f890bb038859234db3f397bb2474713defee42c"
    When Fill Amount field "76510"
    Then Amount validation error message "Value is greater than maximum" is displayed

  Scenario: Send - Send Eth min value 0.000000000000000001
    Given Login to wallet "with3accounts" with password "1" with Three Accounts
    And Navigate to Send page
    And Account "Test Account" is selected From Accounts dropdown
    And Fill Send To Address field "0x8f890bb038859234db3f397bb2474713defee42c"
    And Fill Amount field "0.000000000000000001"
    When Click the Next button
    Then Transfer Confirmation page is displayed
    And Account From Name is "Test Account" and Address is "0xa62ce519e29976d340790e2e61058346506b8ac1" is displayed
    And Account to is equal to "0x8f890bb038859234db3f397bb2474713defee42c"
    And Amount is equal to "0.000000000000000001 Ether"
    And Gas limit is equal to "defaultGasLimit"
    When Fill Account Password field "11111111"
    And Click the Send button
    Then Transaction Completed page is displayed
    And Notification contained text "0.000000000000000001 Ether has been sent to the address" is displayed
    And Close Notification
    And Navigate to Accounts page
    When Accounts page is displayed
    Then Account's "Test Account" Ether value is "76499.9991"
    Then Account's "Token Account" Ether value is "9.9992"

  Scenario: Send - Send SONM min value 0.000000000000000001
    Given Login to wallet "with3accounts" with password "1" with Three Accounts
    And Navigate to Send page
    And Account "Token Account" is selected From Accounts dropdown
    And Fill Send To Address field "0x9bb7510dfce448af7b3588291ca8b1362e19d250"
    And Select currency "SONM"
    And Fill Amount field "0.000000000000000001"
    When Click the Next button
    Then Transfer Confirmation page is displayed
    And Account From Name is "Token Account" and Address is "0x8f890bb038859234db3f397bb2474713defee42c" is displayed
    And Account to is equal to "0x9bb7510dfce448af7b3588291ca8b1362e19d250"
    And Amount is equal to "0.000000000000000001 SNM"
    And Gas limit is equal to "defaultGasLimit"
    When Fill Account Password field "11111111"
    And Click the Send button
    Then Transaction Completed page is displayed
    And Notification contained text "0.000000000000000001 SNM has been sent to the address" is displayed
    And Close Notification
    And Navigate to Accounts page
    When Accounts page is displayed
    Then Account's "Token Account" Sonm value is "999.9999"
    Then Account's "Some Account" Sonm value is "2000.0000"

  Scenario: Send - Enter incorrect account password
    Given Login to wallet "oneAccount" with password "11111111"
    And Navigate to Send page
    When Account "one-account" is selected From Accounts dropdown
    And Fill Send To Address field "233a526fb4b4b96809432b17d39309bae0a1513d"
    And Fill Amount field "123"
    And Select currency "SONM"
    And Click the Next button
    Then Transfer Confirmation page is displayed
    And Account From Name is "one-account" and Address is "0x53b14178576e5597a0ab529ba8ba46166599c3af" is displayed
    And Account to is equal to "233a526fb4b4b96809432b17d39309bae0a1513d"
    And Amount is equal to "123 SNM"
    And Gas limit is equal to "defaultGasLimit"
    And Fill Account Password field "1111111"
    When Click the Send button
    Then Account Password validation error message is displayed

  Scenario: Send - Transfer Confirmation - Cancel entering Account password
    Given Login to wallet "oneAccount" with password "11111111"
    And Navigate to Send page
    When Account "one-account" is selected From Accounts dropdown
    And Fill Send To Address field "233a526fb4b4b96809432b17d39309bae0a1513d"
    And Fill Amount field "123"
    And Select currency "SONM"
    And Click the Next button
    Then Transfer Confirmation page is displayed
    And Account From Name is "one-account" and Address is "0x53b14178576e5597a0ab529ba8ba46166599c3af" is displayed
    And Account to is equal to "233a526fb4b4b96809432b17d39309bae0a1513d"
    And Amount is equal to "123 SNM"
    And Gas limit is equal to "defaultGasLimit"
    When Click the Back button
    Then Send page is displayed
    Then Address Send To Address is "233a526fb4b4b96809432b17d39309bae0a1513d"
    Then Amount field is equal to "123"