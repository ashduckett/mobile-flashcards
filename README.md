# Mobile Flashcards

## Intro
This application was built using React native. Its purpose is to act as a flashcards memory aid for those learning something. It will allow the user to create a deck to which they can
add a new card where each card represents a question. The user can view the answer and then mark in the system whether or not they got the question correct. A total score is taken
and on reaching the end of the deck, the user can view the percentage of correct answers they got for their current deck.

## Installation of the Application
To begin with, ensure you have both git and NPM installed. You will also need Android Studio to run this application. Clone this repository
onto your desktop. `cd` into the project folder. Start Android Studio and then fire up the basic project provided for you. Close this project. Next run the command `npm run android` from inside your project folder. You should eventually see the app running inside the simulator.

## Running the Application
### The Initial Screen
Initially you'll see a tabbed view. The tab on the left allows you to see all of the decks added to the system. The tab on the right allows you to create a new one.
### Creating a New Deck
In order to create a new deck, select the New Deck tab. It's there that you'll be able to enter a name of your deck and then hitting submit will take you to a detail view of your deck.
### Deck Detail
The Deck Detail view allows you to see a few things, such as how many cards are in your deck, and your deck's name. You can get to this screen either immediately after creating a deck, or you can do it from the initial Deck list view that you see on starting the app. It is
also from the Deck Detail View that you can start a new Quiz.
### Starting a Quiz
Whilst in the Deck Detail View, you have the option to start a new quiz. Once you're in the quiz view, you'll see a question. It is at this point that you can make a guess. If you then hit the answer button, you'll be able to see if you were correct or not. If you were, then you should hit the correct button, if you were not, then you should hit the incorrect button. In either case, you'll be taken to the next question in your selected deck. Once you reach the end of that deck, you'll be presented with a score as a percentage and you'll also
be able to either go back to the deck list, or start the quiz again to see if you do any better!