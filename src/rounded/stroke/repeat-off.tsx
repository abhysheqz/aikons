import React from "react";
const RepeatOff: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16.388 3 1.003.976c.448.436.672.654.593.839C17.906 5 17.59 5 16.955 5h-7.76C5.22 5 2 8.134 2 12c0 1.487.477 2.866 1.29 4M7.612 21l-1.003-.976c-.448-.436-.672-.654-.593-.839C6.094 19 6.41 19 7.045 19h7.76C18.78 19 22 15.866 22 12a6.84 6.84 0 0 0-1.29-4M9 12h6"
      />
    </svg>
  );
};
export default RepeatOff;
