from connect import *

def insertSongs():

    try:
        # songid is auto increment
        title = input("Enter song title: ")
        artist = input("Enter song artist: ")
        genre = input("Enter song genre: ")

        dbCursor.execute("INSERT INTO songs (Title, Artist, Genre) VALUES (?, ?, ?)", (title, artist, genre))

        dbConnection.commit()

        print(f"{title} inserted to the songs table")

    except sql.OperationalError as e:
        print(f"Operational Failed: {e}")

    except sql.ProgrammingError as pe:
        print(f"Programming failed: {pe}")

    except sql.Error as er:
        print(f"Error failed: {er}")

insertSongs()