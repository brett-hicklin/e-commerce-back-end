const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const allCategories = await Category.findAll({
    include:[{model:Product}],
  });
  res.status(200).json(allCategories);
} catch (err){
  res.status(500).json(err);
}

});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const oneCategory = await Category.findByPk(req.params.id,{
      include:[{model:Product}],
    });

    if (!oneCategory){
      res.status(404).json({message:'No category found with that id'}); 
      return;
    }

    res.status(200).json(oneCategory);
  } catch (err) {
    res.status(500).json(err);

  }

  

});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deletedCategory = await Category.destroy({
      where:{
        id:req.params.id,
      },
    })
    res.json(deletedCategory);
    
    } catch (err){
      res.json(err);
    }

});

module.exports = router;
