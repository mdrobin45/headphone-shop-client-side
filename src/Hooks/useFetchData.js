import { useEffect, useState } from "react";

const useFetchData = () =>
{
    // Initialize state
    const [headPhones, setHeadphones] = useState();
    const [testimonials, setTestimonials] = useState();
    
    // Get HeadPhones
    useEffect(() =>
    {
        fetch('/Shop.JSON')
            .then(res => res.json())
            .then(data => setHeadphones(data));
    }, [])
    

    // Testimonial
    useEffect(() =>
    {
        fetch('/Testimonial.JSON')
            .then(res => res.json())
            .then(data => setTestimonials(data));
    }, [])
    

    // Return Data
    return {
        testimonials,
        headPhones
    }
};

export default useFetchData;