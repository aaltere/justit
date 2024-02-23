characterValue = int(input("Enter an integer: "))

print(f"The character equivalent of {characterValue} is {chr(characterValue)}.")

def alphabets():
    alphabetList = []

    for character in range(65, 123):
        alphabetList.append(chr(character))

    return alphabetList

print(alphabets())
