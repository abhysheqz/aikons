import React from "react";
const Python: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M11 5.5v.01M13 18.49v.01"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.498 8.5h-2v-2c0-1.404 0-2.107-.336-2.611a2 2 0 0 0-.552-.552C14.106 3 13.403 3 11.999 3s-2.107 0-2.611.337a2 2 0 0 0-.552.552c-.337.504-.337 1.207-.337 2.611v2H6.498c-1.404 0-2.107 0-2.611.337a2 2 0 0 0-.552.552c-.337.504-.337 1.207-.337 2.611s0 2.107.337 2.611a2 2 0 0 0 .552.552c.504.337 1.207.337 2.611.337h2v2c0 1.404 0 2.107.338 2.611a2 2 0 0 0 .552.552c.504.337 1.206.337 2.61.337 1.405 0 2.108 0 2.612-.337.218-.146.406-.334.552-.552.337-.504.337-1.207.337-2.611v-2h1.999c1.404 0 2.107 0 2.611-.337.219-.146.406-.334.552-.552.337-.504.337-1.207.337-2.611s0-2.107-.337-2.611a2 2 0 0 0-.552-.552c-.504-.337-1.207-.337-2.611-.337"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.5 8.5V12h-7v3.5m3.5 0h3.5m-7-7H12"
      />
    </svg>
  );
};
export default Python;
