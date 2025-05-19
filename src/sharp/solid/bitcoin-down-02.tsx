import React from "react";
const BitcoinDown_02: React.FC<
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
        d="M15.77 9.572h4.98v-5h-1.992V6.3L14.45 2.335a.993.993 0 0 0-1.378.03l-2.898 2.91L4.384 1.25 3.25 2.894l6.474 4.5a.99.99 0 0 0 1.272-.115l2.811-2.823 3.386 3.116H15.77z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 22.75a7.25 7.25 0 1 0 0-14.5 7.25 7.25 0 0 0 0 14.5m.75-10.667V10.75h-1.5v1.333h-2.5v1.5h.938v3.833H7.75v1.5h2.5v1.334h1.5v-1.334h.813c.976 0 1.687-.83 1.687-1.75V16.5c0-.363-.11-.71-.303-1 .193-.29.303-.638.303-1v-.667c0-.92-.71-1.75-1.687-1.75zm-1.562 2.667v-1.167h2.374c.06 0 .188.066.188.25v.667c0 .184-.129.25-.187.25zm0 1.5h2.374c.06 0 .188.066.188.25v.666c0 .185-.129.25-.187.25h-2.376z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinDown_02;
