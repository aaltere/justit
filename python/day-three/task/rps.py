# Import random library
import random

# Create constant list for computer options
OPTIONS = ["Rock", "Paper", "Scissors"]

# Create score variables for player and computer
userScore = 0
computerScore = 0

# Set replay value, loop the game if it's y
# Set to y by default to start the game once
replay = "y"

while(replay == "y"):

    # Display options and get user input
    print("\nEnter a choice")
    print("r: Rock")
    print("p: Paper")
    print("s: scissors")
    userChoice = input(": ")

    # Loop until user enter an accepted input
    while (userChoice.lower() != "r" and userChoice.lower() != "p" and userChoice.lower() != "s"):
        print("\nPlease enter r, p, or s")
        userChoice = input(": ")

    # Random computer's choice
    computerChoice = random.choice(OPTIONS)

    # Compare the two choices and display message base on who wins
    # Add 1 to winner's total score
    if (userChoice == "r"):
        print("\nYou chose Rock, the computer chose", computerChoice, "\n")

        if (computerChoice == "Rock"):
            print("Both players selected Rock. It's a tie!")
        elif (computerChoice == "Paper"):
            print("Paper covers Rock. You lose!")
            computerScore += 1
        elif (computerChoice == "Scissors"):
            userScore += 1
            print("Rock smashes Scissors. You win!")

    elif (userChoice == "p"):
        print("\nYou chose Paper, the computer chose", computerChoice, "\n")

        if (computerChoice == "Rock"):
            userScore += 1
            print("Paper covers Rock. You win!")
        elif (computerChoice == "Paper"):
            print("Both players selected Paper. It's a tie!")
        elif (computerChoice == "Scissors"):
            computerScore += 1
            print("Scissors cuts paper. You lose!")

    elif (userChoice == "s"):
        print("\nYou chose Scissors, the computer chose", computerChoice, "\n")

        if (computerChoice == "Rock"):
            computerScore += 1
            print("Rock smashes Scissors. You lose!")
        elif (computerChoice == "Paper"):
            userScore += 1
            print("Scissors cuts paper. You win!")
        elif (computerChoice == "Scissors"):
            print("Both players selected Scissors. It's a tie!")

    # Ask user if they want to play again and assign answer to replay value
    print("Play again? (y/n)")
    replay = input(": ")

    # Loop until user enter an accepted input
    while (replay.lower() != "y" and replay.lower() != "n"):
        print("\nPlease input y or n")
        replay = input(": ")

# Print final score after the loop terminated
print("\nFinal Scores:")
print("Computer:", computerScore)
print("Player:", userScore)