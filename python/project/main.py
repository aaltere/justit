# import all oif the functions we have created for the program
import addcontact 
import readcontacts
import updatecontact
import searchcontact
import deletecontact

# create fucntion to read menu file
def readFile(filePath):
    
    try:
        # read file and return object that holds the file
        with open(filePath) as readFile:
            rf = readFile.read()
            return rf
        
    # exception for if file is not found
    except FileNotFoundError as e:
        print(f"File not found: {e}")

# create function for printing and reading input for the main menu
def mainMenu():

    # set default option to 0 to start menu loop
    option = 0
    optionList = ["1", "2", "3", "4", "5", "6"]

    # read the menu file
    menuChoices = readFile("python\project\menu.txt")

    # main loop for printing and taking input for main menu
    while option not in optionList:

        # print menu
        print()
        print(menuChoices)

        # get user input
        option = input("Enter an option from the menu choices above: ")

        # loop if input is not one of the valid ones
        if option not in optionList:
            print(f"{option} is not valid")

    # return the input once a valid option is entered
    return option

# main program loop
mainProgramLoop = True

while mainProgramLoop:

    # set a variable to the menu input function
    menuOption = mainMenu()
    print()

    # match input and execute the appropriate fucntion
    match menuOption:

        case "1":
            readcontacts.readContacts()
        case "2":
            addcontact.addContact()
        case "3":
            updatecontact.updateContact()
        case "4":
            deletecontact.deleteContact()
        case "5":
            searchcontact.searchContact()
        case _:
            mainProgramLoop = False

# exit message
input("Press enter to exit....")