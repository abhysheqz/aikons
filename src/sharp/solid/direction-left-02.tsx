import React from "react";
const DirectionLeft_02: React.FC<
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
        d="M13 3.75H8.643L5 8l3.643 4.25H13v7.25h-3v2h8v-2h-3v-7.25h3.25a.75.75 0 0 0 .75-.75v-7a.75.75 0 0 0-.75-.75H15V2.5h-2z"
      />
    </svg>
  );
};
export default DirectionLeft_02;
