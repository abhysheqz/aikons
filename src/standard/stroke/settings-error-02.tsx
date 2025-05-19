import React from "react";
const SettingsError_02: React.FC<
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
        d="M22 11V9.533c-2.857 0-4.714-3.103-3.268-5.566L15.268 2c-1.464 2.494-5.07 2.494-6.534 0L5.27 3.967C6.716 6.43 4.857 9.533 2 9.533v3.934c2.857 0 4.714 3.103 3.268 5.566L8.732 21c.33-.562.77-.998 1.268-1.307M9.55 14a3.5 3.5 0 1 1 4.95-4.95"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M17 14.998v2m.009 2H17m5-2a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
      />
    </svg>
  );
};
export default SettingsError_02;
