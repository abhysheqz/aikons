import React from "react";
const WifiCircle: React.FC<
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
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m6.164-2.497A7.8 7.8 0 0 1 11.994 8c1.704 0 3.283.561 4.593 1.512l-1.174 1.619A5.8 5.8 0 0 0 11.995 10c-1.25 0-2.42.408-3.409 1.124zm1.928 2.616a5.5 5.5 0 0 1 2.653-.687c.96 0 1.867.251 2.664.693l-.97 1.75a3.5 3.5 0 0 0-1.694-.443c-.603 0-1.175.156-1.687.438zM12 15a1 1 0 1 0 0 2h.006a1 1 0 0 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WifiCircle;
