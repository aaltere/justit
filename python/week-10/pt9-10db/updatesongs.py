from connect import *

def updateSong():
    
    try:

        songID = int(input("Enter the SongID of the record to be updated: "))
        dbCursor.execute(f"SELECT * FROM songs WHERE SongID = {songID}")

        row = dbCursor.fetchone()

        if row == None:
            print(f"No record with the SongID of {songID}")
        else:
            title = input("Enter song title: ")
            artist = input("Enter song artist: ")
            genre = input("Enter song genre: ")

            dbCursor.execute("UPDATE songs SET Title = ?, Artist = ?, Genre = ? WHERE SongID = ?", (title, artist, genre, songID))
            dbConnection.commit()
            
            print(f"Record with SongID {songID} updated")

    except sql.OperationalError as e:
        print(f"Operational Failed: {e}")

    except sql.ProgrammingError as pe:
        print(f"Programming failed: {pe}")

    except sql.Error as er:
        print(f"Error failed: {er}")

if __name__ == "__main__":
    updateSong()