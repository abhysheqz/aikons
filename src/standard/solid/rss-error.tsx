import React from "react";
const RssError: React.FC<
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
        d="M5 6.75a1 1 0 0 0-1 1v2.535a1 1 0 0 1-2 0V7.75a3 3 0 0 1 3-3h4a1 1 0 0 1 0 2zm17 6a1 1 0 0 1 1 1v6a3 3 0 0 1-3 3h-5.996a1 1 0 1 1 0-2H20a1 1 0 0 0 1-1v-6a1 1 0 0 1 1-1M2 20.75a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.045 13.75a1 1 0 0 1 1-1c4.465 0 8.955 3.911 8.955 9a1 1 0 1 1-2 0c0-3.911-3.52-7-6.955-7a1 1 0 0 1-1-1M1 16.985a1 1 0 0 1 1-1c3.043 0 5.77 2.71 5.77 5.765a1 1 0 1 1-2 0c0-1.945-1.827-3.765-3.77-3.765a1 1 0 0 1-1-1M17 1a5.75 5.75 0 1 0 0 11.5A5.75 5.75 0 0 0 17 1m.75 3.25a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zM17 8a.75.75 0 0 0 0 1.5h.009a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RssError;
