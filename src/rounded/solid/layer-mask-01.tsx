import React from "react";
const LayerMask_01: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M6.276 18.678a8.76 8.76 0 0 0 6.356 2.095l-4.704-3.87zm8.84 1.55a8.8 8.8 0 0 0 2.874-1.787l-6.334-5.546-2.363 2.54zm4.175-3.306a8.8 8.8 0 0 0 1.297-3.014l-5.554-4.645-2.015 2.167zm1.488-5.462a8.77 8.77 0 0 0-2.532-5.651l-1.849 1.988z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LayerMask_01;
