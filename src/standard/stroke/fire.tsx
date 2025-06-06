import React from "react";
const Fire: React.FC<
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
        d="M4.968 10.652C7.896 7.167 10.004 5.182 10.874 2c4.49 2.498 10.02 8.857 9.604 13.583-.334 3.782-3.11 5.614-6.489 6.417 0 0 2.156-2.965 2.56-5.219.366-3.694-2.317-6.114-3.628-6.764 0 0 .821 3.483-1.005 5.492C10.85 12.036 8.4 12.014 8.4 12.014c1.005 2.497-1.227 3.556-1.472 5.277C6.432 20.785 8.982 22 8.982 22c-6.625-2.337-6.262-8.999-4.013-11.348Z"
      />
    </svg>
  );
};
export default Fire;
