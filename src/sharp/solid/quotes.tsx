import React from "react";
const Quotes: React.FC<
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
        d="M12.002 1.25c-5.9 0-10.75 4.554-10.75 10.25 0 2.719 1.11 5.186 2.912 7.014l-.912 4.236 4.768-1.727c1.233.47 2.577.727 3.982.727 5.9 0 10.75-4.554 10.75-10.25s-4.85-10.25-10.75-10.25M7.5 16.75A3.75 3.75 0 0 0 11.25 13V7.25h-5.5v5.5h4V13a2.25 2.25 0 0 1-2.25 2.25zm7 0A3.75 3.75 0 0 0 18.25 13V7.25h-5.5v5.5h4V13a2.25 2.25 0 0 1-2.25 2.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Quotes;
