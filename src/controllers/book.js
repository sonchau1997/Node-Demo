function getAllBooks(req,res){
    res.send ([
        {name:'Tieng chim hot trong bui man gai',price:20000},
        {name:'Chiec thuyen ngoai xa',price:150000},
        {name:'Chiec thuyen ngoai xa',price:150000},
        {name:'Chiec thuyen ngoai xa',price:150000}
    ])

}
module.exports={
    getAllBooks
}