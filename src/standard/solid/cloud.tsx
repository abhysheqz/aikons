import React from "react";
const Cloud: React.FC<
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
        d="M5.853 8.365A5.752 5.752 0 0 0 7 19.75h10.5a5.25 5.25 0 0 0 .747-10.447 6.25 6.25 0 0 0-12.394-.938"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Cloud;
