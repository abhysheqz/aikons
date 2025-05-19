import React from "react";
const Temperature: React.FC<
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
        d="M12 7a1 1 0 0 1 1 1v6.17a3.001 3.001 0 1 1-2 0V8a1 1 0 0 1 1-1"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2.75A2.25 2.25 0 0 0 9.75 5v8a.75.75 0 0 1-.3.6 4.25 4.25 0 1 0 5.1 0 .75.75 0 0 1-.3-.6V5A2.25 2.25 0 0 0 12 2.75M8.25 5a3.75 3.75 0 1 1 7.5 0v7.641a5.75 5.75 0 1 1-7.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Temperature;
