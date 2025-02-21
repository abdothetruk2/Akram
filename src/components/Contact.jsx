import Star from './Star';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="mb-4">
      <div className="pt-3 container">
        <Star title="contact section" color="#2c3e50" />
        <form onSubmit={handleSubmit} className="w-50 p-3 mx-auto mt-5">
          <div className="mb-4">
            <label htmlFor="userName" className="position-relative top-0">
              User Name :
            </label>
            <input
              id="userName"
              type="text"
              placeholder="userName"
              name="userName"
              className="form-control border-0 border-bottom py-3 position-relative"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="userAge" className="position-relative top-0">
              User Age :
            </label>
            <input
              id="userAge"
              type="text"
              placeholder="userAge"
              name="userAge"
              className="form-control border-0 border-bottom py-3 position-relative"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="userEmail" className="position-relative top-0">
              User Email :
            </label>
            <input
              id="userEmail"
              type="email"
              placeholder="userEmail"
              name="userEmail"
              className="form-control border-0 border-bottom py-3 position-relative"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="userPassword" className="position-relative top-0">
              userPassword :
            </label>
            <input
              id="userPassword"
              type="password"
              placeholder="userPassword"
              name="userPassword"
              className="form-control border-0 border-bottom py-3 position-relative"
            />
          </div>
          <button
            type="submit"
            className="btn mt-4 text-white"
            style={{ backgroundColor: '#1abc9c' }}
          >
           Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;