import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

const List = () => {
    let options=["left","middle","right","bottom"]
    return <ButtonGroup size="small" aria-label="Small button group">
    
    {options.map(item=><Button key={item}>{item}</Button> )}    
   
        
    </ButtonGroup>

}

export default List;