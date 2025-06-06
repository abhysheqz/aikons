import React from "react";
const Thermometer: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.017 11.104A3 3 0 0 0 6 13.355v2.261a1 1 0 0 1-.257.67l-3.454 3.833a1.127 1.127 0 0 0 1.592 1.592l3.834-3.454A1 1 0 0 1 8.384 18h2.26a3 3 0 0 0 2.252-1.017l8.605-9.77a2.016 2.016 0 0 0-.091-2.754l-1.87-1.868a2.016 2.016 0 0 0-2.752-.092zM17 7l-2 2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8 10 2 1.5-.651.869a1.63 1.63 0 0 0 2.282 2.283L12.5 14l1.5 2"
      />
    </svg>
  );
};
export default Thermometer;
