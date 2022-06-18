import React, { useState } from "react";
import { ToastContainer, Toast } from "reactjs-toast";

import "reactjs-toast/dist/index.css";

const positions = [
  {
    label: "Top Left",
    value: "top-left",
  },
  {
    label: "Top Center",
    value: "top-center",
  },
  {
    label: "Top Right",
    value: "top-right",
  },
  {
    label: "Bottom Left",
    value: "bottom-left",
  },
  {
    label: "Bottom Center",
    value: "bottom-center",
  },
  {
    label: "Bottom Right",
    value: "bottom-right",
  },
];

const types = [
  {
    label: "Success",
    value: "success",
  },
  {
    label: "Error",
    value: "error",
  },
  {
    label: "Info",
    value: "info",
  },
  {
    label: "Warning",
    value: "warning",
  },
];

const themes = [
  {
    label: "Light",
    value: "light",
  },
  {
    label: "Dark",
    value: "dark",
  },
  {
    label: "Coloured",
    value: "coloured",
  },
];

const App = () => {
  const [toast, setToast] = useState({
    position: "top-right",
    type: "success",
    theme: "light",
    delay: 3000,
    color: "",
    pauseOnHover: false,
    closeIcon: true,
  });

  const onSubmit = () => {
    Toast({
      ...toast,
      message: "Lorem Ipsum is simply dummy text of the printing",
    });
  };

  const handleChange = ({ target: { name, value, checked, type } }) => {
    setToast({ ...toast, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <div>
      <h1>Toast using Javascript and CSS</h1>
      <div className="form-field">
        <div>
          <b>Position</b>
        </div>
        <div id="position-field" className="form-radio">
          {positions.map(({ label, value }, index) => {
            return (
              <div key={index}>
                <input
                  id={`position-${index}`}
                  type="radio"
                  name="position"
                  value={value}
                  onChange={handleChange}
                  checked={toast.position === value}
                />
                <label htmlFor={`position-${index}`}>{label}</label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="form-field">
        <div>
          <b>Type</b>
        </div>
        <div id="type-field" className="form-radio">
          {types.map(({ label, value }, index) => {
            return (
              <div key={index}>
                <input
                  id={`type-${index}`}
                  type="radio"
                  name="type"
                  value={value}
                  onChange={handleChange}
                  checked={toast.type === value}
                />
                <label htmlFor={`type-${index}`}>{label}</label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="form-field">
        <div>
          <b>Theme</b>
        </div>
        <div id="theme-field" className="form-radio">
          {themes.map(({ label, value }, index) => {
            return (
              <div key={index}>
                <input
                  id={`theme-${index}`}
                  type="radio"
                  name="theme"
                  value={value}
                  onChange={handleChange}
                  checked={toast.theme === value}
                />
                <label htmlFor={`theme-${index}`}>{label}</label>
              </div>
            );
          })}
        </div>
      </div>
      <div id="delay-field" className="form-field">
        <div>
          <b>Delay</b>
        </div>
        <div>
          <input
            type="number"
            name="delay"
            value={toast.delay}
            min="1"
            onChange={handleChange}
          />
          <span>ms</span>
        </div>
      </div>
      <div className="form-field">
        <div>
          <b>Color</b>
        </div>
        <div>
          <input
            type="color"
            name="color"
            value={toast.color}
            onChange={handleChange}
          />
        </div>
      </div>
      <div id="checkbox-field" className="form-field">
        <div>
          <input
            type="checkbox"
            id="hover"
            name="pauseOnHover"
            onChange={handleChange}
            checked={toast.pauseOnHover}
          />
          <label htmlFor="hover">Pause On Hover</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="icon"
            name="closeIcon"
            onChange={handleChange}
            checked={toast.closeIcon}
          />
          <label htmlFor="icon">Close Icon</label>
        </div>
      </div>
      <div>
        <button className="btn-toast" onClick={onSubmit}>
          Show Toast
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
