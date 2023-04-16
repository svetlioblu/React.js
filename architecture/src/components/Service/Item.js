

export const Item = ({ label, icon,
    description, _id,
    detilesTitle, detailsImg,
    detailsText, onDetailsClick }) => {

    return (
        <div className="col-md-3 service service-2">
            <div className="service-in img-hover-2 equal-height-column">
                <span aria-hidden="true" className={`icon-${icon} icon`}></span>
                {/* Up to 16 char */}
                <h3>{label}</h3>
                <p>{description}</p>
                <button className="service-btn" data-toggle="modal" data-target="#myModal" onClick={() => onDetailsClick(_id, detailsImg, detilesTitle, detailsText)}>Read More</button>
            </div>
        </div>
    )
}