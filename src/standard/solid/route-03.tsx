import React from "react";
const Route_03: React.FC<
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
        d="M18 1.25c-2.63 0-4.75 2.152-4.75 4.79 0 1.463.674 2.538 1.446 3.42.338.386.711.752 1.061 1.095l.13.128c.397.39.76.756 1.071 1.142.523.65 1.548.673 2.091.022.321-.384.69-.753 1.09-1.15l.043-.043c.378-.375.781-.775 1.145-1.201.763-.893 1.423-1.978 1.423-3.413 0-2.638-2.12-4.79-4.75-4.79m0 3a1.75 1.75 0 1 0 0 3.5h.009a1.75 1.75 0 1 0 0-3.5zM1.25 19a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M5 10c0-2.348 2.165-4 4.5-4H11a1 1 0 1 1 0 2H9.5C7.97 8 7 9.034 7 10s.97 2 2.5 2h3c2.335 0 4.5 1.652 4.5 4s-2.165 4-4.5 4H11a1 1 0 1 1 0-2h1.5c1.53 0 2.5-1.035 2.5-2s-.97-2-2.5-2h-3C7.165 14 5 12.348 5 10"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Route_03;
