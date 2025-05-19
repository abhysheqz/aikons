import React from "react";
const SpeedTrain_01: React.FC<
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
        d="M5 19.25H2v-2h20v2h-3v2h-2v-2h-4v2h-2v-2H7v2H5zM10.046 2.75H2.227a.97.97 0 0 0-.977.964V7.75H5a3.75 3.75 0 0 1 3.75 3.75v1a.75.75 0 0 1-.75.75H1.25v2.036a.97.97 0 0 0 .977.964h17c1.945 0 3.523-1.557 3.523-3.477a3.47 3.47 0 0 0-1.569-2.893L10.588 2.912a1 1 0 0 0-.542-.162m8.933 8L10.75 5.337V6.5c0 2.303 2.006 4.25 4.583 4.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.25 11.75h6v-.25A2.25 2.25 0 0 0 5 9.25H1.25z"
      />
    </svg>
  );
};
export default SpeedTrain_01;
