# import the sqlite3 module and assigned it an alias
import sqlite3 as sql

try:
    # to use sqlite(sql) module we start by creating a variable(object)
    # to hold the path to folder(file)
    with sql.connect("python/week-10/pt9-10db/database.db") as dbConnection:
        
        dbCursor = dbConnection.cursor()

except sql.OperationalError as e: # raise sql error

    print(f"Connection Failed: {e}")