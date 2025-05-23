import React from "react";
const ThreeFinger_05: React.FC<
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
        d="M15.198 1.77a1.27 1.27 0 0 0-1.473 1.024l-1.276 7.19a.424.424 0 0 1-.835-.145l.883-4.978a1.264 1.264 0 0 0-1.031-1.464 1.27 1.27 0 0 0-1.473 1.025L8.06 15.107a.426.426 0 0 1-.723.215l-2.55-2.649a1.495 1.495 0 0 0-2.212.125 1.47 1.47 0 0 0-.028 1.812l3.406 4.514c.784 1.039 1.14 1.506 1.562 1.867a5.24 5.24 0 0 0 2.289 1.138c.544.119 1.134.121 2.441.121h2.806a5.22 5.22 0 0 0 5.102-4.065l1.576-7.144A1.264 1.264 0 0 0 20.7 9.577a1.27 1.27 0 0 0-1.473 1.025l-.098.553a.424.424 0 0 1-.835-.146l.883-4.978a1.264 1.264 0 0 0-1.031-1.464 1.27 1.27 0 0 0-1.473 1.025l-.884 4.978a.424.424 0 0 1-.835-.146l1.276-7.19a1.264 1.264 0 0 0-1.031-1.465"
      />
    </svg>
  );
};
export default ThreeFinger_05;
