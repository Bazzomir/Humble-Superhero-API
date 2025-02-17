const URL = 'http://localhost:3030/';

export const getSuperheroes = async () => {
    try {
        const res = await fetch(`${URL}`);
        const data = await res.json();
        return data;
    } catch (error) {
        alert('Error loading superheroes! 😒');
        console.error('Error:', error);
    }
};

export const postSuperheroes = async (superhero) => {
    try {
        const res = await fetch(`${URL}create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(superhero),
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || 'Creation failed! 😕');
        }

        alert(data.message || 'Superhero successfully added! 💪');
        return data;
    } catch (error) {
        alert(`Error: ${error.message}`);
        console.error('Error:', error);
    }
};