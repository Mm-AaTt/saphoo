import React from "react";

function SeasonalReadings(){
    return (
        <section className="seasonal-readings">
           <h2>Seasonal Recommendations</h2> 
           {/* Replace with your seasonal reading content */}
            <div className="reading-card">
                <h3>Summer Reads</h3>
                <p>Escape into these captivating stories perfect for a warm summer day.</p>
                {/* Add image and link to book details */}
                <img src="..." alt="Summer Read Book Cover" />
                <a href="#">Learn More</a>
            </div>
            {/* Add more reading cards for other seasons */}
        </section>
    );
}

export default SeasonalReadings;