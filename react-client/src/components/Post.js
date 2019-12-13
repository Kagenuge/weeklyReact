import React from 'react';
import Button from './Button';

const Post = ({ title, descr, ttm, ts, src, startl, inprog, compdate, id, handleDelete, handleModify }) => {
  return (
    <div className="entry">
      <h3>{title}</h3>
      <p>{descr}</p>
      <p>{ttm}h</p>
      <p>{ts}h</p>
      <p>{src}</p>
      <p>Started Learning On: {startl}</p>
      <p>{inprog}</p>
      <p>Completion Date: {compdate}</p>
      <Button handleClick={handleModify} buttonText="Modify" buttonClass="btn btn-dark" id={id} />
      <Button handleClick={handleDelete} buttonText="Delete" buttonClass="btn btn-danger" id={id} />
    </div>
  )
};

export default Post;