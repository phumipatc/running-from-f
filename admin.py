import sqlalchemy as db
engine = db.create_engine(
    'postgresql://hggfsjgqbflhag:aaa728789694b1625da0a4708a0253073f5c6884a45adbfaf8b2be0823c0afd5@ec2-54-166-37-125.compute-1.amazonaws.com:5432/d1vvvv840gfh4k')
connection = engine.connect()
metadata = db.MetaData()
users = db.Table('users', metadata, autoload=True, autoload_with=engine)
query = db.update(users).values(admin=1)
query = query.where(users.columns.user_name == "admin")
connection.execute(query)