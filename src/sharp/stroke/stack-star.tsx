import React from "react";
const StackStar: React.FC<
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
        d="M18 6v16H2V6z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 6V2h16v16h-4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m10.005 9.601.006-.01a.05.05 0 0 1 .074 0l.006.01 1.31 3.088h3.118c.005.004.008.013.008.041l-.003.007-2.216 2.46 1.113 3.319q.003.008.002.014a.05.05 0 0 1-.062.044l-.008-.004-3.309-1.775-3.322 1.775-.007.003a.05.05 0 0 1-.063-.042q0-.008.002-.015l1.122-3.319-2.227-2.461c-.022-.027-.034-.036-.007-.045l.014-.002h3.118z"
      />
    </svg>
  );
};
export default StackStar;
