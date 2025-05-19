import React from "react";
const Astronaut_02: React.FC<
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
        d="M12 4.188a5.812 5.812 0 1 0 0 11.624 5.812 5.812 0 0 0 0-11.624M4.25 10a7.75 7.75 0 1 1 15.5 0 7.75 7.75 0 0 1-15.5 0"
        clipRule="evenodd"
      />
      <ellipse cx={12} cy={10} fill="currentColor" rx={4} ry={3} />
      <path
        fill="currentColor"
        d="M17.959 7.292c0-.576.466-1.042 1.042-1.042a3.75 3.75 0 0 1 0 7.5 1.04 1.04 0 0 1-1.042-1.042zM1.252 10a3.75 3.75 0 0 1 3.75-3.75c.593 0 1.074.481 1.074 1.074v5.352c0 .593-.48 1.074-1.074 1.074A3.75 3.75 0 0 1 1.252 10"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.5 2.5V8h-2V2.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.884 16.25h6.232c.818 0 1.376 0 1.855.128a3.75 3.75 0 0 1 2.651 2.651c.128.48.128 1.153.128 1.971a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75c0-.818 0-1.492.128-1.97a3.75 3.75 0 0 1 2.651-2.652c.48-.128 1.037-.128 1.855-.128"
      />
    </svg>
  );
};
export default Astronaut_02;
