import React from "react";
const SquareLockRemove_02: React.FC<
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
        d="m15.5 16.499 1.498 1.5m0 0 1.502 1.5m-1.502-1.5 1.502-1.5m-1.502 1.5-1.498 1.5m5.5-1.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M19 12.027V9.023h-3.504M11.004 22H3V9.023h3.472m9.024 0v-2.7c-.178-3.1-2.668-4.225-4.286-4.316C9.335 1.9 6.603 3.302 6.513 6.302l-.04 2.721m9.023 0H6.472"
      />
    </svg>
  );
};
export default SquareLockRemove_02;
