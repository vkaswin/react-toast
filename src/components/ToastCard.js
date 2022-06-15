import React, { useRef } from "react";
import PropTypes from "prop-types";

export const ToastCard = ({
  id,
  type,
  message,
  delay = 3000,
  closeIcon,
  pauseOnHover,
  theme,
  clearToast,
  color,
}) => {
  let toastRef = useRef();

  let progressRef = useRef();

  const handleMouseEnter = () => {
    progressRef.current.style["animation-play-state"] = "paused";
  };

  const handleMouseLeave = () => {
    progressRef.current.style["animation-play-state"] = "running";
  };

  const handleAnimationEnd = ({ animationName }) => {
    if (animationName == "toast_progress") {
      hideToast();
      return;
    }

    if (animationName.includes("slideOut")) {
      clearToast(id);
      return;
    }
  };

  const hideToast = () => {
    toastRef.current.classList.add("hide");
  };

  return (
    <div
      ref={toastRef}
      className="toast"
      data-theme={theme}
      data-type={type}
      {...(color && { "data-custom": true })}
      {...(color && { style: { "--custom-bg": color } })}
      onMouseEnter={() => pauseOnHover && handleMouseEnter()}
      onMouseLeave={() => pauseOnHover && handleMouseLeave()}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className="icon">
        <i></i>
      </div>
      <div>
        <span>{message}</span>
      </div>
      <div className="close-btn">
        {closeIcon && <button onClick={hideToast}>&#xD7;</button>}
      </div>
      <div
        ref={progressRef}
        className="progress"
        style={{ "--progress-animation": `${delay}ms` }}
      ></div>
    </div>
  );
};

ToastCard.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "error", "warning", "info"]),
  message: PropTypes.string.isRequired,
  delay: PropTypes.number,
  closeIcon: PropTypes.bool,
  pauseOnHover: PropTypes.bool,
  theme: PropTypes.oneOf(["light", "dark", "coloured"]),
};

ToastCard.defaultProps = {
  type: "info",
  delay: 3000,
  closeIcon: true,
  pauseOnHover: true,
  theme: "light",
};
