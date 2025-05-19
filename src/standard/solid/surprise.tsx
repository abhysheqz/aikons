import React from "react";
const Surprise: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12M12 13.75c-.543 0-1.25.619-1.25 1.75s.707 1.75 1.25 1.75 1.25-.619 1.25-1.75-.707-1.75-1.25-1.75M9.25 15.5c0-1.63 1.084-3.25 2.75-3.25s2.75 1.62 2.75 3.25-1.084 3.25-2.75 3.25-2.75-1.62-2.75-3.25M8 7.75a1.25 1.25 0 1 0 0 2.5h.009a1.25 1.25 0 1 0 0-2.5zm7.991 0a1.25 1.25 0 0 0 0 2.5H16a1.25 1.25 0 1 0 0-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Surprise;
