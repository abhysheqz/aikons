import React from "react";
const Option: React.FC<
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
        d="M8.34 6H4V4h5.66l6 14H20v2h-5.66zM20 6h-6V4h6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Option;
