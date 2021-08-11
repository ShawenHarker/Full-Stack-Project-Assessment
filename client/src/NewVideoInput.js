import React from "react";

const NewVideoInput = () => {
    return (
      <div>
        <form>
          <div className="form-wrapper">
            <div className="form-group">
              <label htmlFor="title">Add Your Video Title Here</label>
              <input
                type="text"
                className="form-control"
                name="title"
                id="title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="url">Paste Your YouTube URL Here</label>
              <input type="text" className="form-control" name="url" id="url" />
            </div>
          </div>
          <button className="btn delete">Submit</button>
        </form>
      </div>
    );
}

export default NewVideoInput;