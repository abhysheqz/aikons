import React from "react";
const PointingRight_01: React.FC<
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
        d="M18.793 1.293a1 1 0 0 1 1.414 0l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 1 1-1.414-1.414l.793-.793H16a1 1 0 1 1 0-2h3.586l-.793-.793a1 1 0 0 1 0-1.414M9.448 5.787a2.53 2.53 0 0 1 3.106-.01 2.4 2.4 0 0 1 .292 3.55l-.97.923h8.374a2.5 2.5 0 0 1 0 5h-4.998c-.063 1.864-.638 4.569-2.685 6.603-.942.936-2.32.991-3.46.82-1.17-.174-2.33-.62-3.107-.992l-2.155-.931H2a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 .75-.75h1.744l5.703-4.462z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PointingRight_01;
