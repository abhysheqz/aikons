import React from "react";
const HelpSquare: React.FC<
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
        d="M2.47 2.47A.75.75 0 0 1 3 2.25h18a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V3a.75.75 0 0 1 .22-.53M10.5 10a1.5 1.5 0 1 1 1.5 1.5 1 1 0 0 0-1 1v2h2v-1.145A3.502 3.502 0 0 0 12 6.5 3.5 3.5 0 0 0 8.5 10zm.5 6v1.5h2V16z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HelpSquare;
