import { useState } from 'react';
import Star from './Star';

function Portfolio() {
  const [selectedImage, setSelectedImage] = useState('');

  const portfolioItems = [
    { id: 1, image: '/assets/images/poert1.png' },
    { id: 2, image: '/assets/images/port2.png' },
    { id: 3, image: '/assets/images/port3.png' },
    { id: 4, image: '/assets/images/poert1.png' },
    { id: 5, image: '/assets/images/port2.png' },
    { id: 6, image: '/assets/images/port3.png' },
  ];

  return (
    <div className="mb-4">
      <div className="pt-4">
        <Star title="portfolio component" color="#2c3e50" />
        <div className="container">
          <div className="row g-5">
            {portfolioItems.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div 
                  className="rounded-3 overflow-hidden position-relative portfolio-item"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-100 rounded-3"
                  />
                  <div className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <div 
        className={`modal-overlay position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center ${selectedImage ? 'd-flex' : 'd-none'}`}
        onClick={() => setSelectedImage('')}
      >
        <div className="modal-content position-relative">
          <img 
            src={selectedImage} 
            alt="" 
            className="img-fluid rounded-3"
            style={{ maxHeight: '80vh' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;