const bcrypt = require('bcrypt');

const students=[
    {id:1,name:"omar"},
    {id:2,name:"ali"},
    {id:3,name:"ahmed"},
    {id:4,name:"sabbir"},
    {id:5,name:"mahmoud"},
    {id:6,name:"hussain"},
    {id:7,name:"samir"},
    {id:8,name:"della"},
    

]


const AllStudent = (req, res)=> {
    res.json(students)
}

const ChangePass = async (req, res)=>{
    const {pass}=req.body
    //const encPass = await bcrypt.hash(pass,+process.env.SALT)
    const oldpass="$2b$09$TKpyti5fbYhW2K286zf/secO9yQE7NctBkGJj.U7iZqCMd9lIzdOm"
    if(!(await bcrypt.compare(pass,oldpass))){
        return res.status(400).send("Invalid password")
    }
    res.status(200).send("correct password")
}
module.exports = {
    AllStudent,
    ChangePass
}