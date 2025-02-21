import Star from './Star';

function Home() {
  return (
    <div className="home d-flex justify-content-center align-items-center text-white">
      <div className="text-center">
        <img src="/assets/images/avataaars.svg" alt="avatar" className="mb-3" />
        <Star />
        <div>Graphic Artist - Web Designer - Illustrator</div>
      </div>
    </div>
  );
}

export default Home;