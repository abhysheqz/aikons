import React from "react";
const Compass: React.FC<
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
        d="M15 2.75h-2.25v.528c5.034.383 9 4.59 9 9.722 0 5.385-4.365 9.75-9.75 9.75S2.25 18.385 2.25 13c0-5.132 3.966-9.339 9-9.722V2.75H9v-1.5h6zm-7.498 9.036 8-2.286-2.285 8-1.715-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Compass;
