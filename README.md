# Pod with a View's Pizza Parlor

![Mmmm pizza](https://media1.giphy.com/media/4ayiIWaq2VULC/giphy.gif)
![Let's-a go to the Pizza Parlor!](https://media3.giphy.com/media/XRNiyGKFYw5UbcRFpL/giphy.gif)

## Description

Welcome to Prime Pizza! In this app, you can add pizzas to your cart, then checkout. The total cost of your cart is displayed on the header at all times.

## Prerequisites

- Node (dependencies are installed using npm install)
- Postgres
- Postico

## Installation

1. Clone this repo.
2. Ensure that Postgres is running.
3. Using Postico, create a database named `pizza_parlor`
4. To set up the tables, follow the instructions in `database.sql`
5. Navigate to the cloned repo in the terminal.
6. Run `npm install` to install all dependencies.
7. Run `npm run server`
8. Run `npm run client` in another tab. This automatically opens the app in your browser.


## Usage

1. You start in the home page, which displays a list of all items available for purchase. 
    - Select the Add button to add an item to your cart.
    - At any time, you can check the total cost of your purchase in the top right corner.
    - When you are finished adding items to your cart, select the Next button.
2. In the Customer Information screen, fill out the entire form with the correct information.
    - Input name, street address, city, and ZIP code in their respective fields.
    - Select 'Pickup' or 'Delivery'.
    - Ensure that all fields are filled out correctly.
    - Upon completing the form, select the Next button.
3. In the Checkout screen, confirm that all the information displayed is correct.
    - If all the information is correct, and you are ready to submit your order, select the Checkout button.
4. Enjoy your pizza!

## Acknowledgments

Thank you to Prime Academy, our instructors, the Shawl cohort, and everyone on the Pod with a View team!

Project instructions are [here!](INSTRUCTIONS.md)
