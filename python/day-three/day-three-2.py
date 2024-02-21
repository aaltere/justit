# import datetime

# try:
#     num1 = int(input("Enter your first number: "))
#     num2 = int(input("Enter your second number: "))
#     answer = num1 + num2
#     print(f"The answer ro {num1} + {num2} is {answer}")

# except Exception as e:
#     print(e)

# print("None while loop output")
# dateTime = datetime.datetime.now()
# print(dateTime.strftime("%H:%M:%S"))

# print("while loop output")
# infinite loop as will always be true
# while True:
    # strftime returns a string of date and time
    # end is the value at the end of the print line and \r returns cursor to the start of the line
    # if end = "\r" is removed then \n (new line) will be used by default therefore the time will
    # be printed on a new line instead of replacing the previous line
    # print(datetime.datetime.now().strftime("%H:%M:%S"), end = "\r")

# numList = [1, 3, 4, 6, 1, 3, 5, 7]

# found = False

# for number in numList:
#     if number == 3:
#         print("Found", number)
#         found = True
#         break

# if not found:
#     print("Number 3 not found in the list")

# modules = ["HTML", "CSS", "JS", "SQL", "Python"]

# for module in modules:
#     if (module == "Python"):
#         print("Python found")
#         break

countries = ["Scotland", "Spain", "England", "Wales", "Brazil", "Argentina", "Italy", "France"]

print("Printed all countries in the terminal")

for country in range(len(countries)):
    print(f"{countries[country]}")

print("\nNot all countries are printed in terminal")
for country in range(3):
    print(f"{countries[country]}")

# first one prints all because the range is the length of the array due to len() function
# second doesn't due to the fact that range is only 5 so only printed index 0 to 4
    
# change 5 to 3 makes the loop print out the country with index 0 to 2 so you get the first 3