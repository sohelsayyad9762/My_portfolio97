import React from "react";
import Projectss from "./Data/projects.json";

const Project = () => {
  return (
    <>
      <div className="container projects my-3" id="Project">
        <h1 id="h10">Projects</h1>
        <div className="row d-flex justify-content-center">
          {Projectss.map((data) => (
            <>
              <div
                key={data.id}
                className="my-3 col-sm-6 col-md-4 col-lg-3 mx-3"
                 data-aos="flip-left"
                data-aos-duration="1000"
              >
                <div className="card" style={{ width: "18rem" }}>
                  <img src={data.imageSrc} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                    <a href=" " className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
