import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import useAPI from '../../../../Hooks/useAPI';
import SingleTestimonial from './SingleTestimonial';
import SectionHeader from '../../../SectionHeader/SectionHeader';

const Testimonial = () =>
{
    const { testimonials } = useAPI().fetchData;
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
    return (
        <div className='py-20 container bg-gray-100'>
            <div className=' text-center py-10'>
               <SectionHeader mainTitle='What They Say' subTitle='CUSTOMER REVIEWS'/> 
            </div>
            
            <Slider {...settings}>
                {
                    testimonials?.map(item=><SingleTestimonial key={item._id} item={item}/>)
                }
            </Slider>
        </div>
    );
};

export default Testimonial;