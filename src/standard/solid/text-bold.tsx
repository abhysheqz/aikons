import React from "react";
const TextBold: React.FC<
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
        d="M4 3a1 1 0 0 1 1-1h7.5a5.5 5.5 0 0 1 3.604 9.655A5.5 5.5 0 0 1 13.5 22H5a1 1 0 0 1-1-1.001zm2 10v7h7.5a3.5 3.5 0 1 0 0-7zm0-2h6.5a3.5 3.5 0 1 0 0-7H6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextBold;
