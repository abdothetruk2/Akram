function Star({ color = 'white' }) {
  return (
    <div className="text-center pt-4" style={{ color }}>
      <h2 className="text-uppercase mb-3 fs-1 fw-bolder">start Framework</h2>
      <div className="d-flex align-items-center justify-content-center mb-3">
        <div className="line me-3" style={{ backgroundColor: color }}></div>
        <i className="fa-solid fa-star"></i>
        <div className="line ms-3" style={{ backgroundColor: color }}></div>
      </div>
    </div>
  );
}

export default Star;