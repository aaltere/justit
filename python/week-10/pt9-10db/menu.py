import readsongs, addsongs, updatesongs, deletesongs, reports

def readFile(filePath):

    try:
        with open(filePath) as readFile:
            rf = readFile.read()
            return rf
        
    except FileNotFoundError as e:
        print(f"File not found: {e}")

def songsMenu():
    option = 0
    optionList = ["1", "2", "3", "4", "5", "6"]

    menuChoices = readFile("python/week-10/pt9-10db/menuOptions.txt")

    while option not in optionList:
        
        print()
        print(menuChoices)

        option = input("Enter an option from the menu choices above: ")

        if option not in optionList:
            print(f"{option} is not valid")

    return option

mainProgram = True

while mainProgram:

    menuOption = songsMenu()

    match menuOption:

        case "1":
            readsongs.readSongs()
        case "2":
            addsongs.insertSongs()
        case "3":
            updatesongs.updateSong()
        case "4":
            deletesongs.deleteSong()
        case "5":
            reports.searchSong()
        case _:
            mainProgram = False