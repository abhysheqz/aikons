import React from "react";
const Heading_06: React.FC<
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
        d="M2 19V5h2v14zM12 19V5h2v14zM16 12a3 3 0 1 1 6 0h-2a1 1 0 1 0-2 0v1.17A3 3 0 1 1 16 16zm2 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 13H3v-2h10z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Heading_06;
