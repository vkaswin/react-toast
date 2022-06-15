import { EventEmitter } from "./index";

export const Toast = ({
  type,
  message = "",
  delay = 3000,
  position = "top-right",
  pauseOnHover,
  closeIcon = true,
  theme = "light",
  color = null,
}) => {
  EventEmitter.emit("toast", {
    id: uuidv4(),
    type,
    message,
    delay,
    position,
    pauseOnHover,
    closeIcon,
    theme,
    color,
  });
};

const uuidv4 = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};
