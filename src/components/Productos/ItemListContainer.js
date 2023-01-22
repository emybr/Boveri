import Items from './Items';
import './ItemDetail.css';




function ItemListContainer({data}) {
    return (
        
        <div >
            <Items data={data} />
        </div>
    
    );
}


export default ItemListContainer;