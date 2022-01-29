function Technology(props)
{
    return (
        <div className="container card my-2">
            <div className="row">
                <div className="col">
                    <img style={{width: "18rem", height: "10rem"}} className="img-fluid m-2" alt="For project" src={props.imagelink} title={props.imageTitle} />
                    <h3 className="m-2">{props.protitle}</h3>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="lead">{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Technology;