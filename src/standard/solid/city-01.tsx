import React from "react";
const City_01: React.FC<
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
        d="M9 7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm2.5 5.752h2a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5m0 2.999h2a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5m2 2.999a.75.75 0 1 0 0-1.5l-2 .002a.75.75 0 1 0 0 1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 12.994a2 2 0 0 1 2-2h4a1 1 0 0 1 0 2H4v9a1 1 0 1 1-2 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 22.001a1 1 0 0 1 1-1l20-.012a1 1 0 1 1 .001 2l-20 .011a1 1 0 0 1-1-.999"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.433 1.176a1 1 0 0 1 .924-.11l8 3.061a1 1 0 0 1 .643.934V22a1 1 0 1 1-2 0V5.75l-6-2.297V7.97a1 1 0 1 1-2 0V2a1 1 0 0 1 .433-.824"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default City_01;
