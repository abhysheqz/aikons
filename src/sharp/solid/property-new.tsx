import React from "react";
const PropertyNew: React.FC<
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
        d="M2.25 3A.75.75 0 0 1 3 2.25h18a.75.75 0 0 1 .75.75v4.25H2.25z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.25 8.75h19.5V21a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zM7 14h2v-1.5H7zm4 0h6v-1.5h-6zm-4 4h2v-1.5H7zm4 0h6v-1.5h-6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PropertyNew;
