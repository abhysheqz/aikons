import React from "react";
const WaterfallUp_01: React.FC<
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
        d="M8 18a1 1 0 0 1-1-1v-3a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1M12 15a1 1 0 0 1-1-1V9a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1M16 10a1 1 0 0 1-1-1V6a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1M20 11a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 2a1 1 0 0 1 1 1v11c0 1.678.002 2.836.12 3.707.112.842.316 1.265.612 1.56.296.297.719.5 1.56.614.872.117 2.03.119 3.708.119h11a1 1 0 1 1 0 2H9.928c-1.589 0-2.882 0-3.902-.137-1.064-.143-1.979-.452-2.708-1.181s-1.038-1.644-1.18-2.708C2 16.954 2 15.66 2 14.072V3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WaterfallUp_01;
