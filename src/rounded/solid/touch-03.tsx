import React from "react";
const Touch_03: React.FC<
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
        d="M7.755 4.25a2.5 2.5 0 1 1 5 0v4.61l2.376.38c.942.141 1.685.253 2.276.381.6.13 1.102.29 1.544.554 1.277.765 2.299 1.988 2.299 3.799 0 1.087-.262 1.87-.777 3.408-.354 1.063-.751 2.254-1.131 2.807a4.75 4.75 0 0 1-2.603 1.876c-.645.185-2.693.185-3.812.185-1.493 0-2.457 0-3.328-.358a5 5 0 0 1-.457-.218c-.828-.45-1.535-1.32-2.476-2.48l-3.359-4.133a2.49 2.49 0 0 1 3.552-3.46l.896.768z"
      />
    </svg>
  );
};
export default Touch_03;
