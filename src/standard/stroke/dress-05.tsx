import React from "react";
const Dress_05: React.FC<
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
        d="m6.5 8-2 1.5L2 6l3.5-3.5 3-.5L12 5l3.5-3 3 .5L22 6l-2.5 3.5-2-1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 6.5c.242.363.455.815.639 1.29.79 2.048.586 4.309.054 6.438l-1.467 5.434c-.13.48.114.98.583 1.147C7.045 21.25 9.523 22 12 22c2.805 0 5.119-.737 6.25-1.178.444-.172.66-.651.537-1.11l-1.48-5.483c-.532-2.13-.736-4.39.054-6.438.184-.475.397-.927.639-1.29"
      />
    </svg>
  );
};
export default Dress_05;
