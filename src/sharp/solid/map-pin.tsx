import React from "react";
const MapPin: React.FC<
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
        d="M2 9.25h7.5v3.25h5V9.25H22a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75V10A.75.75 0 0 1 2 9.25m3.497 4.614 3.11 1.814-3.158 2.088 1.103 1.668 3.982-2.632 6.963 4.062 1.008-1.728-2.817-1.643 2.867-1.91-1.109-1.665-3.68 2.454-7.261-4.236z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M13 6.042a2.5 2.5 0 1 0-2 0V11h2z" />
    </svg>
  );
};
export default MapPin;
