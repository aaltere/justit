from connect import *

def deleteSong():

    try:

        songID = int(input("Enter the SongID of the record to be deleted: "))
        dbCursor.execute(f"SELECT * FROM songs WHERE SongID = {songID}")

        row = dbCursor.fetchone()

        if row == None:
            print(f"No record with the SongID {songID}")
        else:
            dbCursor.execute("DELETE FROM songs WHERE SongID = ?", (songID,))
            dbConnection.commit()

            print(f"Record {songID} deleted")

    except sql.OperationalError as e:
        print(f"Operational Failed: {e}")

    except sql.ProgrammingError as pe:
        print(f"Programming failed: {pe}")

    except sql.Error as er:
        print(f"Error failed: {er}")

deleteSong()