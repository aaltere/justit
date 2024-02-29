from connect import *

def searchSong():

    try:
        
        field = input("Search by SongID or Title or Artist or Genre: ")

        if field == "SongID":

            songID = int(input("Enter SongID: "))
            dbCursor.execute("SELECT * FROM songs WHERE SongID = ?", (songID,))
            row = dbCursor.fetchone()

            if row == None:
                print(f"No record with SongID {songID}")
            else:
                print(row)

    except sql.OperationalError as e:
        print(f"Operational Failed: {e}")

    except sql.ProgrammingError as pe:
        print(f"Programming failed: {pe}")

    except sql.Error as er:
        print(f"Error failed: {er}")

searchSong()