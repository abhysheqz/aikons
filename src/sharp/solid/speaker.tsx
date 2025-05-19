import React from "react";
const Speaker: React.FC<
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
        d="M3.5 1.25h17a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-.75.75h-17a.75.75 0 0 1-.75-.75V2a.75.75 0 0 1 .75-.75M7.75 15.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0M12 4.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Speaker;
