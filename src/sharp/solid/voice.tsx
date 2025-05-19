import React from "react";
const Voice: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zM11.25 7v10h1.5V7zm-3 8V9h1.5v6zm-1.5-4v2h-1.5v-2zm7.5 4V9h1.5v6zm3-4v2h1.5v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Voice;
