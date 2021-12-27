function Button(props) {
    return (
        <div>
            <a href={"#" + props.buttonlink} className="btn btn-primary m-5">{props.buttonname}</a>
        </div>
    );
}

export default Button;