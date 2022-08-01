import React from "react";
import Popup from "reactjs-popup";
import BurgerIcon from "./Burgericon";
import Menu from "./Menu";



const Toggle = () => (
  <div>
    <Popup
      modal
      overlayStyle={{ background: "rgba(255,255,255,0.98" }}
      closeOnDocumentClick={false}
      trigger={open => <BurgerIcon open={open} />}
    >
      {close => <Menu close={close} />}
    </Popup>
  </div>
);

export default Toggle;