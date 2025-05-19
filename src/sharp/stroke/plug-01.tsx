import React from "react";
const Plug_01: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.5 2v4m-7 0V2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18 6H6v6l3.5 5h5l3.5-5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 17v5M11 9h2"
      />
    </svg>
  );
};
export default Plug_01;
