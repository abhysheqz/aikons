import React from "react";
const AddCircleHalfDot: React.FC<
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
        d="M12 8v8m4-4H8M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M2.5 8.5a11.6 11.6 0 0 1 1.356-2.323m2.32-2.321A11.6 11.6 0 0 1 8.5 2.5"
      />
    </svg>
  );
};
export default AddCircleHalfDot;
