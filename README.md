# Banking Page

This is a simple web page that simulates a banking site. Users can deposit and withdraw money, and the page displays the current balance and transaction history.

## Usage

To use the banking page, follow these steps:

1. Clone the repository or download the HTML file.

2. Open the HTML file in a web browser.

3. The page will display the current balance, deposit amount, and withdrawal amount.

4. To make a deposit, enter the desired amount in the "Deposit" input field and click the "Deposit" button.

5. To make a withdrawal, enter the desired amount in the "Withdraw" input field and click the "Withdraw" button.

6. The page will update the total deposit, total withdrawal, and current balance accordingly.

## Technologies Used

This project uses the following technologies:

- HTML: The structure and layout of the web page.
- CSS (Tailwind CSS): Provides styling and design to the elements.
- JavaScript: Implements the functionality of deposit and withdrawal operations.

## Code Overview

The code consists of three sections: HTML, CSS (Tailwind CDN link), and JavaScript.

- HTML: Defines the structure of the web page, including headings, sections, and input elements.

- CSS (Tailwind CSS): The Tailwind CSS CDN link is included in the head section to provide pre-defined styles and classes for the elements on the page.

- JavaScript: The script tag at the bottom of the body includes the JavaScript code responsible for the deposit and withdrawal functionality. It also includes helper functions to get input values, update the total balance, and retrieve the current balance.

## Functionality

- Deposit: When the "Deposit" button is clicked, the JavaScript code retrieves the deposit amount from the input field and updates the total deposit and total balance accordingly.

- Withdrawal: When the "Withdraw" button is clicked, the JavaScript code retrieves the withdrawal amount from the input field and updates the total withdrawal and total balance accordingly, as long as the withdrawal amount is valid (greater than 0 and less than the current balance).

## Contributing

Contributions to this project are welcome. If you have any suggestions or improvements, feel free to create an issue or submit a pull request.
