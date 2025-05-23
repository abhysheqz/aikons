import React from "react";
const HandPointingLeft_02: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 8h-4m0 0H4.25a1.75 1.75 0 1 0 0 3.5h6.25V16a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3V9.584a2 2 0 0 0-.908-1.676l-2.95-1.92c-1.327-.872-1.94-.971-2.612-.987a3 3 0 0 0-.895.115c-.646.184-1.19.66-2.28 1.614z"
      />
    </svg>
  );
};
export default HandPointingLeft_02;
