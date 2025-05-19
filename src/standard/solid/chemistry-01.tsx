import React from "react";
const Chemistry_01: React.FC<
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
        d="M6 3a1 1 0 0 0-2 0v5H3a1 1 0 0 0 0 2h1v9a3 3 0 0 0 3 3h14a1 1 0 1 0 0-2H7a1 1 0 0 1-1-1v-9h5a1 1 0 1 0 0-2H6zM17 10h4a1 1 0 1 0 0-2h-4a1 1 0 1 0 0 2"
      />
      <path
        fill="currentColor"
        d="M10 3a1 1 0 0 0 0 2h.25v9.786c0 2.14 1.63 3.964 3.75 3.964s3.75-1.824 3.75-3.964V5H18a1 1 0 1 0 0-2z"
      />
    </svg>
  );
};
export default Chemistry_01;
