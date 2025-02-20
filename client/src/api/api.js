const URL = 'http://localhost:3030/'; // Set the base URL for the API

// Function to get all superheroes
export const getSuperheroes = async () => {
    try {
        // Make a GET request to fetch superheroes from the API
        const res = await fetch(`${URL}`);
        
        // Parse the response as JSON
        const data = await res.json();
        
        // Return the superheroes data
        return data;
    } catch (error) {
        // Alert and log an error if the request fails
        alert('Error loading superheroes! 😒');
        console.error('Error:', error);
    }
};

// Function to create a new superhero
export const postSuperheroes = async (superhero) => {
    try {
        // Make a POST request to create a new superhero
        const res = await fetch(`${URL}create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Indicate that we are sending JSON
            },
            body: JSON.stringify(superhero), // Convert the superhero object to a JSON string
        });

        // Parse the response as JSON
        const data = await res.json();

        // If the response is not ok, throw an error
        if (!res.ok) {
            throw new Error(data.message || 'Creation failed! 😕');
        }

        // Alert success message and return the new superhero data
        alert(data.message || 'Superhero successfully added! 💪');
        return data;
    } catch (error) {
        // Alert and log an error if the request fails
        alert(`Error: ${error.message}`);
        console.error('Error:', error);
    }
};
