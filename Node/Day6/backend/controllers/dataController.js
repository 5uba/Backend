export const getData =(req,res)=>{
    res.status(200).json({
        message:"Data fetched successfully"
    })
};

export const createData = (req, res) => {
    const data = req.body;

    res.status(201).json({
        message:"Data created successfully",
        data:data
    })
}

