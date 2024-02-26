import logging
import time

    
"To Do: Predict, then Run, and then Investigate"
#different logging methods and severity
logging.basicConfig(filename=r"folderpath/filename", level=logging.DEBUG) 

try:  # attempt to run the indented code block
    num1 = int(input(("Enter your first number: ")))
    num2 = int(input(("Enter your second number: ")))
    answer = num1 / num2
    

except ZeroDivisionError:  # handles exception if code in try block fails
    print("You can't divide a number by zero")
    logging.warning(f"On {time.asctime()}\nUser attempted to divide by zero")

else:
    #Output for user/what the user see
    print(f"The answer to {num1} / {num2} = {answer}")
    #Output for developer/what the developer see
    logging.info(f"On {time.asctime()}\nDivided {num1} / {num2} = {answer}")
finally:
    print("Closing....")




"To Do: Task 1: Modify"
# Make: 
# 1. Use any other two logging methods to log error to the Exceptions folder in a file called myFilelog2.log 