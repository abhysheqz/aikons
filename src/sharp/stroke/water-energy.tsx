import React from "react";
const WaterEnergy: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M17.253 17v2.917H20.5M6.722 7V4.1H3.5m6.389-1.365a9.5 9.5 0 0 1 7.966 16.747m-3.744 1.783a9.5 9.5 0 0 1-7.84-16.843"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M12 16a3.5 3.5 0 0 0 3.5-3.5C15.5 10 12 7 12 7s-3.5 3-3.5 5.5A3.5 3.5 0 0 0 12 16Z"
      />
    </svg>
  );
};
export default WaterEnergy;
