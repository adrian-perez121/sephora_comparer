import Card from "./Card.jsx";


function ItemCards({products_data, onClick, ...props}) {
    if (!products_data) {
        return <> <div>Nothing here</div> </>
    }
    return (
        <>
            {products_data.map((product_data) => {
                return <Card product_data={product_data} onClick={onClick} />
            })}
        </>
    )
}

export default  ItemCards