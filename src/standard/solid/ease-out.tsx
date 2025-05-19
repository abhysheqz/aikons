import React from "react";
const EaseOut: React.FC<
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
        d="m3.916 20.4.003-.007.014-.03.057-.125c.05-.11.128-.276.231-.488.207-.424.515-1.034.92-1.767a41 41 0 0 1 3.522-5.367C11.749 8.666 15.989 5 21 5a1 1 0 1 0 0-2c-5.99 0-10.749 4.334-13.913 8.384a43 43 0 0 0-3.697 5.633 41 41 0 0 0-1.217 2.385l-.065.143-.017.038-.005.011-.002.005L3 20l-.916-.401a1 1 0 0 0 1.832.802"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EaseOut;
