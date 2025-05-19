import React from "react";
const EaseInControlPoint: React.FC<
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
        d="m18.584 2.25.916.401.916.402-.002.004-.005.01-.017.04-.065.142a40.948 40.948 0 0 1-1.217 2.385c-.846 1.532-2.093 3.879-3.697 5.932-3.164 4.05-7.924 8.385-13.913 8.385v-2c5.01 0 9.251-3.666 12.337-7.616 1.52-1.947 2.711-4.199 3.522-5.667.405-.733.713-1.343.92-1.767.103-.212.305-.651.305-.651M16.67 17.75a3.001 3.001 0 1 1 0 2H14.5v-2zM12.5 19.75h-2v-2h2z"
      />
    </svg>
  );
};
export default EaseInControlPoint;
