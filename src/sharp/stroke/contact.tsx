import React from "react";
const Contact: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.5 5h-17v17h17z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 19H8c0-2.455 1.79-4 4-4s4 1.545 4 4"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M8 5V2M16 5V2" />
    </svg>
  );
};
export default Contact;
