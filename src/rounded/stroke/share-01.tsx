import React from "react";
const Share_01: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.396 4.5H8.354c-2.946 0-4.42 0-5.335.879-.915.878-.915 2.293-.915 5.121v4c0 2.828 0 4.243.915 5.121.916.879 2.389.879 5.335.879h4.207c2.946 0 4.42 0 5.334-.879.593-.569.802-1.363.876-2.621"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.167 7V3.854c0-.196.165-.354.368-.354.098 0 .191.037.26.104l4.732 4.542c.236.227.369.534.369.854s-.133.627-.369.854l-4.732 4.542a.38.38 0 0 1-.26.104.36.36 0 0 1-.368-.354V11h-3.051c-4.241 0-5.803 3.5-5.803 3.5V12c0-2.761 2.331-5 5.208-5z"
      />
    </svg>
  );
};
export default Share_01;
