stringBool1 = "a" > "A"
stringBool2 = "ax" < "ZZ"
stringBool3 = "Peter" != "Dave"

print(stringBool1)
print(stringBool2)
print(stringBool3)

fname = "Peter"
lname = "Ashworth"

fullName = fname + " " + lname

print(fullName)

# use index number to print specific character

course = "Python Programming"
print(course[3])

for letter in range(len(course) - 1, 0, -1):
    print(course[letter])