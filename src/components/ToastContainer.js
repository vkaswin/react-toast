import React, { useState, useEffect, useMemo } from "react";
import { EventEmitter, Portal, ToastCard } from "./index";

const positions = [
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
];

const defaultPosition = new Set(positions);

const types = new Set(["success", "error", "warning", "info"]);

export const ToastContainer = () => {
  let [toast, setToast] = useState([]);

  useEffect(() => {
    EventEmitter.on("toast", handleEventEmitter);
    return () => EventEmitter.off("toast");
  }, []);

  const handleEventEmitter = (event) => {
    let { position, type } = event;
    if (!defaultPosition.has(position) && !types.has(type)) return;
    setToast((prev) => [...prev, event]);
  };

  const clearToast = (toastId) => {
    setToast((prev) => prev.filter(({ id }) => id !== toastId));
  };

  const toasts = useMemo(() => {
    return positions.map((placement) =>
      toast.filter(({ position }) => placement == position)
    );
  }, [toast]);

  return (
    <Portal>
      {toasts.map((item, index) => {
        if (item.length === 0) return null;
        return (
          <div
            key={index}
            className="toast-container"
            data-position={positions[index]}
          >
            {item.map((list) => {
              let { id } = list;
              return <ToastCard key={id} {...list} clearToast={clearToast} />;
            })}
          </div>
        );
      })}
    </Portal>
  );
};
