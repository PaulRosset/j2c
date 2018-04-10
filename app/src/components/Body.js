import React from "react";
import { Form, TextArea } from "semantic-ui-react";

function Body(props) {
  return (
    <div>
      <Form>
        <TextArea
          placeholder="Place your json"
          style={{ height: "100vh", width: "50%", float: "left" }}
          onChange={props.jsonentry}
          value={props.value}
        />
      </Form>
      <Form>
        <TextArea
          readOnly
          placeholder="Your compiled CSV"
          style={{ height: "100vh", width: "50%", float: "right" }}
          value={props.csvresult}
        />
      </Form>
    </div>
  );
}

export default Body;
