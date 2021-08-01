import React, { useState, useEffect } from "react";
import { ButtonGroup, Button } from "reactstrap";

function OptionSelector3(props) {
  const [option, setOption] = useState(1);
  useEffect(() => {
    props.getSelectedOption(option);
  }, [option]);
  const [encypt_color, decrypt_color, react_color] = [
    "#3e68ff",
    "#3e68ff",
    "#61dbfb",
  ];
  const b3 = (
    <Button
      style={{ background: option === 3 ? react_color : "" }}
      size="lg"
      onClick={() => {
        setOption(3);
      }}
    >
      {props.btn3_value}
    </Button>
  );
  return (
    <div className="shadow-lg mx-3">
      <ButtonGroup style={{ width: "100%" }}>
        <Button
          style={{ background: option === 1 ? encypt_color : "" }}
          size="lg"
          onClick={() => {
            setOption(1);
          }}
        >
          {props.btn1_value}
        </Button>
        <Button
          style={{ background: option === 2 ? decrypt_color : "" }}
          size="lg"
          onClick={() => {
            setOption(2);
          }}
        >
          {props.btn2_value}
        </Button>
        {props.btn3_value ? b3 : <></>}
      </ButtonGroup>
    </div>
  );
}
export default OptionSelector3;
