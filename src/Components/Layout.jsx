import React from 'react';
import './Layout.css';

const Layout = () => {
    return (
        <>
            <div className="providers">
                <div className="heading">
                    <h1>NDIS Providers in Sydney</h1>
                </div>
                <div className="types">
                    <section>
                        <h2>Services Type</h2>
                        <select>
                            <option value=""> Service Type</option>
                            <option value="pickup">PickUp</option>
                            <option value="drop">Drop</option>
                        </select>
                    </section>
                    <section>
                        <h2>Locations</h2>
                        <select>
                            <option value="">Location</option>
                            <option value="location1">Albany</option>
                            <option value="location2">Armadale</option>
                            <option value="location3">Bayswater</option>
                        </select>
                    </section>
                    <section>
                        <h2>Providers Near</h2>
                        <select>
                            <option value="">Select a provider</option>
                            <option value="provider1">Aadesh</option>
                            <option value="provider2">Sam</option>
                            <option value="provider3">Raj</option>
                        </select>
                    </section>
                    <section>
                        <h2>Disabilities Type</h2>
                        <select>
                            <option value="">Disabilities</option>
                            <option value="disabilityType1">Disability Type 1</option>
                            <option value="disabilityType2">Disability Type 2</option>
                            <option value="disabilityType3">Disability Type 3</option>
                        </select>
                    </section>
                    <button>Search</button>
                </div>
            </div>
        </>
    );
};

export default Layout;
