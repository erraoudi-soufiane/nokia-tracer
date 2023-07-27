import React from 'react'
import DraggableComponent from './DraggabeComponent';

function components({selectedSubCategory}) {

    const componentsBySubCategories = {
        Subcategory1_1: ['component111', 'component112','component113'],
        Subcategory1_2: ['component111','component111','component111'],
        Subcategory1_3: ['component111','component111','component111','component111',],
        Subcategory2_1: ['component111','component111'],
        Subcategory2_2: ['component111'],
        Subcategory2_3: []
    };

    

    const components = componentsBySubCategories[selectedSubCategory] || [];
  return (
    <div className='components'>
        {components.map((component,index) => <DraggableComponent key={index} component={component}/> )}
    </div>
  )
}

export default components