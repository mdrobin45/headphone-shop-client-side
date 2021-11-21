import { useEffect, useState } from "react";

const useFetchData = () =>
{
    // Initialize state
    const [headPhones, setHeadphones] = useState([]);
    const [testimonials, setTestimonials] = useState([]);


    // Get HeadPhones
    useEffect(() =>
    {
        fetch('https://headphone-shop-r.herokuapp.com/shop')
            .then(res => res.json())
            .then(data => setHeadphones(data));
    }, []);


    // Testimonial
    useEffect(() =>
    {
        fetch('https://headphone-shop-r.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setTestimonials(data));
    }, []);


    // Return Data
    return {
        testimonials,
        headPhones
    };
};

export default useFetchData;