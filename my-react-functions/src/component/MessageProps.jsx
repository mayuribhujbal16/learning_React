const MessageProps = ({title,description}) => {

    return(
        <>
        <div className="card shadow-sm p-3 mb-4">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
      </div>
    </div>
        </>
    )
};
export default MessageProps