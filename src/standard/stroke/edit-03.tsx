import React from "react";
const Edit_03: React.FC<
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
        d="M3.938 15.623 3 21l5.377-.939a2 2 0 0 0 1.07-.555L20.561 8.392a1.5 1.5 0 0 0 0-2.121l-2.832-2.832a1.5 1.5 0 0 0-2.121 0L4.494 14.553a2 2 0 0 0-.556 1.07M14 6l4 4"
      />
    </svg>
  );
};
export default Edit_03;
