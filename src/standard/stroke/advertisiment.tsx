import React from "react";
const Advertisiment: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z"
      />
      <path
        fill="currentColor"
        d="M8 8v-.75a.75.75 0 0 0-.718.534zm1 0 .718-.216A.75.75 0 0 0 9 7.25zm-4.212 7.763a.75.75 0 0 0 1.424.474zm6 .474a.75.75 0 0 0 1.423-.474zM8 8.75h1v-1.5H8zm-1.788 7.487 1-3-1.424-.474-1 3zm1.006-3.021 1.5-5-1.436-.432-1.5 5zm1.064-5 1.5 5 1.436-.431-1.5-5zm1.506 5.021 1 3 1.423-.474-1-3zM6.5 13.75h4v-1.5h-4z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.5 12h-1.983a2.01 2.01 0 0 0-2.017 2c0 1.107.91 2 2.017 2H18.5zm0 0V8.5"
      />
    </svg>
  );
};
export default Advertisiment;
