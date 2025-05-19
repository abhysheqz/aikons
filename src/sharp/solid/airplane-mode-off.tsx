import React from "react";
const AirplaneModeOff: React.FC<
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
        d="M21.336 22.75 1.25 2.664 2.664 1.25 22.75 21.336zM20 12.5 14.009 9 14 6.5C14.009 3 11 2 11 2s-1.963.652-2.718 2.747L18.716 15.18 20 15.5z"
      />
      <path
        fill="currentColor"
        d="m13 17.5.273-3.674.736.183-6.018-6.018V9L2 12.5v3l6.728-1.674L9 17.5 6 20l1 2 4-1.5 4 1.5 1-2z"
      />
    </svg>
  );
};
export default AirplaneModeOff;
