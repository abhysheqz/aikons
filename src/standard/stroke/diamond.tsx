import React from "react";
const Diamond: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.586 13.414a2 2 0 0 0 0-2.828l-7.172-7.172a2 2 0 0 0-2.828 0l-7.172 7.172a2 2 0 0 0 0 2.828l7.172 7.172a2 2 0 0 0 2.828 0z"
      />
    </svg>
  );
};
export default Diamond;
