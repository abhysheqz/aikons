import React from "react";
const AiCloud_02: React.FC<
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
        strokeWidth={1.5}
        d="M17.478 8h.022a4.5 4.5 0 0 1 1.5 8.744M17.478 8q.021-.247.022-.5a5.5 5.5 0 0 0-10.98-.477M17.478 8a5.48 5.48 0 0 1-1.235 3M6.52 7.023A5 5 0 0 0 5 16.584m1.52-9.561Q6.757 7 7 7c1.126 0 2.165.372 3 1M18.25 21.25 16 19v-3m2.25 4.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM5.75 21.25 8 19v-3m-2.25 4.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 21.25V16m0 4.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"
      />
    </svg>
  );
};
export default AiCloud_02;
