# import sqlite to use database
import sqlite3 as sql

try:
    # creating object holding the path to folder
    with sql.connect("python\project\contacts.db") as dbConnection:
        dbCursor = dbConnection.cursor()

# add exception for connection error
except sql.OperationalError as e:
    print(f"Connection Failed: {e}")