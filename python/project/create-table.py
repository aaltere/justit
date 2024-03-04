# import all from connect
from connect import *

# create table to hold contacts
dbCursor.execute("""
CREATE TABLE "contacts" (
	"contact_id" INTEGER NOT NULL UNIQUE,
	"full_name"	TEXT,
    "phone" TEXT,
	"email"	TEXT,
	"address" TEXT,
    "note" TEXT,
	PRIMARY KEY("contact_id" AUTOINCREMENT)
)""")