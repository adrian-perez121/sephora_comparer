import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemCards from "./ItemCards.jsx";
import Comparer from "./Comparer.jsx";


function App() {
    const [itemStr, setItemStr] = useState('');
    const [itemsData, setItemsData] = useState('');
    const [comparedCard1, setComparedCard1] = useState(null)
    const [comparedCard2, setComparedCard2] = useState(null)


    const handleChange = (event) => {
        setItemStr(event.target.value)
    };


    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
                    'x-rapidapi-host': 'sephora.p.rapidapi.com'
                }
            };

            setItemsData('');

            async function getProduct() {
                const url = `https://sephora.p.rapidapi.com/us/products/v2/search?pageSize=10&currentPage=1&q=${event.target.value}`
                const response = await fetch(url, options);
                return await response.json();
            }

            getProduct().then((response) => {
                setItemsData(response);
            }).catch((err) => {
                setItemsData("There was an error. It was... " + err)
            });
        }
    }

    const addComparedCard1 = (card_data) => {
        if (!comparedCard1) {
            setComparedCard1(card_data);
        }
    }

    const addComparedCard2 = (card_data) => {
        if (!comparedCard2) {
            setComparedCard2(card_data);
        }

    }


  return (
    <>
        <div className="flex flex-col items-center">

            <Comparer card1_data={comparedCard1} card2_data={comparedCard2}/>

            <div>
                <input className="bg-amber-50 border-amber-400 border-2 outline-none" type="text" value={itemStr} onChange={handleChange} onKeyDown={handleEnter} />
            </div>
            {/*  This is going to be there the cards go*/}
            <div className="max-w-screen grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-x-3 gap-y-2">
                <ItemCards products_data={itemsData["products"]} onClick={comparedCard1 ? addComparedCard2 : addComparedCard1}/>
            </div>
        </div>

    </>
  )
}

export default App
