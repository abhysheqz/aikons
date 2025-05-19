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
        fill="currentColor"
        fillRule="evenodd"
        d="M10.055 2.884a2.75 2.75 0 0 1 3.89 0l7.17 7.171a2.75 2.75 0 0 1 0 3.89l-7.17 7.17a2.75 2.75 0 0 1-3.89 0l-7.171-7.17a2.75 2.75 0 0 1 0-3.89z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Diamond;
