import React from "react";
import { useForm } from "react-hook-form";

const AddNewVideo = ({ Data, setData }) => {
  const preloadedValues = "";
  const { register, reset, handleSubmit } = useForm({
    defaultValues: preloadedValues,
  });

  const onSubmit = (event) => {
    
    let newVideo = {
      id: Data.length,
      title: event.title,
      url: event.url,
      rating: 0,
    };
    setData([...Data, newVideo]);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-wrapper">
          <div className="form-group">
            <label htmlFor="title">Add Your Video Title Here</label>
            <input
              type="text"
              className="form-size-control"
              {...register("title")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="url">Paste Your YouTube URL Here</label>
            <input type="text" className="form-size-control" {...register("url")} />
          </div>
        </div>
        <button className="btn delete">Submit</button>
      </form>
    </div>
  );
};

export default AddNewVideo;