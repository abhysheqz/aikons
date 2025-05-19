import React from "react";
const BodySoap: React.FC<
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
        d="M14.5 22v-9a5 5 0 0 0-10 0v9z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.5 15h10"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M7.5 8V5h4v3" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.5 5V2m0 0h-3m3 0H14l1.5 1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M18.403 10.95c.803-.219 1.268-1.104 1.038-1.977C19.211 8.101 17.363 7 17.363 7s-1.06 1.895-.83 2.767c.23.873 1.066 1.403 1.87 1.184Z"
      />
    </svg>
  );
};
export default BodySoap;
