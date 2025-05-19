import React from "react";
const AirplaneTakeOff_01: React.FC<
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
        d="M13.504 4.94c3.1-1.466 6.88-.54 8.921 2.243l.003.005c.75 1.039.108 2.373-.974 2.673l-5.894 1.754-.866 2.163a.75.75 0 0 1-.459.433l-4.5 1.5a.75.75 0 0 1-.948-.948l.577-1.732-5.197 1.2a.75.75 0 0 1-.874-.475l-2-5.5a.75.75 0 0 1 .32-.9l2.5-1.5a.75.75 0 0 1 .97.175l1.63 2.036c1.01-.478 5.462-2.517 6.791-3.126"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.998 19.75h-16v-2h16z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AirplaneTakeOff_01;
