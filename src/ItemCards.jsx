
function Card({product_data, ...props}) {
    console.log(product_data)
    // The div returned should be a card with the makeup data
    return (
        <div className="flex flex-col border-2 border-l-black">
            <img src={product_data["heroImage"]} alt={product_data["currentSku"]["imageAltText"]}/>
            <span>{product_data["brandName"]}</span>
            <span>{product_data["displayName"]}</span>
            <span>{product_data["rating"]}</span>
            <span>{product_data["reviews"]}</span>
            <span>{product_data["currentSku"]["isNatural"].toString()}</span>
            <span>{product_data["currentSku"]["isNew"].toString()}</span>
            <span>{product_data["currentSku"]["listPrice"]}</span>

        </div>
    )
}

function ItemCards({products_data, ...props}) {
    if (!products_data) {
        return <> <div>Nothing here</div> </>
    }

    return (
        <>
            {products_data.map((product_data) => {
                return <Card product_data={product_data} />
            })}
        </>
    )
}

export default  ItemCards