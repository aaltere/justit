from connect import *

def readSongs():

    try:

        dbCursor.execute("SELECT * FROM songs")
        allSongs = dbCursor.fetchall()

        if allSongs:
            print("SongID  | Title                          | Artist                         | Genre")
            print("*" * 90)

            for song in allSongs:
                print(f"{song[0]:7} | {song[1]:30} | {song[2]:30} | {song[3]:20}")

        else:
            print("Songs table empty")

    except sql.OperationalError as e:
        print(f"Operational Failed: {e}")

    except sql.ProgrammingError as pe:
        print(f"Programming failed: {pe}")

    except sql.Error as er:
        print(f"Error failed: {er}")


readSongs()