import random

name = "Peter Ashworth"

for letter in name:
    print(letter)

names = ["Peter", "Dave", "George", "Zaheer", "Taylor", "Kat"]

for name in names:
    print(name)

for number in range(4):
    print(number)

# 1 value = stop point
# 2 values = start, stop
# 3 values = start, stop, step
    
number = random.randrange(11)

numGuess = int(input("Guess a number between 1 and 10: "))

while numGuess != number:
    numGuess = int(input("Incorrect\nGuess a number between 1 and 10: "))

print(f"Your guess of {numGuess} is correct!")

for number in range(21):
    print(number)

for number in range(30, 0, -5):
    print(number)

# n += 1 is n = n + 1
    
# initilise a variable of value 20
num = 20

# enter loop if num is more than 1
while num > 0:
    # print num
    print(num)
    # decrease num by 1 per iteration
    num -= 1

num = int(input("Enter a number: "))

userNum = random.randrange(21)

while num <= 20:
    print(f"The number is {num}")

    if num == userNum:
        print(f"Exitting loop")
        break

    num += 1