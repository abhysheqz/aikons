import React from "react";
const PolyTank: React.FC<
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
        d="M15.375 4.71V3.537a1.75 1.75 0 0 0-1.75-1.75h-3.25a1.75 1.75 0 0 0-1.75 1.75v1.171A14.7 14.7 0 0 0 5.129 6.1c-.561.308-.88.896-.88 1.505V11.7c2.397-.59 5.013-.912 7.75-.912 2.739 0 5.355.323 7.75.912V7.604c0-.61-.317-1.197-.878-1.506a14.7 14.7 0 0 0-3.496-1.389M4.25 19.793v-6.547c2.37-.616 4.99-.96 7.75-.96s5.38.344 7.75.96v6.547c0 .767-.504 1.467-1.274 1.67-1.417.375-2.918.63-4.476.748v-3.674a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.674a25 25 0 0 1-4.476-.747 1.72 1.72 0 0 1-1.274-1.671m5.875-16.256a.25.25 0 0 1 .25-.25h3.25a.25.25 0 0 1 .25.25v.878a13.7 13.7 0 0 0-3.75 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PolyTank;
