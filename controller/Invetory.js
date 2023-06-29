const Inventory = require('../models/inventory')
exports.PostApiCall =async (req, res) => {
    try {
        let update;
        const data = req.body;
        data.forEach(async (value  , index , arr) => {
            if(value.operation === 'add'){
               // find the product
               console.log(value.productId)
               let product  = await Inventory.findById(value.productId);
               console.log(product)
               if(product){
                  const quantity = product.quantity + value.quantity;
                  update = await Inventory.findByIdAndUpdate(value.productId , { $set: { quantity, }});
                  console.log(update)
               }
            }
            if(value.operation === 'sub'){
                // find the product
                console.log(value.productId)
                let product  = await Inventory.findById(value.productId);
                console.log(product)
                if(product){
                   const quantity = product.quantity - value.quantity;
                   update = await Inventory.findByIdAndUpdate(value.productId , { $set: { quantity, }});
                   console.log(update)
                }
             }
        })
        let InventoryData = await Inventory.find();
        res.status(200).json({
            status:true,
            message:'Inventory updated successfully',
            InventoryData,
        } )
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            status:false,
            message:error.message
        })
        
    }
}