import React from 'react'

export const Portfolioprop = (props) => {
    return (
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img"><img src={props.imgsrc} className="img-fluid" alt=""/></div>
            <div className="portfolio-info">
              <h4>{props.head}</h4>
              <p>{props.para}</p>
              <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
              <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
        </div>
    )
}
