import React from "react";
const GreaterThan: React.FC<
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
        d="M7.336 3 5.774 4.95 14.247 12 5.75 19.048 7.312 21l10.937-9z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GreaterThan;
