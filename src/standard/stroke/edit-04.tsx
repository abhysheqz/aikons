import React from "react";
const Edit_04: React.FC<
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
        d="m20.707 5.879-2.586-2.586a1 1 0 0 0-1.414 0L3.293 16.707a1 1 0 0 0-.293.707V21h3.586a1 1 0 0 0 .707-.293L20.707 7.293a1 1 0 0 0 0-1.414M12 21h6M14.5 5.5l4 4"
      />
    </svg>
  );
};
export default Edit_04;
