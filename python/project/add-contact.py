# import all from connect
from connect import *

# create function for adding contact
def addContact():

    try:
        # get user inputs for data
        name = input("Enter full name: ")
        phone = input("Enter phone number: ")
        email = input("Enter email address: ")
        address = input("Enter address: ")
        note = input("Enter note: ")

        # insert data into the table
        dbCursor.execute("""
            INSERT INTO contacts (
                full_name, phone, email, address, note
            )
            VALUES
                (?, ?, ?, ?, ?)
        """, (name, phone, email, address, note))

        dbConnection.commit()

        # confirmation message
        print(f"{name} insert into contact book")

    # handling any type of errors
    except sql.OperationalError as e:
        print(f"Operational Failed: {e}")

    except sql.ProgrammingError as pe:
        print(f"Programming Failed: {e}")

    except sql.Error as er:
        print(f"Error Failed: {e}")

if __name__ == "__main__":
    addContact()