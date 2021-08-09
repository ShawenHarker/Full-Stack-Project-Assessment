import React from "react";

const NewVideoInput = () => {
    return (
      <div>
        <form>
          <div>
            <label for="title">What's The Video Title</label>
            <input type="text" name="title" id="title" value="title" />
          </div>
          <div>
            <label for="url">Paste Your URL Here</label>
            <input type="text" name="url" id="url" value="url" />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
}

export default NewVideoInput;