fname = input("Enter you full name: ")
address = input("Enter your address: ")
interest = input("Enter your interest: ")
age = int(input("Enter your age: "))

"Make"
"To Do: Task 1: Use the code above to ask for user input and then save it to a file called userDetails.txt"

with open("python/week-10/Pt7_FilesDictsCodeBase2024/user-details.txt", "a") as filePath:
    content = f"{fname}\n{address}\n{interest}\n{age}"
    filePath.write(content)


"Further reading"
# https://www.w3schools.com/python/python_file_handling.asp