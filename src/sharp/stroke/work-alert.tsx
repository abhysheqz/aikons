import React from "react";
const WorkAlert: React.FC<
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
        d="M20.971 11.482V5.494H2v15.47h8.986M15.979 5.494 14.981 2H7.99l-.998 3.494"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.471 22c2.502 0 4.53-2.017 4.53-4.505s-2.029-4.504-4.53-4.504-4.529 2.016-4.529 4.504c0 1.54 1.038 3.23 2.382 3.964.77.42 1.56.54 2.147.54ZM17.525 14.998v2.528m0 1.264v1.49"
      />
    </svg>
  );
};
export default WorkAlert;
