import React from "react";
const License: React.FC<
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
        d="M21.25 1.25H2.75v21.5h18.5zM17 6H7v2h10zm0 5H7v2h10zm-4 5H7v2h6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default License;
