import React from "react";
const Chart_02: React.FC<
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
        d="M19 5.75a1.5 1.5 0 1 0-1.5-1.506l-4.744 2.71a1.495 1.495 0 0 0-1.8.218l-4.5-1.286a1.5 1.5 0 1 0-.413 1.442l4.501 1.286a1.5 1.5 0 0 0 2.956-.357l4.744-2.711c.222.13.48.204.756.204m-.5 2a1.75 1.75 0 0 0-1.75 1.75v10c0 .966.784 1.75 1.75 1.75h1a1.75 1.75 0 0 0 1.75-1.75v-10a1.75 1.75 0 0 0-1.75-1.75zM2.75 11.5c0-.966.784-1.75 1.75-1.75h1c.966 0 1.75.784 1.75 1.75v8a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75zm7 2c0-.966.784-1.75 1.75-1.75h1c.966 0 1.75.784 1.75 1.75v6a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Chart_02;
