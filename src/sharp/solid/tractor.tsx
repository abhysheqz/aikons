import React from "react";
const Tractor: React.FC<
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
        d="M1.25 16.5a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0M15.749 18.25a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 12h-2"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 7h1V5h-2a1 1 0 0 0-1 1v3.5h2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.205 4.191h-.97V2.25h11.163v1.941h-.636l.922 3.075 7.23 1.807a.97.97 0 0 1 .736.942v4.136a4.75 4.75 0 0 0-7.126 4.599h-.786a.97.97 0 0 1-.951-1.164q.124-.612.126-1.262a6.31 6.31 0 0 0-10.097-5.048L1.65 9.724c.48-.36 1.001-.67 1.555-.92zm1.941 0v4.011q.477-.085.971-.114V4.19zm2.913 0v4.01a8.2 8.2 0 0 1 3.883 1.832V8.216l-1.208-4.025z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tractor;
