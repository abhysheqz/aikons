import React from "react";
const Chemistry_03: React.FC<
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
        d="M6 3a1 1 0 0 0-2 0v5H3a1 1 0 0 0 0 2h1v9a3 3 0 0 0 3 3h14a1 1 0 1 0 0-2H7a1 1 0 0 1-1-1v-9h5.5a1 1 0 1 0 0-2H6zM15.5 10H21a1 1 0 1 0 0-2h-5.5a1 1 0 1 0 0 2"
      />
      <path
        fill="currentColor"
        d="M10.5 3a1 1 0 0 0 0 2h.25v4.259c-1.493.898-2.5 2.512-2.5 4.366 0 2.85 2.37 5.125 5.25 5.125s5.25-2.275 5.25-5.125c0-1.854-1.007-3.468-2.5-4.366V5h.25a1 1 0 1 0 0-2z"
      />
    </svg>
  );
};
export default Chemistry_03;
