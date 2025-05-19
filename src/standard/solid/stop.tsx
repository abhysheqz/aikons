import React from "react";
const Stop: React.FC<
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
        d="M3.25 7A3.75 3.75 0 0 1 7 3.25h10A3.75 3.75 0 0 1 20.75 7v10A3.75 3.75 0 0 1 17 20.75H7A3.75 3.75 0 0 1 3.25 17z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Stop;
