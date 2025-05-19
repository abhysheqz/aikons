import React from "react";
const LaptopIssue: React.FC<
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
        d="M2.286 17.25h19.428l1.457 2.915a.75.75 0 0 1-.671 1.085h-21a.75.75 0 0 1-.67-1.085zM19 2.75A2.25 2.25 0 0 1 21.25 5v10.75H2.75V5A2.25 2.25 0 0 1 5 2.75zm-7.004 8.5a1 1 0 1 0 0 2h.009a1 1 0 0 0 0-2zm0-6a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-1-1"
      />
    </svg>
  );
};
export default LaptopIssue;
