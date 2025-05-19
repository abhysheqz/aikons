import React from "react";
const Laptop: React.FC<
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
        d="M5 2.75A2.25 2.25 0 0 0 2.75 5v10.75h18.5V5A2.25 2.25 0 0 0 19 2.75zM2.286 17.25h19.428l1.457 2.915a.75.75 0 0 1-.671 1.085h-21a.75.75 0 0 1-.67-1.085z"
      />
    </svg>
  );
};
export default Laptop;
