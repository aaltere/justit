# template literals

# / - division return float - you would use when you want to find the answer of num1 divided by num2
# // - divison return whole integer - when you only want to whole number of num1 divided by num2
# % - division return remainder - you'd do this when you want to find the remainder of num1 divided by num2

num1 = 10
num2 = 5

print(num1 == 10 and num2 == 5) # true
print(num1 == 10 and num2 == 50) # false
print(num1 == 15 and num2 == 5) # false

print(num1 == 10 or num2 == 5) # true
print(num1 == 10 and num2 == 50) # true
print(num1 == 15 and num2 == 5) # true

print(not(num1 == 10)) # false

print(not(num1 == 10 or num2 == 5)) # false
print(not(num1 == 10 or num2 == 50)) # false
print(not(num1 == 15 or num2 == 5)) # false

print(not(num1 == 10 and num2 == 5)) # false
print(not(num1 == 10 and num2 == 50)) # true
print(not(num1 == 15 and num2 == 5)) # true

# no () around the condition and using : to end it
# no {} but it is one line so technically not required even for js
# indentation for the nested statements

score = 26
userNum = 25

if userNum == score:
    print("You win!")
else:
    print("You lose!")

pStudy = input("Enter your program of study: ").title()
curProgram = "Bootcamp"

if pStudy != curProgram:
    print("That is not the current program")
else:
    print("That is the current program")

num1 = int(input("Please enter an integer: "))
num2 = int(input("Please enter another integer: "))

if num1 < num2:
    print(f"{num1} is smaller than {num2}")
else:
    print(f"{num2} is smaller than {num1}")

password = "password1234"
userPassword = input("Please enter the password: ")

if userPassword == password:
    print("Logged In")
else:
    print("Not Logged In")

print()
print("Please select a subject:")
print("m - Maths")
print("s - Science")
print("e - English")
print("q - Quit")

menuOption = input(": ").lower()

if menuOption == "m":
    print("You have selected Maths")
elif menuOption == "s":
    print("You have selected Science")
elif menuOption == "s":
    print("You have selected English")
elif menuOption == "q":
    print("Exiting...")
else:
    print("Invalid option")