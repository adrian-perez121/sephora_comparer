function Card({product_data, onClick,...props}) {
    // The div returned should be a card with the makeup data

    const onClickWrapper = () => {
        onClick(product_data)
    }

    return (
        <div className="flex flex-col border-2 items-start border-l-black relative" onClick={onClickWrapper}>
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

export default Card;