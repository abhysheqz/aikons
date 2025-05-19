import React from "react";
const RssUnlocked: React.FC<
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
        d="M18.5 2.75c-.69 0-1.25.56-1.25 1.25v.75H22a.75.75 0 0 1 .75.75V11a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75V5.5a.75.75 0 0 1 .75-.75h.75V4a2.75 2.75 0 0 1 4.812-1.82.75.75 0 1 1-1.124.993 1.25 1.25 0 0 0-.938-.423M1.045 14a1 1 0 0 1 1-1C6.51 13 11 16.911 11 22a1 1 0 1 1-2 0c0-3.911-3.52-7-6.955-7a1 1 0 0 1-1-1M1 17.235a1 1 0 0 1 1-1c3.043 0 5.77 2.71 5.77 5.765a1 1 0 1 1-2 0c0-1.945-1.827-3.765-3.77-3.765a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 21a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M5 7a1 1 0 0 0-1 1v2.5a1 1 0 1 1-2 0V8a3 3 0 0 1 3-3h6.5a1 1 0 1 1 0 2zm17 6.5a1 1 0 0 1 1 1V20a3 3 0 0 1-3 3h-6a1 1 0 1 1 0-2h6a1 1 0 0 0 1-1v-5.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RssUnlocked;
