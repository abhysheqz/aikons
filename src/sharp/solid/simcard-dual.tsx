import React from "react";
const SimcardDual: React.FC<
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
        d="M1.25 6A.75.75 0 0 1 2 5.25h9.785l4.965 4.413V22a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        d="M10 1.25a.75.75 0 0 0-.75.75v2h3.01L18 9.102v7.648h4a.75.75 0 0 0 .75-.75V5.16l-4.468-3.91z"
      />
    </svg>
  );
};
export default SimcardDual;
