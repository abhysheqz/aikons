import React from "react";
const CallMissed_02: React.FC<
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
        d="m1.437 21-.102-.981c-.163-1.565-.33-4.107 1.891-5.556 1.025-.667 2.152-1.21 3.748-1.635A19.7 19.7 0 0 1 12 12.191c1.708 0 3.421.211 5.025.637 1.596.424 2.723.968 3.748 1.635 2.22 1.449 2.054 3.991 1.892 5.556l-.103.981-6.48-2.548v-3.989c-1.308-.299-2.693-.45-4.082-.449-1.389 0-2.775.15-4.083.45v3.988z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 3h5.5v2H9.414L12 7.586l4.293-4.293 1.414 1.414-5 5a1 1 0 0 1-1.414 0L8 6.414V8.5H6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CallMissed_02;
