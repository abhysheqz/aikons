import React from "react";
const Activity_02: React.FC<
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
        d="M20 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.877 2H4.75A2.75 2.75 0 0 0 2 4.75v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75V7.623A4 4 0 0 1 16.877 2m1.08 7.543a1 1 0 0 1 0 1.414l-2.793 2.793a2 2 0 0 1-2.828 0l-1.586-1.586-2.793 2.793a1 1 0 0 1-1.414-1.414l2.793-2.793a2 2 0 0 1 2.828 0l1.586 1.586 2.793-2.793a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Activity_02;
