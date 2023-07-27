import React, { Component, useState } from 'react'
import "./Tools.css"
import Categories from './categories/Categories'
import SubCategories from './subCategories/SubCategories'
import Components from './components/components'


function Tools() {

  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedSubCategory, setSelectedSubCategory] = useState('');

  return (
    <div className='tools'>
        <div className="categoriesAndSubCategories">
            <div className="categories">
                <Categories setSelectedCategory={setSelectedCategory}/>
                
            </div>
            <div className="subCategories">
              <SubCategories selectedCategory={selectedCategory} setSelectedSubCategory = {setSelectedSubCategory} />
            </div>
        </div>

        <div className="components">
          <Components selectedSubCategory = {selectedSubCategory} />
        </div>
    </div>
  )
}

export default Tools