import React from "react";
const Legal_02: React.FC<
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
        d="M13 10H2V7h11M13.5 21l1.5-3h4l1.5 3M12 21h10M21 14h-9m9-11h-2m0 0h-7m7 0h-5m5.5 0s.5 2.962.5 5.5-.5 5.5-.5 5.5m-6 0s-.5-2.961-.5-5.5c0-2.538.5-5.5.5-5.5"
      />
    </svg>
  );
};
export default Legal_02;
