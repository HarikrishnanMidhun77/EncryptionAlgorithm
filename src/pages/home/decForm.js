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
import { decryptText } from "../../functions/decrypt";
export default function DecForm() {
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
    if (p.length > 10 || p.length <= 4) {
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
      setRes(decryptText(text, pswd));
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmit} className="width-auto">
        <FormGroup>
          <Label for="exampleText">Text to decrypt</Label>

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
            Password legth must be between 4 to 10 characters
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
            value="Decrypt"
            name="decrypt"
            id="decrypt"
            placeholder="decrypt"
          />
        </FormGroup>
      </Form>
      <Label for="exampleText">Decrypted Text</Label>
      <Input type="textarea" value={res} disabled={false} name="res" id="res" />
    </div>
  );
}
