import React from 'react';  
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const Colors =() =>{
   const[colorNames] = React.useState(['#FF6263','#DE4839','#BF3325','#E21717','#1B98F5','#23C4ED','#383CC1','#51E1ED','#1FAA59','#38CC77','#50DBB4','#4DD637','#E8BD0D','#EDBF69','#DDD101','#D9D55B','#8D3DAF','#E07C24','#E03B8B','#5A20CB']);
   
   const copyColor=(e) =>{
         let color = e.target.innerText;
         if(navigator.clipboard)
         {
             navigator.clipboard.writeText(color);
             navigator.clipboard.readText();
             toast.success(`You have copied ${color} value successfully`,{
                 position:toast.POSITION.TOP_RIGHT
             })
         }
   }

    return(
        <div className="row">
{colorNames.map(color=>(
    <div className="item" key={color} style={{background:color}} onClick={copyColor}>
        <div>{color}</div>
    </div>
))}
        </div>
    )
}
export default Colors;