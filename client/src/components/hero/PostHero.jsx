import React, { useState } from "react"; // Import React and useState hook

// PostHero component to handle creating a new superhero
const PostHero = ({ onAdd }) => {
    // State to manage form data (name, superpower, and humility score)
    const [formData, setFormData] = useState({
        name: '',
        superpower: '',
        humilityScore: '',
    });

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh on form submit
        onAdd({
            ...formData, // Spread the form data to pass to parent component
            humilityScore: parseInt(formData.humilityScore, 10) // Convert humilityScore to integer
        })
        // Reset form fields after submission
        setFormData({ name: '', superpower: '', humilityScore: '' });
    };

    // Function to handle changes in form fields
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value, // Update formData for the changed field
        })
    }

    return (
        // Form element to collect superhero details
        <form onSubmit={handleSubmit} className="form row p-4 border border-shadow rounded justify-content-center mx-auto gap-5">
            <h2 className="text-xl font-bold mb-0 text-center">Add New Superhero</h2>
            
            {/* Input field for superhero name */}
            <div className="text-center">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Superhero Name" className="form-control input-create mx-auto" required />
            </div>

            {/* Input field for superhero superpower */}
            <div className="text-center">
                <input type="text" name="superpower" value={formData.superpower} onChange={handleChange} placeholder="Superpower" className="form-control input-create mx-auto" required />
            </div>

            {/* Input field for humility score (number between 0 and 10) */}
            <div className="text-center">
                <input type="number" name="humilityScore" value={formData.humilityScore} onChange={handleChange} placeholder="Humility Score (0-10)" min="0" max="10" className="form-control input-create mx-auto" required />
            </div>

            {/* Submit button to add the new superhero */}
            <button type="submit" className="btn btn-outline-orange w-25">
                Add Superhero
            </button>
        </form>
    );
};

export default PostHero; // Export PostHero component for use in other parts of the app
