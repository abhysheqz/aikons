import React from "react";
const MapsOff: React.FC<
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
        d="M21.336 22.75 1.25 2.664 2.664 1.25 22.75 21.336z"
      />
      <path
        fill="currentColor"
        d="m7.25 18.044-5.013 1.668A.75.75 0 0 1 1.25 19V4.831a.75.75 0 0 1 .408-.667l1.656-.85L7.25 7.25zM14.25 20.494l-5.5-2.36V8.75l5.5 5.5zM8.75 1.25l5.5 2.36v7.104l-5.5-5.5zM22 3.998a.75.75 0 0 1 .75.75v14.466l-7-7V3.998zM20.75 20.75h-5v-5zM5.652 2.116l1.598-.82v2.418z"
      />
    </svg>
  );
};
export default MapsOff;
