import React from "react";
const RoadLocation_02: React.FC<
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
        d="M12 1.25c-2.63 0-4.75 2.152-4.75 4.79 0 1.463.674 2.538 1.446 3.42.338.386.711.752 1.061 1.095l.13.128c.397.39.76.756 1.071 1.142.523.65 1.548.673 2.091.022.321-.384.69-.753 1.09-1.15l.043-.043c.378-.375.781-.775 1.145-1.201.763-.893 1.423-1.978 1.423-3.413 0-2.638-2.12-4.79-4.75-4.79m0 3.25a1.5 1.5 0 0 0 0 3h.009a1.5 1.5 0 0 0 0-3zM4.5 15a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m5.5 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m5.5 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 10a3 3 0 0 1 3-3h1a1 1 0 0 1 0 2H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1h-1a1 1 0 1 1 0-2h1a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RoadLocation_02;
