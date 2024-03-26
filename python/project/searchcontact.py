# import all from connect
from connect import *

# create function to search for contact
def searchContact():

    try:
        # ask user for field to conduct a search on
        field = input("Search by id or name: ")

        if field == "id":
            
            # get the id for searching
            contactID = int(input("Enter the id: "))
            
            # fetch the row of the specified id
            dbCursor.execute("SELECT * FROM contacts WHERE contact_id = ?",
                             (contactID,))
            row = dbCursor.fetchone()

            # check if the specified id exists
            if row == None:
                print(f"No contact with id {contactID}")
            else:
                # print search result
                print(row)

        elif field == "name":

            # get the name for searching
            name = input("Enter the contact full name: ")

            # fetch rows with user input
            dbCursor.execute(
                f"SELECT * FROM contacts WHERE full_name = '%{name}'"
            )
            rows = dbCursor.fetchall()

            # check if the name exists
            if row == None:
                print(f"No contact with the name {name}")
            else:
                # print search result
                for contact in rows:
                    print(contact)

    # handling any type of errors
    except sql.OperationalError as e:
        print(f"Operational Failed: {e}")

    except sql.ProgrammingError as pe:
        print(f"Programming Failed: {pe}")

    except sql.Error as er:
        print(f"Error Failed: {er}")

if __name__ == "__main__":
    searchContact()