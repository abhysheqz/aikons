import React from "react";
const Crazy: React.FC<
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
      <circle
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 9.5a1.5 1.5 0 0 0 3 0M17 10c0-1.657-.672-3-1.5-3S14 8.343 14 10M16.633 13.5c.483.653.554 1.636-.185 2.321-1.458 1.352-3.3-.117-4.242-.15-.942-.034-1.444.884-3.343 1.284C7.709 17.2 7 16.5 7 15.67"
      />
    </svg>
  );
};
export default Crazy;
