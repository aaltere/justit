searchString = input("Enter a string: ").lower()
findChar = input("Enter character to search for: ")

counter = 0

for char in searchString:

    if char == findChar:
        counter += 1

print(f"There are {counter} of {findChar} in the string.")