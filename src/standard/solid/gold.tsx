import React from "react";
const Gold: React.FC<
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
        d="M8.364 9.333a2.75 2.75 0 0 1 2.668-2.083h2.877a2.75 2.75 0 0 1 2.667 2.083l.811 3.243a1.75 1.75 0 0 1-1.698 2.174H9.251a1.75 1.75 0 0 1-1.698-2.174zM2.864 17.333a2.75 2.75 0 0 1 2.668-2.083h2.877a2.75 2.75 0 0 1 2.667 2.083l.811 3.243a1.75 1.75 0 0 1-1.698 2.174H3.751a1.75 1.75 0 0 1-1.698-2.174zM13.864 17.333a2.75 2.75 0 0 1 2.668-2.083h2.877a2.75 2.75 0 0 1 2.667 2.083l.811 3.243a1.75 1.75 0 0 1-1.698 2.174h-6.438a1.75 1.75 0 0 1-1.698-2.174zM12.469 1a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1M7.262 2.793a1 1 0 0 1 1.414 0l1.5 1.5a1 1 0 0 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414m10.414 0a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 0 1-1.414-1.414l1.5-1.5a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Gold;
