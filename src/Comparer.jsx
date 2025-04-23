import Card from "./Card.jsx";

function Comparer ({card1_data, card2_data, ...props}) {
    const cardStyle = "h-full p-2 flex flex-col border-1 border-gray-200 items-start rounded-4xl shadow-md relative " +
        "transition duration-300";
    let card1Rating;
    let card2Rating;
    let card1Reviews;
    let card2Reviews;

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

    }


    return (
        <div className="grid grid-cols-2 lg:h-104 lg:w-208">
            <div className="card border">{<Card product_data={card1_data} ratingsColor={card1Rating} reviewsColor={card1Reviews} style={cardStyle} />} </div>
            <div className="card border">{<Card product_data={card2_data} ratingsColor={card2Rating} reviewsColor={card2Reviews} style={cardStyle} /> }</div>
        </div>
    )
}

export default Comparer