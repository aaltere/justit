def user():
    return "Peter"

def userName():
    name = input("What is your name: ")

    return name

def addition(num1, num2):
    return num1 + num2

if __name__ == "__main__":
    print(f"Your username is {userName()}")

    num1 = int(input("Enter your first number: "))
    num2 = int(input("Enter your second number: "))

    print(f"The answer to {num1} + {num2} is {addition(num1, num2)}")