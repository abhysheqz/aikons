import React from "react";
const Pulley: React.FC<
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
        d="M15.5 2a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 3a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M11 10.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0M4 17.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 2a1 1 0 0 1 1 1v14.5a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M12 9.5a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1m7 0a1 1 0 0 1 1 1V17a1 1 0 1 1-2 0v-6.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.03 16.758A1 1 0 0 1 18 16h2a1 1 0 0 1 .97.758l1 4A1 1 0 0 1 21 22h-4a1 1 0 0 1-.97-1.242z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Pulley;
