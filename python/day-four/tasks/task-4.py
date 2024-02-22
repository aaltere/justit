def drawBoard(size):
    for row in range(size):
            for column in range(size):
                print(" ---", end = "")
            print()

            for column in range(size):
                print("|   ", end = "")
            print("|")

    for column in range(size):
        print(" ---", end = "")
    print()


try:
    size = int(input("Enter the board size: "))

except ValueError:
    print("Enter a valid number")

drawBoard(size)

game = []
gameRow = []

for x in range(size):
        
    gameRow.append(0)

for y in range(size):

    game.append(gameRow)

print(game)

win = False

for row in range(size):
    
    counterRow = 0

    initial = game[row][0]
    
    if initial != 0:
        counterRow += 1

    for column in range(size - 1):
        
        if game[row][column + 1] == initial:
            counterRow += 1
    
    if counterRow == size:

        win = True

for column in range(size):
    
    counterColumn = 0

    initial = game[0][column]
    
    if initial != 0:
        counterColumn += 1

    for row in range(size - 1):
        
        if game[row + 1][column] == initial:
            counterColumn += 1
    
    if counterColumn == size:

        win = True

if not win:

    counterDiagonalR = 0
    counterDiagonalL = 0

    initialL = game[0][0]
    initialR = game[0][size - 1]

    if initialR != 0:
        counterDiagonalR += 1

    if initialL != 0:
        counterDiagonalL += 1

    for row in range(1, size):

        if game[row][row] == initialR:
            counterDiagonalR += 1

        if game[row][size - (row + 1)] == initialL:
            counterDiagonalL += 1

if win:
    print("Win")
else:
    print("Lose")