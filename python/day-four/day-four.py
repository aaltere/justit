import importTest

def addition(num1, num2):
    answer = num1 + num2
    print(f"The answer to {num1} + {num2} = {answer}")

addition(3, 6)

# define subroutine
def subtraction():
    # take user input and assign them to num1 and num2
    num1 = int(input("Enter your first number: "))
    num2 = int(input("Enter your second number: "))

    # assign num1 - num2 to answer
    answer = num1 - num2

    # print the result
    print(f"The answer to {num1} - {num2} = {answer}")

name = input("What is your name: ")

def userName(name):
    print("Your name is: ", name)

userName(name)

importTest.main()