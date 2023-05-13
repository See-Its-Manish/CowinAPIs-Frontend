function FormContainer() {

    return(
        <>
        <div className="btn-group w-100 " role="group" aria-label="Basic radio toggle  button group">
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off"/>
            <label className="btn btn btn-outline-danger button_left" for="btnradio1">Search Centers</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
            <label className="btn btn btn-outline-danger button_middle" for="btnradio2">Set Reminder</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
            <label className="btn btn btn-outline-danger button_right" for="btnradio3">Download Certificate</label>
        </div>

        
        </>
    );

}


export default FormContainer;