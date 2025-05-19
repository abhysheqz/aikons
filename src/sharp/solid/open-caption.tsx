import React from "react";
const OpenCaption: React.FC<
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
        d="M2 2.25a.75.75 0 0 0-.75.75v15c0 .414.336.75.75.75h20a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm9 4.25H6.5v8H11v-2H8.5v-4H11zm6.5 0H13v8h4.5v-2H15v-4h2.5zM22.75 21.75H1.25v-2h21.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default OpenCaption;
