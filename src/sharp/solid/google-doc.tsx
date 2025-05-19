import React from "react";
const GoogleDoc: React.FC<
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
        d="M4 1.25h10.25v6.5h6.5V22a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75V2A.75.75 0 0 1 4 1.25m11.75.44 4.56 4.56h-4.56zM8 12.75h8v-1.5H8zm0 3h8v-1.5H8zm0 3h6v-1.5H8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GoogleDoc;
