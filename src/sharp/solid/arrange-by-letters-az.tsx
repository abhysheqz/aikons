import React from "react";
const ArrangeByLettersAz: React.FC<
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
        d="M7.719 15H4.442v-2h6.723l-4 7h3.277v2H3.719zM6.237 2h2.41l2.736 7.664-1.883.672-2.058-5.763-2.059 5.763L3.5 9.664zM18.293 4v13.586l.793-.793 1.414 1.414-3.207 3.207-3.207-3.207 1.414-1.414.793.793V4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrangeByLettersAz;
