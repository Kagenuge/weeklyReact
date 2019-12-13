import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

// välitä data ylöspäin propsi-funktiokutsun parametrissa
const Forms = () => {
  const [checkbox, setCheckbox] = useState(Boolean);
  const [formdata, setFormdata] = useState();

  const handleChange = (change) => {
    if (change.target.name === 'timetomaster' || change.target.name === 'timespent') {
      setFormdata({ ...formdata, [change.target.name]: parseInt(change.target.value), 'inprogress': checkbox });
      console.log(formdata)
    } else {
      setFormdata({ ...formdata, [change.target.name]: change.target.value, 'inprogress': checkbox });
      console.log(formdata)
    }
  }

  const checkBoxToggle = () => {
    if (checkbox === false) {
      setCheckbox(true)
    } else {
      setCheckbox(false)
    }
  };

  const formvalidation = (event) => {
    event.preventDefault();
    if (!formdata.title) {
      alert("Please enter a title before submitting!")
    } else {
      console.log(formdata)
      fetch("/api/topics", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formdata)
      });
      alert('Post Created!')
    }
  }

  return (
    <div className="App">
      <Form className="Form-elements">
        <Form.Row>
          <Form.Group as={Col} controlId="formGridTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control name="title" onChange={handleChange} type="text" placeholder="Enter post title" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control name="description" onChange={handleChange} placeholder="..." />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridTimeToMaster">
            <Form.Label>Time To Master</Form.Label>
            <Form.Control type="number" name="timetomaster" onChange={handleChange} placeholder="Hours" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridTimeSpent">
            <Form.Label>Time Spent</Form.Label>
            <Form.Control name="timespent" type="number" onChange={handleChange} placeholder="10 000h?" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridSources">
            <Form.Label>Sources</Form.Label>
            <Form.Control name="source" onChange={handleChange} placeholder="http://....." />
          </Form.Group>
        </Form.Row>

        Started on
        <br />
        <input onChange={handleChange} name="startlearningdate" id="ttm" className="datepicker" type="date" />
        <br />
        Completion date
        <br />
        <input onChange={handleChange} name="completiondate" id="ts" className="datepicker" type="date" />
        <br />
        <br />

        <Form.Group id="formGridCheckbox">
          <Form.Check name="inprogress" onClick={checkBoxToggle} type="checkbox" label="In Progress" />
        </Form.Group>

        <Button variant="success" type="submit" onClick={formvalidation}>
          Create Post
        </Button>

      </Form>
    </div>
  )
};

export default Forms;