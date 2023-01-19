import Items from './Items';




function ItemListContainer({data}) {
    return (
        
        <div className="home_container tarjeta">
            <h1> {}</h1>
            <Items data={data} />
        </div>
    
    );
}


export default ItemListContainer;