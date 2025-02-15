const URL = 'http://localhost:3030/';

export const getSuperheroes = async () => {
    const res = await fetch(`${URL}`);
    return res.json();
}

export const postSuperheroes = async (superhero) => {
    const res = await fetch(`${URL}create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(superhero),
    });
    return res.json();
}