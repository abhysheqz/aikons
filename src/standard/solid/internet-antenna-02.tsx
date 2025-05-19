import React from "react";
const InternetAntenna_02: React.FC<
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
        d="M12 3a9 9 0 0 0-9 9c0 2.028.67 3.896 1.8 5.4a1 1 0 0 1-1.6 1.202A10.96 10.96 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.476-.819 4.763-2.2 6.602a1 1 0 0 1-1.6-1.202A8.96 8.96 0 0 0 21 12a9 9 0 0 0-9-9"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 7a5 5 0 0 0-3.727 8.333 1 1 0 1 1-1.49 1.334 7 7 0 1 1 10.435 0 1 1 0 1 1-1.49-1.334A5 5 0 0 0 12 7"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.25 12A2.75 2.75 0 1 1 13 14.563V18h.546c.454 0 .901.106 1.307.308a3.88 3.88 0 0 1 2.148 3.475V22a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-.218c0-1.47.831-2.816 2.147-3.474A2.9 2.9 0 0 1 10.454 18H11v-3.437A2.75 2.75 0 0 1 9.25 12"
      />
    </svg>
  );
};
export default InternetAntenna_02;
