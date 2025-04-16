import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemCards from "./ItemCards.jsx";


function App() {
    const [itemStr, setItemStr] = useState('');
    const [itemsData, setItemsData] = useState('');

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

  return (
    <>
        <div>
              <input className="bg-amber-50 border-amber-400 border-2 outline-none" type="text" value={itemStr} onChange={handleChange} onKeyDown={handleEnter} />
        </div>
        {/*  This is going to be there the cards go*/}
        <div className="max-w-screen grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-x-3 gap-y-2">
            <ItemCards products_data={itemsData["products"]}/>
        </div>
    </>
  )
}

export default App
