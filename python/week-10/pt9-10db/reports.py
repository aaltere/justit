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

        elif field in ["Title", "Artist", "Genre"]:

            userInput = input(f"Enter the value for {field}: ")

            dbCursor.execute(f"SELECT * FROM songs WHERE {field} = '%{userInput}'")
            rows = dbCursor.fetchall()

            if row == None:
                print(f"No record(s) with {field} {userInput}")
            else:
                for records in rows:
                    print(records)

        else:
            print(f"Field {field} is invalid")

    except sql.OperationalError as e:
        print(f"Operational Failed: {e}")

    except sql.ProgrammingError as pe:
        print(f"Programming failed: {pe}")

    except sql.Error as er:
        print(f"Error failed: {er}")

searchSong()