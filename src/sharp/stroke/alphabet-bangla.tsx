import React from "react";
const AlphabetBangla: React.FC<
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
        d="M7 6.368c.878-.956 5.994-4.679 9.599-.23.436.538.655.808 1.028 1.861C18 9.053 18 9.785 18 11.25V20M18 10c0-2.273 1.2-5.374 4-4.963"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 4.996c.401 2.108 2.777 7.936 5.577 10.404 2.985 2.632 4.635 1.314 5.267.73.61-.562 1.36-1.771 1.81-3.071m-5.143-2.063c0-2.213 1.307-3.027 1.883-3.202.715-.218 2.947-.425 3.54 2.008.257 1.052.095 2.175-.28 3.257m0 0c1.05.5 3.288 2.889 3.343 6.54"
      />
    </svg>
  );
};
export default AlphabetBangla;
