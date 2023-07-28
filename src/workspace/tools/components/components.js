import React from 'react'
import DraggableComponent from './DraggabeComponent';

function components({selectedSubCategory}) {

    const componentsBySubCategories = {
        Subcategory1_1: [
          {
            id:111,
            url: 'component111'
          },
          {
            id:112,
            url: 'component112'
          },
          {
            id:113,
            url: 'component113'
          },
        ],

        Subcategory1_2: [
          {
            id:121,
            url: 'component121'
          },
          {
            id:122,
            url: 'component122'
          },
          {
            id:123,
            url: 'component123'
          },
        ],
        
        Subcategory1_3: [
          {
            id:131,
            url: 'component131'
          },
          {
            id:132,
            url: 'component132'
          },
          {
            id:133,
            url: 'component133'
          },
          {
            id:134,
            url: 'component134'
          },
        ],
        Subcategory2_1: [
          {
            id:211,
            url: 'component211'
          },
          {
            id:212,
            url: 'component212'
          },
          {
            id:213,
            url: 'component213'
          },
        ],
        Subcategory2_2: [
          {
            id:221,
            url: 'component221'
          },
        ],
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