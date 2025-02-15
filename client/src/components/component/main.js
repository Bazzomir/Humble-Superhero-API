import React, { useEffect, useState, useRef } from "react";
import PostHero from "../hero/PostHero";
import GetHero from "../hero/GetHero";
import { getSuperheroes, postSuperheroes } from '../../api/api';

function Main() {
    const inputRef = useRef(null);
    const [superheroes, setSuperheroes] = useState([]);

    const handleClick = () => {
        inputRef.current.classList.add("activeSearchBox");
    };

    useEffect(() => {
        loadSuperheroes();
    })

    const loadSuperheroes = async () => {
        try {
            const data = await getSuperheroes();
            setSuperheroes(data);
        } catch (err) {
            console.log('Error Loading Superheroes...', err)
        }
    };

    const handleAddSuperhero = async (newHero) => {
        try {
            await postSuperheroes(newHero);
            loadSuperheroes();
        } catch (err) {
            console.log('Error adding superhero.', err)
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="d-flex justify-content-around my-5">
                <button className="btn btn-outline-orange w-25">List of Superheroes</button>
                <div className="search-box">
                    <button className="btn-search" onClick={handleClick}><i className="fa fa-search"></i></button>
                    <input type="text" ref={inputRef} className="input-search" placeholder="Type to Search..." />
                </div>
                <button className="btn btn-outline-orange w-25">Create a new Superhero</button>
            </div>
            <PostHero onAdd={handleAddSuperhero} />
            <GetHero superheroes={superheroes} />
        </div>
    );
}

export default Main;