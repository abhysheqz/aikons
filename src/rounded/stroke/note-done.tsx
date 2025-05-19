import React from "react";
const NoteDone: React.FC<
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
        d="M19.5 13v-3c0-3.3 0-4.95-1.025-5.975S15.8 3 12.5 3h-3C6.2 3 4.55 3 3.525 4.025S2.5 6.7 2.5 10v5c0 3.3 0 4.95 1.025 5.975S6.2 22 9.5 22H11M16 2v2m-5-2v2M6 2v2M13.5 20s1 0 2 2c0 0 3.177-5 6-6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M7 15h4m-4-5h8"
      />
    </svg>
  );
};
export default NoteDone;
