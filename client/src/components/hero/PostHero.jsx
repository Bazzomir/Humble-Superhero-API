import React, { useState } from "react";

const PostHero = ({ onAdd }) => {
    const [formData, setFormData] = useState({
        name: '',
        superpower: '',
        humilityScore: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({
            ...formData,
            humilityScore: parseInt(formData.humilityScore, 10)
        })
        setFormData({ name: '', superpower: '', humilityScore: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <form onSubmit={handleSubmit} className="form row p-4 border border-shadow rounded justify-content-center align-items-center text-center gap-5">
            <h2 className="text-xl font-bold mb-0">Add New Superhero</h2>
            <div>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Superhero Name" className="input-create" required />
            </div>
            <div>
                <input type="text" name="superpower" value={formData.superpower} onChange={handleChange} placeholder="Superpower" className="input-create" required />
            </div>
            <div>
                <input type="number" name="humilityScore" value={formData.humilityScore} onChange={handleChange} placeholder="Humility Score (0-10)" min="0" max="10" className="input-create" required />
            </div>
            <button type="submit" className="btn btn-outline-orange w-25">
                Add Superhero
            </button>
        </form >
    );
};

export default PostHero;