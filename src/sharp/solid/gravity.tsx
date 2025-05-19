import React from "react";
const Gravity: React.FC<
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
        d="M5.25 15.625a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 3.625v-2h2v2zm10 0v-2h2v2zM12 8.125l3.207-3.207-1.414-1.414-.793.793V1.625h-2v2.672l-.793-.793-1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Gravity;
