Feature: Testing the Quick Start Guide

    Scenario: Viewing the Quick Start Page
        Given the site is open
        And the css path ".toolbar" contains "Welcome"
        Then the css path ".content" contains "Angular Pipeline-Driven-Development app is running"
        And the css path ".content pre" contains "ng generate component xyz"
