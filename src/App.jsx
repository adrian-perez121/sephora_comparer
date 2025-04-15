import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


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
                return await response.text();
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
        <p>{itemsData}</p>

    </>
  )
}

export default App
