import React from "react";
const CallRinging_01: React.FC<
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
        d="m1.437 20.5-.102-.981c-.163-1.565-.33-4.107 1.891-5.556 1.025-.667 2.152-1.21 3.748-1.635A19.7 19.7 0 0 1 12 11.691c1.708 0 3.421.211 5.025.637 1.596.424 2.723.968 3.748 1.635 2.22 1.449 2.054 3.991 1.892 5.556l-.103.981-6.48-2.548v-3.989c-1.308-.299-2.693-.45-4.082-.449-1.389 0-2.775.15-4.083.45v3.988z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.999 6.357V3.5h2v2.857zm4.089 1.284 2.4-1.429 1.022 1.719-2.4 1.428zm-7.2 1.718-2.4-1.428L6.51 6.212l2.4 1.429z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CallRinging_01;
