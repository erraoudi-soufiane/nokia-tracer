import React, { useState } from 'react'
import "./SubCategories.css"

function SubCategories({selectedCategory, setSelectedSubCategory}) {

  const subcategoriesByCategory = {
    network: ['Subcategory1_1', 'Subcategory1_2', 'Subcategory1_3'],
    End: ['Subcategory2_1', 'Subcategory2_2', 'Subcategory2_3']
  };

  const subcategories = subcategoriesByCategory[selectedCategory] || [];

  const [selectedItem, setSelectedItem] = useState("1");

  return (
    <div className='subCategories'>
        {subcategories.map((subCategory, index) => (
        <button key={index} 
        onClick={() => {setSelectedItem(index); setSelectedSubCategory(subCategory)}} 
        className={selectedItem === index ? 'subCategories__img active' : 'subCategories__img'} >{subCategory}
        </button>
      ))}
    </div>
  )
}

export default SubCategories