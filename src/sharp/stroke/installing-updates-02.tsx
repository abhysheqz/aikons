import React from "react";
const InstallingUpdates_02: React.FC<
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
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 18v4H2v-4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 12.26V8.74c-2.571 0-4.243-2.776-2.941-4.98L14.94 2c-1.318 2.232-4.563 2.231-5.88 0L5.942 3.76C7.244 5.964 5.57 8.74 3 8.74v3.52c2.571 0 4.243 2.776 2.941 4.98L9.06 19c1.318-2.233 4.565-2.233 5.884 0l3.117-1.76c-1.301-2.204.369-4.98 2.94-4.98"
      />
    </svg>
  );
};
export default InstallingUpdates_02;
