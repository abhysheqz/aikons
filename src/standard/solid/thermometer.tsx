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
        fill="currentColor"
        fillRule="evenodd"
        d="m20.248 1.883 1.869 1.87a3.016 3.016 0 0 1 .137 4.118l-.002.002-7.247 8.228-1.905-2.55a.75.75 0 0 0-1.05-.151l-.87.651a.88.88 0 0 1-1.232-1.232l.651-.869a.75.75 0 0 0-.148-1.049L7.909 8.986l8.218-7.238.002-.002a3.016 3.016 0 0 1 4.119.137M6.76 9.998l-.404.356A4 4 0 0 0 5 13.355v2.261L1.546 19.45a2.127 2.127 0 0 0 3.004 3.004L8.384 19h2.26a4 4 0 0 0 3.002-1.356l.346-.393-1.644-2.2-.267.2a2.38 2.38 0 0 1-3.333-3.332l.202-.27zm10.947-3.705a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Thermometer;
