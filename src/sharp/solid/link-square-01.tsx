import React from "react";
const LinkSquare_01: React.FC<
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
        d="M2 3a1 1 0 0 1 1-1h9v2H4v16h16v-8h2v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15 2h7v7h-2V5.414l-4.293 4.293-1.414-1.414L18.586 4H15z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LinkSquare_01;
