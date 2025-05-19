import React from "react";
const Wave: React.FC<
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
        d="M7 7a3 3 0 0 1 6 0v10a1 1 0 1 0 2 0v-3a3 3 0 0 1 3-3h3a1 1 0 1 1 0 2h-3a1 1 0 0 0-1 1v3a3 3 0 1 1-6 0V7a1 1 0 1 0-2 0v3a3 3 0 0 1-3 3H3a1 1 0 1 1 0-2h3a1 1 0 0 0 1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wave;
