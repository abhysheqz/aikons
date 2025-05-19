import React from "react";
const AudioBook_02: React.FC<
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
        d="M18.462 11.793a1 1 0 0 1 1.122.402c.09.135.165.294.217.406l.097.212.09.198c.134.29.285.593.471.872.38.57.782.867 1.293.867v2a3.17 3.17 0 0 1-2-.698v3.198a3.5 3.5 0 1 1-2-3.163V12.75a1 1 0 0 1 .71-.957m-.71 7.457a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.145 1.25A3.9 3.9 0 0 0 2.25 5.158v13.683a3.9 3.9 0 0 0 3.895 3.909h6.894a4.75 4.75 0 0 1 3.461-8.244V12.75a2.25 2.25 0 0 1 4.122-1.248q.07.106.128.21V7.114h-2.923V5.159a.975.975 0 0 0-.973-.977H6.144v1.954h9.736v.978H6.145A1.95 1.95 0 0 1 4.197 5.16v-.002a1.95 1.95 0 0 1 1.948-1.953H20.75V1.25z"
      />
    </svg>
  );
};
export default AudioBook_02;
