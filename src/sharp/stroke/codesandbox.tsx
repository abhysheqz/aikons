import React from "react";
const Codesandbox: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 6.5 12 2 3 6.5V17l9 5 9-5z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m16 4-4 2-4-2" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 11.615V22m0-10.385L20.5 7M12 11.615 3.5 7"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m3 12 4 2v5M21 12l-4 2v5"
      />
    </svg>
  );
};
export default Codesandbox;
