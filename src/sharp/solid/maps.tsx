import React from "react";
const Maps: React.FC<
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
        d="M1.658 5.164 7.25 2.297v16.747l-5.013 1.668A.75.75 0 0 1 1.25 20V5.831a.75.75 0 0 1 .408-.667M14.25 21.494l-5.5-2.36V2.25l5.5 2.36zM15.75 21.75H22a.75.75 0 0 0 .75-.75V5.748a.75.75 0 0 0-.75-.75h-6.25z"
      />
    </svg>
  );
};
export default Maps;
