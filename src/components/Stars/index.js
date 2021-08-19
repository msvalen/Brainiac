import React from 'react';


const Stars = ({score}) => {
    
      const reward = () => {
          let stars = ""; 
          for(let i = 0; i < score; i++) { 
          stars += "⭐";
          }
          return stars 
      }

return (  
    <span>{reward()}</span> 
)

}

export default Stars;