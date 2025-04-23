function Card({product_data, ...props}) {
    // If there's no data just return the empty div
    if (!product_data) {
        return (<div className="h-full flex flex-col border-2 items-start border-l-black relative"></div>)
    }


    // The div returned should be a card with the makeup data
    let onClickWrapper;
    if (props["onClick"]) {
         onClickWrapper = () => {
            props["onClick"](product_data);
        }
    }

    const ratingsColor = props["ratingsColor"] || "black";
    const reviewsColor = props["reviewsColor"] || "black";
    const priceColor = props["priceColor"] || "black";

    return (
        <div className="h-full flex flex-col border-2 items-start border-l-black relative" onClick={onClickWrapper ? onClickWrapper : null}>
            <img className="w-1/2 self-center" src={product_data["heroImage"]} alt={product_data["currentSku"]["imageAltText"]}/>
            <span className="font-bold " >{product_data["brandName"]}</span>
            <span className="text-lg text-left" >{product_data["displayName"]}</span>
            <span style={{color : ratingsColor}}>Ratings: {product_data["rating"]}</span>
            <span style={{color : reviewsColor}}>Reviews: {product_data["reviews"]}</span>
            <span>Natural? {product_data["currentSku"]["isNatural"] ? "Yes" : "No"}</span>
            <span>Organic? {product_data["currentSku"]["isOrganic"] ? "Yes" : "No"}</span>
            <span style={{color : priceColor}} className="text-xl font-bold absolute right-0 bottom-0">{product_data["currentSku"]["listPrice"]}</span>
        </div>
    )
}

export default Card;