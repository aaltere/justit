# import all from connect
from connect import *

# create function for reading all contacts
def readContacts():

    try:
        # fetch all data from the contacts table
        dbCursor.execute("SELECT * FROM contacts")
        contacts = dbCursor.fetchall()

        # if there is at least one contact
        if contacts:
            # print a nicely formatted table for te contacts
            print("  id | name                 | phone         "
                  "| email                      " +
                  "| address                          | note")
            print("*" * 150)

            for contact in contacts:
                print(f" {contact[0]:3} | {contact[1]:20} | {contact[2]:12} | " +
                      f"{contact[3]:25} | {contact[4]:25} | {contact[5]:25}")

        # if no contact found        
        else:
            print("Contact book empty")

    # handling any type of errors
    except sql.OperationalError as e:
        print(f"Operational Failed: {e}")

    except sql.ProgrammingError as pe:
        print(f"Programming Failed: {pe}")

    except sql.Error as er:
        print(f"Error Failed: {er}")

if __name__ == "__main__":
    readContacts()