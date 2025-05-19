import React from "react";
const Plate: React.FC<
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
        d="M18.43 13c.36.517.57 1.147.57 1.828C19 16.58 17.602 18 15.877 18c-.304 0-.599-.044-.877-.127M18.98 10c1.805 1.019 3.02 2.924 3.02 5.106C22 18.361 19.298 21 15.965 21A6.1 6.1 0 0 1 12 19.55"
      />
      <circle
        cx={9}
        cy={10}
        r={4}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={9}
        cy={10}
        r={7}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default Plate;
