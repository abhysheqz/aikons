import React from "react";
const SpeedTrain_02: React.FC<
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
        d="M2 2.75h8a.75.75 0 0 1 .416.126l5.811 3.874H10v1.5h8.477l2.779 1.852a3.356 3.356 0 0 1-1.862 6.148h-1.7l-6.206-5.32a.75.75 0 0 0-.488-.18H1.25V3.5A.75.75 0 0 1 2 2.75"
      />
      <path
        fill="currentColor"
        d="m10.723 12.25 4.666 4H2a.75.75 0 0 1-.75-.75v-3.25zM19 19.25h3v-2H2v2h3v2h2v-2h4v2h2v-2h4v2h2z"
      />
    </svg>
  );
};
export default SpeedTrain_02;
