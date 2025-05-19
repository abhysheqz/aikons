import React from "react";
const TextKerning: React.FC<
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
        d="M17.063 4.288c.259-.16.596-.288.937-.288s.679.128.938.288a1.92 1.92 0 0 1 .778.908l3.219 8.448a1 1 0 0 1-1.87.712l-1.363-3.58h-3.403l-1.364 3.58a1 1 0 0 1-1.87-.712l3.22-8.448q.007-.02.015-.038c.178-.417.485-.699.762-.87m-.002 4.488h1.879L18 6.309z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.063 14.712c.259.16.596.288.937.288s.679-.128.938-.288a1.93 1.93 0 0 0 .778-.908l3.219-8.448a1 1 0 0 0-1.87-.712L6 12.691 2.935 4.644a1 1 0 1 0-1.87.712l3.22 8.448q.007.02.015.038c.178.417.486.699.763.87M20.539 21.78a1 1 0 0 1-1.624-.74V20H12a1 1 0 0 1 0-2h6.915v-1.04a1 1 0 0 1 1.624-.74l1.086.868.042.034c.296.236.592.473.807.698.233.244.526.632.526 1.18s-.293.936-.526 1.18c-.215.225-.51.461-.807.698l-.042.034z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.86 2.067a1 1 0 0 1 .574 1.292l-5 13a1 1 0 1 1-1.867-.718l5-13a1 1 0 0 1 1.292-.574"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextKerning;
