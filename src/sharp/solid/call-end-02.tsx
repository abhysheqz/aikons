import React from "react";
const CallEnd_02: React.FC<
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
        d="m1.437 11.809-.102-.982c-.163-1.564-.33-4.107 1.891-5.555 1.025-.668 2.152-1.211 3.748-1.635A19.7 19.7 0 0 1 12 3c1.708 0 3.421.21 5.025.637 1.596.424 2.723.968 3.748 1.635 2.22 1.448 2.054 3.991 1.892 5.556l-.103.981-6.48-2.548V5.506A18.4 18.4 0 0 0 12 5.056c-1.389 0-2.775.15-4.083.45V9.26z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m12 21 3.707-3.707-1.414-1.414L13 17.172v-5.586h-2v5.586l-1.293-1.293-1.414 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CallEnd_02;
