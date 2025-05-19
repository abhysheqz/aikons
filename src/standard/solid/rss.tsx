import React from "react";
const Rss: React.FC<
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
        d="M5.5 4.5a1 1 0 0 0-1 1v3.508a1 1 0 1 1-2 0V5.5a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3h-6.502a1 1 0 1 1 0-2H20.5a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1zM2.5 19.5a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H3.5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.545 12.5a1 1 0 0 1 1-1c4.465 0 8.955 3.911 8.955 9a1 1 0 1 1-2 0c0-3.911-3.52-7-6.955-7a1 1 0 0 1-1-1M1.5 15.735a1 1 0 0 1 1-1c3.043 0 5.77 2.71 5.77 5.765a1 1 0 1 1-2 0c0-1.945-1.827-3.765-3.77-3.765a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Rss;
