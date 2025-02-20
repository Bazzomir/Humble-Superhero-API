import React, { useEffect, useState, useRef } from "react"; // Import React and necessary hooks
import PostHero from "../hero/PostHero"; // Import PostHero component for adding new superheroes
import GetHero from "../hero/GetHero"; // Import GetHero component to display the list of superheroes
import { getSuperheroes, postSuperheroes } from '../../api/api'; // Import API functions for fetching and posting superheroes

function Main() {
    const inputRef = useRef(null); // Reference to the search input box for manipulation
    const [superheroes, setSuperheroes] = useState([]); // State to store list of superheroes
    const [showPostHero, setShowPostHero] = useState(false); // State to toggle showing the PostHero component

    // Function to add the "activeSearchBox" class when search button is clicked
    const handleClick = () => {
        inputRef.current.classList.add("activeSearchBox");
    };

    // Function to toggle the visibility of the PostHero component
    const togglePostHero = () => {
        setShowPostHero(!showPostHero);
    };

    // Function to reset states to default, including hiding PostHero and clearing search input
    const resetToDefault = () => {
        setShowPostHero(false);
        inputRef.current.value = '';
        inputRef.current.classList.remove("activeSearchBox");
    };

    // Function to load superheroes from the API and update the state
    const loadSuperheroes = async () => {
        try {
            const data = await getSuperheroes();
            setSuperheroes(data); // Set superheroes to the fetched data
        } catch (err) {
            console.log('Error Loading Superheroes...', err); // Log any errors during data fetch
        }
    };

    // Function to handle adding a new superhero and reload the list after
    const handleAddSuperhero = async (newHero) => {
        try {
            await postSuperheroes(newHero); // Send new superhero data to the API
            loadSuperheroes(); // Reload the list of superheroes after successful addition
        } catch (err) {
            console.log('Error adding superhero.', err); // Log any errors during adding
        }
    };

    // useEffect hook to load superheroes once when the component mounts
    useEffect(() => {
        loadSuperheroes();
    }, []); // Empty dependency array means this runs only once on mount

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Button to reset and show list of superheroes */}
            <div className="d-flex justify-content-around my-5">
                <button className="btn btn-outline-orange w-25" onClick={resetToDefault}>List of Superheroes</button>

                <div className="search-box">
                    <button className="btn-search" onClick={handleClick}><i className="fa fa-search"></i></button>
                    <input type="text" ref={inputRef} className="input-search" placeholder="Type to Search..." />
                </div>

                {/* Button to toggle PostHero form */}
                <button className="btn btn-outline-orange w-25" onClick={togglePostHero}>Create a new Superhero</button>
            </div>

            {/* Conditional rendering for the PostHero component */}
            <div className={`post-hero-container ${showPostHero ? "show" : ""}`}>
                {showPostHero && <PostHero onAdd={handleAddSuperhero} />} {/* Show the PostHero form if toggled */}
            </div>

            {/* GetHero component to display the list of superheroes */}
            <GetHero superheroes={superheroes} />
        </div>
    );
}

export default Main; // Export the Main component for use in other parts of the application
