const {MONGO_USER,MONGO_PASS} = process.env 

export const coonectionStr = "mongodb+srv://"+MONGO_USER+":"+MONGO_PASS+"@cluster0.enum13t.mongodb.net/company?retryWrites=true&w=majority&appName=Cluster0"; 