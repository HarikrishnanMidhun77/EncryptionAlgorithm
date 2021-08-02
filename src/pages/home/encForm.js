import React, { useState, useEffect } from "react";
import {
  Button,
  FormFeedback,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import { ecncryptText } from "../../functions/encrypt";
export default function EncForm() {
  const [text, setText] = useState("");
  const [pswd, setPswd] = useState("");
  const [pswdInvalid, setPswdInvalid] = useState(false);
  const [textInvalid, setTextInvalid] = useState(false);
  const [res, setRes] = useState("");
  // useEffect(() => {
  //   setRes(res);
  // }, [res]);
  const handlePswd = (p) => {
    setPswd(p);
    if (p.length > 9 || p.length <= 4) {
      setPswdInvalid(true);
    } else {
      setPswdInvalid(false);
    }
  };

  const handleText = (t) => {
    setText(t);
    if (text.length < 0) {
      setTextInvalid(true);
    } else {
      setTextInvalid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pswd.trim().length === 0) {
      setPswdInvalid(true);
    }
    if (text.trim().length === 0) {
      setTextInvalid(true);
    }
    if (!(pswdInvalid && textInvalid)) {
      console.log(`text`, text);
      console.log(`pswd`, pswd);
      setRes(ecncryptText(text, pswd));
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmit} className="width-auto">
        <FormGroup>
          <Label for="exampleText">Text to encrypt</Label>

          <Input
            type="textarea"
            value={text}
            invalid={textInvalid}
            onChange={(e) => handleText(e.target.value)}
            name="text"
            id="exampleText"
          />
          <FormFeedback>Please enter valid text</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>

          <Input
            type="text"
            invalid={pswdInvalid}
            value={pswd}
            onChange={(e) => handlePswd(e.target.value)}
            name="password"
            id="password"
            placeholder="password"
          />
          <FormFeedback>
            Password legth must be between 4 to 9 characters
          </FormFeedback>
        </FormGroup>
        <FormGroup>
          <Input
            style={{
              backgroundColor: "#3e68ff",
              color: "#fff",
              borderRadius: "8px",
            }}
            className="button"
            type="submit"
            value="Encrypt"
            name="encrypt"
            id="encrypt"
            placeholder="encrypt"
          />
        </FormGroup>
      </Form>
      <Label for="exampleText">Encrypted Text</Label>
      <Input type="textarea" value={res} disabled={true} name="res" id="res" />
    </div>
  );
}
