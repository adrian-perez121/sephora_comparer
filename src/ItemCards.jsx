
function Card({product_data, ...props}) {
    console.log(product_data["currentSku"]["isOrganic"])
    // The div returned should be a card with the makeup data
    return (
        <div className="flex flex-col border-2 items-start border-l-black relative">
            <img className="w-1/2 self-center" src={product_data["heroImage"]} alt={product_data["currentSku"]["imageAltText"]}/>
            <span className="font-bold " >{product_data["brandName"]}</span>
            <span className="text-lg text-left" >{product_data["displayName"]}</span>
            <span>Ratings: {product_data["rating"]}</span>
            <span>Reviews: {product_data["reviews"]}</span>
            <span>Natural? {product_data["currentSku"]["isNatural"] ? "Yes" : "No"}</span>
            <span>Organic? {product_data["currentSku"]["isOrganic"] ? "Yes" : "No"}</span>
            <span className="text-xl font-bold absolute right-0 bottom-0">{product_data["currentSku"]["listPrice"]}</span>

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