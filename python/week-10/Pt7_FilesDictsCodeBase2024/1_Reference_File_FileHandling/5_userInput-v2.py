fname = input("Enter you full name: ")
address = input("Enter your address: ")
interest = input("Enter your interest: ")
age = int(input("Enter your age: "))

userData = {
    "Fullname": fname,
    "Address": address,
    "Interest": interest,
    "Age": age
}

with open("python/week-10/Pt7_FilesDictsCodeBase2024/user-details.txt", "a") as filePath:
    for key, value in userData.items():
        filePath.write(f"Key: {key}, Value: {value}\n")



"Further reading"
# https://www.w3schools.com/python/python_file_handling.asp