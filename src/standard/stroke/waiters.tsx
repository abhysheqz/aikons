import React from "react";
const Waiters: React.FC<
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
        d="M16.5 21v-6a2 2 0 0 0-2-2H14c-.5 5-4.5 6-4.5 6s-4-1-4.5-6h-.5a2 2 0 0 0-2 2v6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9.5 13.5 2-1v2zm0 0-2-1v2zM12.5 6.938v-.875C12.5 4.37 11.157 3 9.5 3s-3 1.371-3 3.063v.875C6.5 8.628 7.843 10 9.5 10s3-1.371 3-3.062M21.5 21v-6a2 2 0 0 0-2-2H19M14.5 3.174a3 3 0 0 1 1-.174c1.657 0 3 1.371 3 3.063v.875c0 1.69-1.343 3.062-3 3.062a3 3 0 0 1-1-.174"
      />
    </svg>
  );
};
export default Waiters;
