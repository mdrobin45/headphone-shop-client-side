import { useEffect, useState } from "react";

const useFetchData = () =>
{
    // Initialize state
    const [headPhones, setHeadphones] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    // Get HeadPhones
    useEffect(() =>
    {
        fetch('https://headphone-shop-r.herokuapp.com/shop')
            .then(res => res.json())
            .then(data =>
            {
                setHeadphones(data);
                setLoading(false);
            });
        setLoading(true);
    }, []);


    // Testimonial
    useEffect(() =>
    {
        fetch('https://headphone-shop-r.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data =>
            {
                setTestimonials(data);
                setLoading(false);
            });
        setLoading(true);
    }, []);


    // Return Data
    return {
        testimonials,
        headPhones,
        loading
    };
};

export default useFetchData;