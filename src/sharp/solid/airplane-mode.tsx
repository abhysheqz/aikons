import React from "react";
const AirplaneMode: React.FC<
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
        d="M21 12.5 15.009 9 15 6.5C15.009 3 12 2 12 2S8.991 3 8.991 6.5V9L3 12.5v3l6.728-1.674L10 17.5 7 20l1 2 4-1.5 4 1.5 1-2-3-2.5.273-3.674L21 15.5z"
      />
    </svg>
  );
};
export default AirplaneMode;
