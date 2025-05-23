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
        d="M14 21v-8a5 5 0 0 0-10 0v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 15h10M7 8V6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 5V2m0 0H6.5M9 2h4.5l1 1M17.903 10.95c.803-.219 1.269-1.104 1.039-1.977C18.712 8.101 17.001 7 17.001 7s-1.197 1.895-.968 2.767c.23.873 1.067 1.403 1.87 1.184"
      />
    </svg>
  );
};
export default BodySoap;
