import React from "react";
const ArtificialIntelligence_07: React.FC<
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
        d="M10.402 1.25A1.75 1.75 0 0 0 8.67 2.749L8.41 4.554a8.4 8.4 0 0 0-1.14.665L5.553 4.52a1.75 1.75 0 0 0-2.17.738L1.796 7.975a1.75 1.75 0 0 0 .436 2.265l1.451 1.128q-.045.632 0 1.264l-1.45 1.128a1.75 1.75 0 0 0-.437 2.265l1.589 2.716a1.75 1.75 0 0 0 2.17.738l1.715-.697q.536.372 1.14.664l.261 1.805a1.75 1.75 0 0 0 1.732 1.499H12a.75.75 0 0 0 .75-.731V16.25H12a4.25 4.25 0 0 1 0-8.5h.75V1.981A.75.75 0 0 0 12 1.25zm9.598 2a1.75 1.75 0 0 0-1.649 2.338l-.662.662H16a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 .53-.22l.882-.881q.277.1.588.101a1.75 1.75 0 1 0 0-3.5m0 7c-.698 0-1.3.409-1.582 1H15a.75.75 0 0 0 0 1.5h3.418A1.75 1.75 0 1 0 20 10.25M18.25 19a1.75 1.75 0 1 0 1.162-1.649l-.882-.881a.75.75 0 0 0-.53-.22h-2a.75.75 0 0 0 0 1.5h1.69l.661.662a1.8 1.8 0 0 0-.101.588"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArtificialIntelligence_07;
