let arr = []

export const addData = (req, res) => {

    try{
        //console.log(req.body)

        const{name,subject} = req.body

        arr.push(name,subject)
        console.log(arr);
        res.status(200).json({message: "Data added successfully", data: arr})

    }catch(err){
        res.status(500).json({message: "Internal server error"})
    }
}

export default addData