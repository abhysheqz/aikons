import React from "react";
const Party: React.FC<
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
        d="M7.812 6.644 2.081 20.562c-.352.854.502 1.708 1.356 1.357l13.919-5.731a1.04 1.04 0 0 0 .34-1.696L9.507 6.305a1.04 1.04 0 0 0-1.696.339M6.5 10.5l7 7m-9-2 4 4M16 8l3-3M14.197 2c.4.667.719 2.4-1.197 4M22 9.803c-.667-.4-2.4-.719-4 1.197M18 2v.02M22 6v.02M21 13v.02M11 3v.02"
      />
    </svg>
  );
};
export default Party;
