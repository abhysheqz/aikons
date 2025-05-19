import React from "react";
const Chrysler: React.FC<
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
        d="M12 8.5a3.25 3.25 0 0 0-3.25 3.25v1.5h-1.5v-1.5a4.75 4.75 0 0 1 9.5 0v1.5h-1.5v-1.5A3.25 3.25 0 0 0 12 8.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 4.5a2.25 2.25 0 0 0-2.25 2.25v2.5h-1.5v-2.5a3.75 3.75 0 1 1 7.5 0v2.5h-1.5v-2.5A2.25 2.25 0 0 0 12 4.5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.75 1.75v2h-1.5v-2zM12.75 9.75v2h-1.5v-2zM12.75 5.75v2h-1.5v-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.683 17.75a3.76 3.76 0 0 1 2.567-1.925V14.5h1.5v1.325a3.76 3.76 0 0 1 2.568 1.925H17v1.5h-1.258q.008.124.008.25v2.75h4V18.5a7.75 7.75 0 0 0-15.5 0v3.75h4V19.5q0-.126.008-.25H7v-1.5z"
      />
      <path
        fill="currentColor"
        d="M14.25 22.25h-4.5V19.5a2.25 2.25 0 0 1 4.5 0z"
      />
    </svg>
  );
};
export default Chrysler;
