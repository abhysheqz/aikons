import React from "react";
const DirectionRight_02: React.FC<
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
        d="M11 3.75h4.357L19 8l-3.643 4.25H11v7.25h3v2H6v-2h3v-7.25H5.75A.75.75 0 0 1 5 11.5v-7a.75.75 0 0 1 .75-.75H9V2.5h2z"
      />
    </svg>
  );
};
export default DirectionRight_02;
