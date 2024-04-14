import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import './Cities.css';

const CitiesByState = () => {

    const stateCities = [
        {
            state: 'NSW',
            cities: ['Albury', 'Bathurst', 'Ballarat', 'Bathurst', 'Victoria', 'Queensland', 'SA', 'WA', 'Tasmania', 'Ballarat', 'Brisbane', 'Adelaide', 'Albany', 'Blackmans Bay', 'Bendigo', 'Cairns', 'Central Coast', 'Cranbourne', 'Caloundra', 'O o']
        },
        {
            state: 'Victoria',
            cities: ['Broome', 'Bridgewater', 'Bunbury', 'Aldinga Beach', 'Broome', 'Bridgewater', 'Bridgewater', 'Bunbury', 'Burnie', 'O O O', 'Coffs Harbour', 'Frankston East', 'Gladstone', 'Gawler', 'Canning Vale', 'Claremont', 'O', 'Dubbo', '©', 'Geelong']
        },
        {
            state: 'Queensland',
            cities: ['NT', 'Alice Springs', 'Darwin', 'Katherine', 'McMinns', 'Palmerston', 'Lismore', 'Melbourne', 'Logan City', 'Mount Barke', 'Geraldton', 'Glenorchy', 'ACT', 'Maitland', 'Melton', 'Mackay', 'Mount Gambier', 'Gosnells', 'Hobart']
        },
        {
            state: 'SA',
            cities: ['Playford', 'Port Adelaide Enfield', 'Tea Tree Gully', 'Salisbury', 'Onkaparinga', 'Marion', 'Holdfast Bay', 'Charles Sturt', 'West Torrens', 'Mitcham', 'Burnside', 'Norwood Payneham St Peters', 'Campbelltown', 'Adelaide Hills', 'Prospect', 'Walkerville', 'Port Adelaide Enfield']
        },
        {
            state: 'WA',
            cities: ['Albany', 'Armadale', 'Bayswater', 'Belmont', 'Cambridge', 'Canning', 'Cockburn', 'Claremont', 'Cottesloe', 'East Fremantle', 'Fremantle', 'Gosnells', 'Joondalup', 'Kalamunda', 'Kwinana', 'Mandurah', 'Mundaring', 'Nedlands', 'Perth']
        },
        {
            state: 'Tasmania',
            cities: ['Clarence', 'Hobart', 'Kingborough', 'Brighton', 'Kentish', 'Meander Valley', 'West Tamar', 'Launceston', 'Glenorchy', 'Burnie', 'King Island', 'West Coast']
           
        },
       
    ];

    return (
        <>
          <div className="h1-title">
                <h1>Nearby Popular Cities
                </h1>
            </div>
        <div className="container-city">
            <div className="row">
                {/* Map through stateCities array to render columns for each state */}
                {stateCities.map(({ state, cities }) => (
                    <div key={state} className="column">
                        <h3>{state}</h3>
                        <ul>
                            
                            {cities.map(city => (
                                <li key={city}>
                                    <IoLocationOutline /> {city.replace('City of ', '')}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div></>
    );
};

export default CitiesByState;
