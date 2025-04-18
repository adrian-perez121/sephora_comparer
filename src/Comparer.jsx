import Card from "./Card.jsx";
import card from "./Card.jsx";

function Comparer ({card1_data, card2_data, ...props}) {
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
        <div className="grid grid-cols-2 [width:70%]">
            <div className="card border">{ card1_data ? <Card product_data={card1_data} ratingsColor={card1Rating} reviewsColor={card1Reviews}/> : "nothing here" }</div>
            <div className="card border">{ card2_data ? <Card product_data={card2_data} ratingsColor={card2Rating} reviewsColor={card2Reviews} />  : "nothing here" }</div>
        </div>
    )
}

export default Comparer