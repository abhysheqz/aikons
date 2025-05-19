import React from "react";
const Pie: React.FC<
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
        d="M20.758 10.17c.742 0 1.242 1.018 1.242 1.857 0 2.313-3.434 2.708-4 .502-.503 1.961-3.497 1.961-4 0-.503 1.961-3.497 1.961-4 0-.503 1.961-3.497 1.961-4 0-.566 2.206-4 1.81-4-.502 0-.84.5-1.858 1.242-1.858C4.182 6.632 7.746 4 12 4s7.818 2.632 8.758 6.17M15 7.5l.5 1M9 7.5l-.5 1M12 7v1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m3.5 14 .449 1.077c.994 2.386 1.491 3.58 2.499 4.251s2.3.672 4.885.672h1.334c2.585 0 3.877 0 4.885-.672s1.505-1.865 2.5-4.251L20.5 14"
      />
    </svg>
  );
};
export default Pie;
