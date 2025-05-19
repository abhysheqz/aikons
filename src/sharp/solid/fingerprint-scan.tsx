import React from "react";
const FingerprintScan: React.FC<
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
        d="M6.75 11.039C6.75 8.118 9.1 5.75 12 5.75s5.25 2.368 5.25 5.289v5.288h-1.91v-5.289c0-1.858-1.495-3.365-3.34-3.365S8.66 9.18 8.66 11.04v5.288H6.75zm2.864 0A2.395 2.395 0 0 1 12 8.635a2.395 2.395 0 0 1 2.386 2.404v2.403h-1.909V11.04a.48.48 0 0 0-.477-.481.48.48 0 0 0-.477.48v6.25h-1.91zm4.772 3.365v3.846h-1.909v-3.846zM1.75 1.75h7.81v1.952H3.702V9.56H1.75zm12.69 0h7.81v7.81h-1.952V3.702H14.44zM3.703 14.44v5.858H9.56v1.952H1.75v-7.81zm18.548 0v7.81h-7.81v-1.952h5.858V14.44z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FingerprintScan;
