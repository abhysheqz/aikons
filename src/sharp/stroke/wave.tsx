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
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M3 12h3a2 2 0 0 0 2-2V7a2 2 0 1 1 4 0v10a2 2 0 1 0 4 0v-3a2 2 0 0 1 2-2h3"
      />
    </svg>
  );
};
export default Wave;
