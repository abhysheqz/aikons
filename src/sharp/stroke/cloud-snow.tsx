import React from "react";
const CloudSnow: React.FC<
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
        d="M17.478 8.78h.022c2.485 0 4.5 1.941 4.5 4.335 0 1.703-1.018 3.176-2.5 3.885m-2.022-8.22q.021-.238.022-.481C17.5 5.372 15.038 3 12 3 9.123 3 6.762 5.128 6.52 7.839m10.958.941a5.17 5.17 0 0 1-1.235 2.89M6.52 7.84C3.984 8.07 2 10.129 2 12.634 2 14.566 3.181 16.233 4.886 17M6.52 7.839q.237-.022.48-.022c1.126 0 2.165.358 3 .963"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m11.998 16.997.004.008M15.995 15l.005.008M8 15l.004.008m7.992 3.987.004.008m-8-.008.004.008m3.994 1.99.004.007"
      />
    </svg>
  );
};
export default CloudSnow;
