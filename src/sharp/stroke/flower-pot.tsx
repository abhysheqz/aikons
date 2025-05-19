import React from "react";
const FlowerPot: React.FC<
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
        strokeWidth={1.5}
        d="M11.985 9.002c0-4.5 2.01-5 4.019-5 0 3-1.507 5-4.019 5Zm0 0c0-4.5-2.009-5-4.018-5 0 3 1.507 5 4.018 5ZM9.976 4.002s.502-1.5 2.009-2c1.507.5 2.009 2 2.009 2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.984 9.002v6M11.984 13.002c.252-.667 1.206-2 3.014-2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m16.901 15.018-9.802-.001a.1.1 0 0 0-.097.127l1.97 6.853h6.051l1.975-6.852a.1.1 0 0 0-.097-.127Z"
      />
    </svg>
  );
};
export default FlowerPot;
