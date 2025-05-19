import React from "react";
const Edit_01: React.FC<
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
        d="M5.996 15.002H3.748a1.75 1.75 0 0 0 0 3.5h9.492a1.75 1.75 0 0 1 0 3.5h-2.248"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m9.016 11.54 9.462-9.539a.01.01 0 0 1 .014 0L22 5.466a.01.01 0 0 1 0 .014l-9.47 9.482H9.017z"
      />
    </svg>
  );
};
export default Edit_01;
