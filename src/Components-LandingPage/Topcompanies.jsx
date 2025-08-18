import React, { useEffect, useState } from 'react';
import './Topcompanies.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import axios from 'axios';

const CustomPrevArrow = ({ onClick }) => (
  <div className="custom-arrow custom-prev" onClick={onClick}>
    &#8249;
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="custom-arrow custom-next" onClick={onClick}>
    &#8250;
  </div>
);

export const Topcompanies = () => {
  const [topCompaniesList, setTopCompaniesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  useEffect(() => {
    const fetchTopCompanies = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/companies/');
        setTopCompaniesList(response.data);
      } catch (err) {
        setError('Failed to fetch companies');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTopCompanies();
  }, []);

  if (loading) return <p className="loading-text">Loading companies...</p>;
  if (error) return <p className="error-text">{error}</p>;

  return (
     <section className="carousel-wrapper">
        <h2 className="carousel-title">Top Companies Hiring Now</h2>
        <Slider {...settings}>
          {topCompaniesList.map((company)=>(
            <div className="carousel-card" key={company.id}>
              {/* <img className="carousel-company-logo" src={company.logo} alt={company.name}/> */}
              <div className="carousel-card-header">
                <h3>{company.name}</h3>
                {/* <p><span className="star">★</span> {company.rating} | {company.reviews} reviews</p> */}
              </div>
              <p className="carousel-desc">{company.industry}</p>
               <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="carousel-view-jobs">Visit Website</button>
            </a>
              
            </div>
          ))}
        </Slider>
        <div className="carousel-view-all-wrapper">
          <button className="carousel-view-all">View All Companies</button>
        </div>
      </section>
  );
};
