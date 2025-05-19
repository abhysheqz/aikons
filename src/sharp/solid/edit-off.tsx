import React from "react";
const EditOff: React.FC<
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
        d="M21.336 22.75 1.25 2.664 2.664 1.25 22.75 21.336zM22 8l-6-6-5.233 5.232 6 6z"
      />
      <path fill="currentColor" d="M2 16v6h6l7-7-6-6z" />
    </svg>
  );
};
export default EditOff;
