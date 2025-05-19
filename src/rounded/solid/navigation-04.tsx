import React from "react";
const Navigation_04: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m1.594 15.747c1.548-.134 3.057-7.732 2.114-8.666-1.204-1.194-9.212 1.122-8.683 2.522.2.529 1.21.863 3.228 1.53.794.264 1.095.552 1.364 1.353.048.14.099.332.157.553.283 1.062.745 2.8 1.82 2.708"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Navigation_04;
