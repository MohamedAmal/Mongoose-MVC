const express = require('express')
const Product = require('../schemas/product')
const router = express.Router()

//get for listing
router.get('/list', async (req, res) => {
    const products = await Product.find({})
    // res.send(response)
    res.render('index', { products, title: 'Products' })
})

router.get("/add", async (req, res) => {
    res.render('add', { title: 'Add Page' })
});

//get for edit
router.get("/:id", async (req, res) => {
    const id = req.params.id
    const product = await Product.findById({ _id: id })
    res.render('edit', { product, title: 'Edit Page' })
});

router.post("/add", async (req, res) => {
    const body = req.body
    const addNew = new Product({...body})
    const result = await addNew.save()
    res.redirect('/products/list')
});
//post request for update 
router.post("/:id", async (req, res) => {
    const id = req.params.id
    const body = req.body
    const updateQuery = await Product.findByIdAndUpdate(id, body)
    res.redirect('/products/list')
});

//delete request for delete
router.delete("/:id", async (req, res) => {
    const id = req.params.id
    const deleteQuery = await Product.findByIdAndDelete(id)
    // res.redirect('/products/list')
    res.send(deleteQuery)
});



// router.post("/add", async (req, res) => {
//     const body = req.body;
//     if (body.name.length > 0 && body.price > 0 && body.brand.length > 0) {
//         const newProduct = new Product({
//             name: body.name,
//             price: body.price,
//             brand: body.brand
//         })
//         const errors = newProduct.validateSync()
//         if (errors) {
//             res.send(errors)
//         } else {
//             const response = await newProduct.save().catch((e) => { console.log(e) })
//             res.send(response);
//         }
//     }
//     else {
//         res.send("Input Error!!");
//     }
// });

// router.put("/:id", async (req, res) => {
//     const id = req.params.id
//     const body = req.body
//     const updateQuery = await Product.updateOne({ _id: id, "name": body.name, "price": body.price, "brand": body.brand })
//     res.send(updateQuery);
// });

// router.delete("/:id", async (req, res) => {
//     const id = req.params.id
//     const deleteQuery = await Product.deleteOne({})
//     res.send(deleteQuery);
// });

module.exports = router