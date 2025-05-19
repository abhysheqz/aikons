import React from "react";
const Hangout: React.FC<
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
        d="M11.883 1.25c-5.245 0-9.632 4.375-9.633 9.5 0 4.764 4.2 8.433 8.883 8.791V22a.75.75 0 0 0 1.082.673c5.49-2.707 9.535-7.075 9.535-11.923 0-5.216-4.58-9.5-9.867-9.5M10.5 12c0 .743-.552 1.486-1.041 1.82-.229.154-.459-.044-.459-.32V12H7a.5.5 0 0 1-.5-.5v-3A.5.5 0 0 1 7 8h3a.5.5 0 0 1 .5.5zm6.5 0c0 .743-.552 1.486-1.041 1.82-.229.154-.459-.044-.459-.32V12h-2a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hangout;
