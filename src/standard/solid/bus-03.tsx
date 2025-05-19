import React from "react";
const Bus_03: React.FC<
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
      <circle cx={17} cy={17.25} r={2.5} fill="currentColor" />
      <circle cx={7} cy={17.25} r={2.5} fill="currentColor" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.002 6.25a2 2 0 0 1 2-2H16a7 7 0 0 1 7 7v5a2 2 0 0 1-2 2h-.44a3.703 3.703 0 0 0-3.564-4.7 3.7 3.7 0 0 0-3.563 4.7h-2.874a3.703 3.703 0 0 0-3.563-4.7 3.7 3.7 0 0 0-3.563 4.7H3a2 2 0 0 1-2-2zm8.996 0h-3v3h3zm2 3v-3H15l-.002 3zm5 .586 1.414 1.414H21a5 5 0 0 0-4-4.9zM3.001 9.25h1.997v-3H3.002z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bus_03;
