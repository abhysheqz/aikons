import React from "react";
const DateTime: React.FC<
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
        d="M17 13.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5m.75 4.307v-2.041h-1.5v2.925l2.31 1.278.726-1.312z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.588 1.25v1.955h6.825V1.25h1.95v1.955h4.387V12H19.8V9.75H4.2v11.046H11v1.954H2.25V3.205h4.388V1.25z"
      />
    </svg>
  );
};
export default DateTime;
