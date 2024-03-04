# import all from connect
from connect import *

# create function for deleting contact
def deleteContact():

    try:
        # get the contact id that is to be deleted
        contactID = int(input("Enter the id of the contact to be deleted: "))

        # fetch the row with the specified id
        dbCursor.execute(f"SELECT * FROM contacts WHERE contact_id = {contactID}")
        row = dbCursor.fetchone()

        # check if the specified id exists
        if row == None:
            print(f"No contact with the id of {contactID}")
        else:
            # delete the contact with the specified id
            dbCursor.execute("DELETE FROM contacts WHERE contact_id = ?", 
                             (contactID,))
            dbConnection.commit()

            # print confirmation message
            print(f"Contact {contactID} deleted")
    
    # handling any type of errors
    except sql.OperationalError as e:
        print(f"Operational Failed: {e}")

    except sql.ProgrammingError as pe:
        print(f"Programming Failed: {pe}")

    except sql.Error as er:
        print(f"Error Failed: {er}")

if __name__ == "__main__":
    deleteContact()