import React from "react";
const AirplaneMode: React.FC<
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
        d="M7.5 20v2l4.5-1.5 4.5 1.5v-2L14 18v-4l7 1.5v-1.851a2 2 0 0 0-.992-1.728L15 9l.198-2.373C15.373 4.52 14 2.5 12 2c-2 .5-3.705 2.77-3.322 5.067L9 9l-5.008 2.921A2 2 0 0 0 3 13.65V15.5l7-1.5v4z"
      />
    </svg>
  );
};
export default AirplaneMode;
