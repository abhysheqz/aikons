import React from "react";
const InformationSquare: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18a.75.75 0 0 0 .75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm8 4.25V8h2V6.5zM10 11h1v6h2V9h-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default InformationSquare;
