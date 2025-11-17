import { useState, useEffect } from "react";
import "./ripple.css"

const RippleButton = ({ children, className, ...props }) => {
  const [rippleArray, setRippleArray] = useState([]);

  useEffect(() => {
    let timer;
    if (rippleArray.length > 0) {
      timer = setTimeout(() => {
        setRippleArray([]);
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [rippleArray.length]);

  const createRipple = (event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple = { x, y, size };
    setRippleArray([newRipple]);
  };

  return (
    <button
      {...props}
      onClick={(e) => {
        createRipple(e);
        props.onClick && props.onClick(e);
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {rippleArray.map((ripple, index) => (
        <span
          key={index}
          className="absolute bg-white/50 rounded-full animate-ripple"
          style={{
            width: ripple.size,
            height: ripple.size,
            top: ripple.y,
            left: ripple.x,
          }}
        />
      ))}
      {children}
    </button>
  );
};

export default RippleButton;
