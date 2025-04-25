import Card from "./Card.jsx";
import dollarToFloat from "./utils.js"

function Comparer ({card1_data, card2_data, card1_clear, card2_clear, ...props}) {
    const cardStyle = "h-full p-2 flex flex-col border-1 border-gray-200 items-start rounded-4xl shadow-md relative " +
        "transition duration-300";
    let card1Rating;
    let card2Rating;
    let card1Reviews;
    let card2Reviews;
    let card1Price;
    let card2Price;

    if (card1_data && card2_data) {
        if (parseFloat(card1_data["rating"]) > parseFloat(card2_data["rating"])) {
            card1Rating = "green";
            card2Rating = "red";
        } else if (parseFloat(card1_data["rating"]) < parseFloat(card2_data["rating"])) {
            card1Rating = "red";
            card2Rating = "green";
        }

        if (parseFloat(card1_data["reviews"]) > parseFloat(card2_data["reviews"])) {
            card1Reviews = "green";
            card2Reviews = "red";
        } else if (parseFloat(card1_data["reviews"]) < parseFloat(card2_data["reviews"])) {
            card1Reviews = "red";
            card2Reviews = "green";
        }

        if (dollarToFloat(card1_data["currentSku"]["listPrice"]) > dollarToFloat(card2_data["currentSku"]["listPrice"])) {
            card1Price = "green";
            card2Price = "red";
        } else if (dollarToFloat(card1_data["currentSku"]["listPrice"]) < dollarToFloat(card2_data["currentSku"]["listPrice"])) {
            card1Price = "red";
            card2Price = "green";
        }

    }


    return (
        <div className="grid grid-cols-2 lg:h-104 lg:w-208">
            <div className="card relative">
                {<Card product_data={card1_data} ratingsColor={card1Rating} reviewsColor={card1Reviews} priceColor={card1Price} style={cardStyle} />}
                {card1_data && <span className={"absolute cursor-pointer text-red-500 font-bold top-10 right-12 transition duration-200 hover:scale-125"} onClick={card1_clear}>X</span>}
            </div>
            <div className="card relative">
                {<Card product_data={card2_data} ratingsColor={card2Rating} reviewsColor={card2Reviews} priceColor={card2Price} style={cardStyle} />}
                {card2_data && <span className="absolute cursor-pointer text-red-500 font-bold top-10 right-12 transition duration-200 hover:scale-125" onClick={card2_clear}>X</span>}
            </div>

        </div>
    )
}

export default Comparer