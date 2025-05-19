import React from "react";
const Tulip: React.FC<
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
        d="M11.725 1.302a.75.75 0 0 1 .55 0l.013.006c.092.041.327.148.454.215.263.139.617.35.976.635.367.293.77.691 1.072 1.198A7 7 0 0 0 12 5.101a7 7 0 0 0-2.79-1.745 4.5 4.5 0 0 1 1.073-1.198c.358-.286.713-.496.976-.635.133-.07.466-.22.466-.22M7 4.25a5.75 5.75 0 0 1 5 2.909 5.75 5.75 0 0 1 5-2.909.75.75 0 0 1 .75.75v3A5.75 5.75 0 0 1 13 13.663v2.188a6.98 6.98 0 0 1 5-2.101 1 1 0 1 1 0 2 5 5 0 0 0-5 5v1a1 1 0 1 1-2 0v-1a5 5 0 0 0-5-5 1 1 0 1 1 0-2 6.98 6.98 0 0 1 5 2.101v-2.188A5.75 5.75 0 0 1 6.25 8V5A.75.75 0 0 1 7 4.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tulip;
