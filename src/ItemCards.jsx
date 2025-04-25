import Card from "./Card.jsx";


function ItemCards({products_data, onClick, style, ...props}) {
    if (!products_data) {
        return <> <div>{props["intermediate_message"]}</div> </>
    }
    return (
        <>
            {products_data.map((product_data) => {
                return <Card product_data={product_data} onClick={onClick} style={style} />
            })}
        </>
    )
}

export default  ItemCards