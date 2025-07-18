import React from 'react';

export default function UpdatePage() {
  return (
    <div className="container mt-5">
      <h2>Updates</h2>
      <h5>Zune Nguyen posted 3 new listings</h5>
      <div className="row justify-content-center mt-4">
        <div className="col-md-2 m-3">
          <img 
            src="https://is4.revolveassets.com/images/p4/n/uv/SNYL-WH15_V3.jpg" 
            alt="Listing 1" 
            className="img-fluid" 
          />
        </div>
        <div className="col-md-2 m-3">
          <img 
            src="https://is4.revolveassets.com/images/p4/n/uv/TONR-WZ207_V2.jpg" 
            alt="Listing 2" 
            className="img-fluid" 
          />
        </div>
        <div className="col-md-2 m-3">
          <img 
            src="https://is4.revolveassets.com/images/p4/n/uv/35MR-WA4_V1.jpg" 
            alt="Listing 3" 
            className="img-fluid" 
          />
        </div>
      </div>
    </div>
  );
}
