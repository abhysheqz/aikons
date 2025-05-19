import React from "react";
const ArrowReloadHorizontal: React.FC<
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
        d="M2 7.5a3 3 0 0 1 3-3h16a1 1 0 1 1 0 2H5a1 1 0 0 0-1 1V12a1 1 0 1 1-2 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.793 2.293a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 1 1-1.414-1.414L19.586 5.5l-1.793-1.793a1 1 0 0 1 0-1.414M6.207 15.293a1 1 0 0 1 0 1.414L4.414 18.5l1.793 1.793a1 1 0 1 1-1.414 1.414l-2.5-2.5a1 1 0 0 1 0-1.414l2.5-2.5a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21 12a1 1 0 0 1 1 1v3.5a3 3 0 0 1-3 3H3a1 1 0 1 1 0-2h16a1 1 0 0 0 1-1V13a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrowReloadHorizontal;
