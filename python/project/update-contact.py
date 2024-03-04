# import all from connect
from connect import *

# create function to update contact
def updateContact():

    try:
        # get the contact id that is to be updated
        contactID = int(input("Enter the id of the contact to be updated: "))

        # fetch the row with the specified id
        dbCursor.execute(f"SELECT * FROM contacts WHERE contact_id = {contactID}")
        row = dbCursor.fetchone()

        # check if the specified id exists
        if row == None:
            print(f"No contact with the id of {contactID}")
        else:
            # get user inputs for data
            name = input("Enter full name: ")
            phone = input("Enter phone number (xxx-xxx-xxxxx): ")
            email = input("Enter email address: ")
            address = input("Enter address: ")
            note = input("Enter note: ")
  
             # update the contact details of the specified id
            dbCursor.execute("""
                UPDATE contacts SET
                    full_name = ?, 
                    phone = ?, 
                    email = ?, 
                    address = ?,
                    note = ?
                WHERE
                    contact_id = ?
            """, (name, phone, email, address, note, contactID))
            dbConnection.commit()

            # print confirmation message
            print(f"Contact {contactID} updated")
    
    # handling any type of errors
    except sql.OperationalError as e:
        print(f"Operational Failed: {e}")

    except sql.ProgrammingError as pe:
        print(f"Programming Failed: {pe}")

    except sql.Error as er:
        print(f"Error Failed: {er}")

if __name__ == "__main__":
    updateContact()