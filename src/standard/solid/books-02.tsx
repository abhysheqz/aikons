import React from "react";
const Books_02: React.FC<
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
        fillRule="evenodd"
        d="M2 4.5a1 1 0 0 1 1-1h13.5A2.5 2.5 0 0 1 19 6v2a2.5 2.5 0 0 1-2.5 2.5H3a1 1 0 0 1-1-1z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 9.5a1 1 0 0 1 1-1h16.5A2.5 2.5 0 0 1 22 11v2a2.5 2.5 0 0 1-2.5 2.5H13a1 1 0 1 1 0-2h6.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H3a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 14.5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m10 0a1 1 0 0 1 1-1h3.5A2.5 2.5 0 0 1 19 16v2a2.5 2.5 0 0 1-2.5 2.5H3a1 1 0 1 1 0-2h13.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H13a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 8.75h5a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-1.219.586L10.5 15.46l-2.031 1.625A.75.75 0 0 1 7.25 16.5v-7A.75.75 0 0 1 8 8.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Books_02;
