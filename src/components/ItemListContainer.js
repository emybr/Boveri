import Card from './card';




function ItemListContainer({data}) {
    return (
        
        <div className="home_container tarjeta">
            <h1> {}</h1>
            <Card data={data} />
        </div>
    
    );
}


export default ItemListContainer;