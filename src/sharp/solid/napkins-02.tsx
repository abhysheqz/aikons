import React from "react";
const Napkins_02: React.FC<
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
        d="m12 1.25 6.75 10.866L12 19.06l-6.75-6.944zM7.139 11.881l4.86 5.056 4.862-5.056-.704-1.174L12 15.058l-4.157-4.351zM5.25 15.806l.818-1.055 5.93 6.102 5.933-6.103.82 1.056L12 22.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Napkins_02;
