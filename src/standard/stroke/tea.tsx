import React from "react";
const Tea: React.FC<
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
        d="M6.49 21.128C2.287 17.934 2.018 14.304 2 9.5A1 1 0 0 1 3 8.5h14c.552 0 1 .448.999 1-.017 4.804-.286 8.434-4.489 11.628-.326.248-.73.372-1.14.372H7.63c-.41 0-.814-.124-1.14-.372"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.5 10.5H22c0 7.5-5 7-5 7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.309 3C10.762 3.339 10 4.5 10 6M7.54 4.5S7 5 7 6m7.001-1.5c-.273.17-.501 1-.501 1.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.999 9 10 13.5m-1 0h2l1 3.5H8z"
      />
    </svg>
  );
};
export default Tea;
