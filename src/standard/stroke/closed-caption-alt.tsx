import React from "react";
const ClosedCaptionAlt: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.17 20.89c4.184-.277 7.516-3.657 7.79-7.9.053-.83.053-1.69 0-2.52-.274-4.242-3.606-7.62-7.79-7.899a33 33 0 0 0-4.34 0c-4.184.278-7.516 3.657-7.79 7.9-.053.83-.053 1.69 0 2.52.1 1.545.783 2.976 1.588 4.184.37.82.569.825-.115 2.787a1 1 0 0 1-.03.07q-.24.458-.357.7c-.08.165-.057.36.087.473.17.134.44.285.786.293 1.245.03 2.084-.322 2.75-.813.377-.279.751-.685.751-.685s.332.34.844.551c.46.19.995.307 1.485.34 1.425.094 2.914.094 4.342 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15 16h2M7 16h5M16 13h1m-6 0h2m-6 0h1"
      />
    </svg>
  );
};
export default ClosedCaptionAlt;
