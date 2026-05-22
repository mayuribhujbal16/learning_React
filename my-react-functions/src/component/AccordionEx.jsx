const AccordionEx =({id,title,content}) => {
    return(
        <>

  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} 
      >
        {title}
      </button>
    </h2>
    <div id={`collapse${id}`} className="accordion-collapse collapse" data-bs-parent="#accordionEx">
      <div className="accordion-body">
        {content}
      </div>
    </div>
  </div>
  

        </>
    );
};
export default AccordionEx;