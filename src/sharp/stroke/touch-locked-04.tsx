import React from "react";
const TouchLocked_04: React.FC<
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
        d="M6.916 14.53V10m0 0V3.75a1.75 1.75 0 1 1 3.5 0V9H16a3 3 0 0 1 3 3M6.916 10 5.73 11.356c-.953 1.089-1.43 1.633-1.614 2.279A3 3 0 0 0 4 14.53c.016.671.115 1.285.986 2.613L7.5 21H11M18.5 17v-1.5a1.5 1.5 0 0 0-3 0V17M20 17h-6v5h6z"
      />
    </svg>
  );
};
export default TouchLocked_04;
