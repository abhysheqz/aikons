import React from "react";
const Tag_02: React.FC<
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
        d="m8 14 2.001 2.004M18 6l4-4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9.586 20.586-6.172-6.172a2 2 0 0 1 0-2.828l7-7A2 2 0 0 1 11.828 4H20v8.172a2 2 0 0 1-.586 1.414l-7 7a2 2 0 0 1-2.828 0Z"
      />
    </svg>
  );
};
export default Tag_02;
