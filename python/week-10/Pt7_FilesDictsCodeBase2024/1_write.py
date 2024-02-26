"""
Session objectives
●	Write to text files
●	Read data from a text file
●	Append to text files
●   Use context manager to handle resource usage
Key vocabulary
Data files, text files

"""
"Spend 3 minutes to read the comments in green"
# In order to read the data stored in a text file, you must open it first. ​

# Just like a book. You can’t read what is inside if you don’t open it first.​

# There are four modes for opening a file:​

# r for only reading files​

# w for only writing to files​ and creating the file if it does not exists but overwrites existing file contents

# a for adding to an existing file​

# r+ for reading and writing files

"""
Key file-handling techniques are:Open, Read ,Close, Write
The text file must be saved in the same location as your Python file for the program to work. 
"""

"1_FileHandling_ReadWrite/myfile.txt","w"
"Syntax :  varName = openMethod('pathtofolder/parthtofile/fileName.txt', 'w')"
filePath1 = open('pathtofolder/parthtofile/fileName.txt', 'w') # folder/folder/filename
# write to file
filePath1.write("Python Programming")
# close the filepath and file/ releasing the resource
filePath1.close()

"To Do: Refer to the example code above to create a file called yourName.txt and Write your name to the file" 
# If stuck refer to the example above
"Further reading"
# https://www.w3docs.com/snippets/python/how-to-read-a-text-file-into-a-list-or-an-array-with-python.html




