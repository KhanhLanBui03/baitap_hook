const Card = (props) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{props.firstName} {props.lastName}</h5>
        <p className="card-text"><strong>Phone:</strong> {props.phone}</p>
        <p className="card-text"><strong>Address:</strong> {props.address }</p>
        <button 
          className="btn btn-danger"
          onClick={props.onDelete}
        >
          Xóa
        </button>
      </div>
    </div>
  );
};
export default Card;
