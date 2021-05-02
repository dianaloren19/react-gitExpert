//rafc  para crear el import y el export
import React,{useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

        
        
        const [inputValue, setInputValue] = useState('') 

       
        const handleInputChange=(e)=>{
            setInputValue(e.target.value);
        }
        const handleSubmit=(e)=>{
            e.preventDefault();
           
            if(inputValue.trim().length>2){
            
            setCategories( cats => [inputValue,...cats,]);//primero insertará las nuevas categorias
            setInputValue(''); 
          }
        }


    return (

        <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}  
                    
                    onChange={handleInputChange} 
                />
        </form >
    )
}
  
AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired
}