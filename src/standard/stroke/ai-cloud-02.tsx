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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.478 8h.022a4.5 4.5 0 0 1 4.5 4.5c0 1.414-.48 2.675-1.5 3.5m-3.022-8q.021-.247.022-.5a5.5 5.5 0 0 0-10.98-.477M17.478 8a5.5 5.5 0 0 1-.578 2M6.52 7.023A5 5 0 0 0 4 16m2.52-8.977Q6.757 7 7 7c1.126 0 2.165.372 3 1M19 21l-2-2v-2m1 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0M12 21v-5m-1 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0M5 21l2-2v-2m-1 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0"
      />
    </svg>
  );
};
export default AiCloud_02;
