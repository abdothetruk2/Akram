import Star from './Star';

function About() {
  return (
    <div className="about text-white d-flex justify-content-center align-items-center">
      <div>
        <Star />
        <div className="container">
          <div className="row px-5">
            <div className="col-md-6 ps-md-5">
              <p>
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
              </p>
            </div>
            <div className="col-md-6 pe-5">
              <p>
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;