import React from "react";
const MobileProtection: React.FC<
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
        d="M3.998 1.249h7.004v4.22c0 2.527 1.301 4.182 2.514 5.135.595.468 1.18.78 1.615.977.155.07 1.371.486 1.371.486s1.216-.416 1.371-.486a8 8 0 0 0 .875-.463v10.881a.75.75 0 0 1-.75.75h-14a.75.75 0 0 1-.75-.75v-20a.75.75 0 0 1 .75-.75M9.507 20.75h3.005v-1.5H9.507z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.502 10.75s-.671-.224-.856-.308a6.7 6.7 0 0 1-1.357-.82c-1.003-.787-2.037-2.111-2.037-4.152V2.401h.75a6 6 0 0 0 2.221-.446 10 10 0 0 0 .865-.429l.414-.276.414.276c.15.082.584.317.864.429a6 6 0 0 0 2.222.446h.75V5.47c0 2.04-1.034 3.365-2.037 4.152-.496.39-.99.654-1.357.82-.185.084-.856.308-.856.308"
      />
    </svg>
  );
};
export default MobileProtection;
