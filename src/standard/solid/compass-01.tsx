import React from "react";
const Compass_01: React.FC<
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
        d="m4.077 21.615 5-12 1.846.77-5 12a1 1 0 0 1-1.846-.77m14 .77-5-12 1.846-.77 5 12a1 1 0 1 1-1.846.77M12 1a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.45 12.165a1 1 0 0 1 1.385.285C5.66 15.222 8.65 17 12 17s6.34-1.778 8.165-4.55a1 1 0 1 1 1.67 1.1C19.678 16.827 16.09 19 12 19s-7.678-2.173-9.835-5.45a1 1 0 0 1 .285-1.385"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 15.5a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Compass_01;
