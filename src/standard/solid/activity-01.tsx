import React from "react";
const Activity_01: React.FC<
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
        d="M4.75 2A2.75 2.75 0 0 0 2 4.75v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15A2.75 2.75 0 0 0 19.75 2zm13.207 8.957a1 1 0 0 0-1.414-1.414l-2.793 2.793-1.586-1.586a2 2 0 0 0-2.828 0l-2.793 2.793a1 1 0 1 0 1.414 1.414l2.793-2.793 1.586 1.586a2 2 0 0 0 2.828 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Activity_01;
