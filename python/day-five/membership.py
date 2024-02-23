searchString = "Python is a great programming language"
findCharacter = input("Enter character to search for: ")

if findCharacter not in searchString:
    print(f"{findCharacter} not found.")
else:
    print(f"{findCharacter} found.")

name = "Peter Ashworth"

vowels = ["a", "e", "i", "o", "u", "j"]

vowelsNumber = 0

for letter in name:

    for vowel in vowels:

        if vowel == letter:
            vowelsNumber += 1

print(f"There are {vowelsNumber} vowels in your name.")