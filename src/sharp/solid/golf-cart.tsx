import React from "react";
const GolfCart: React.FC<
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
        d="M4.253 4.223H2.28V2.25h16.768v1.973H17.38l2.62 9.604-1.904.52-2.76-10.124H6.225v7.89H4.253z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.5 19.25a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M15.5 19.25a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0"
      />
      <path
        fill="currentColor"
        d="M2 11.25a.75.75 0 0 0-.75.75v7c0 .414.336.75.75.75h.283a3.75 3.75 0 1 1 7.434 0h4.566a3.75 3.75 0 1 1 7.434 0H22a.75.75 0 0 0 .75-.75v-5a.75.75 0 0 0-.751-.75l-6.012.01a.75.75 0 0 0-.53.22l-1.767 1.769h-3.226L8.67 11.664A.75.75 0 0 0 8 11.25z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m13.664 11.927-.608.405-1.11-1.664 3-2 1.11 1.664-.724.483 1.537 2.69-1.736.991z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GolfCart;
