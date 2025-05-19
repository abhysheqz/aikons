import React from "react";
const SwipeUp_01: React.FC<
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
        d="m7.102 20.25-4.319-5.703a2.53 2.53 0 0 1-.006-3.101 2.4 2.4 0 0 1 3.503-.337l.024.022.946.993V3.75a2.5 2.5 0 0 1 5 0v4.998c1.864.063 4.569.638 6.603 2.685.936.942.991 2.32.82 3.46-.175 1.177-.626 2.343-.998 3.12l-.697 1.454-.336.7v2.583H7.102z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m18.543 1.25 3.207 3.207-1.414 1.414-.793-.793v3.586h-2V5.078l-.793.793-1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SwipeUp_01;
