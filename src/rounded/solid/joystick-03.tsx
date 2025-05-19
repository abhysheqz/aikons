import React from "react";
const Joystick_03: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4.246 5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.996 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1M17.996 13a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.342 15.25h7.317c1.088 0 1.844 0 2.535.285.692.287 1.226.822 1.995 1.591l.804.805c.472.495.757 1.125.757 2.2a2.75 2.75 0 0 1-2.617 2.616H4.867A2.75 2.75 0 0 1 2.25 20.13c0-1.115.285-1.705.757-2.2l.803-.805c.77-.77 1.304-1.304 1.996-1.59.691-.287 1.447-.287 2.536-.286"
      />
    </svg>
  );
};
export default Joystick_03;
