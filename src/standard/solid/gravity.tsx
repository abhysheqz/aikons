import React from "react";
const Gravity: React.FC<
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
        d="M12 1.25a.75.75 0 0 1 .75.75v2.75H14a.75.75 0 0 1 .53 1.28l-2 2a.75.75 0 0 1-1.06 0l-2-2A.75.75 0 0 1 10 4.75h1.25V2a.75.75 0 0 1 .75-.75M5.25 16a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0M7 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 7 1.25m10 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Gravity;
