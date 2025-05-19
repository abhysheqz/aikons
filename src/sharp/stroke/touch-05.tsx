import React from "react";
const Touch_05: React.FC<
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
        strokeWidth={1.5}
        d="M8.504 22v-2.005l-4.403-5.872-.074-.1c-.32-.413-.576-.911-.516-1.43.091-.8.684-1.458 1.452-1.57.45-.066 1.062.065 1.475.444l2.097 2.125-.03-1.723V3.566C8.504 2.702 9.178 2 10.01 2s1.506.7 1.506 1.565v8.42m0-3.5 1.69.05c.827.124 1.237.698 1.276 1.413l.02 2.56m-.1-3.005h1.552c.85-.032 1.569.694 1.542 1.538m0 0v1.975m0-1.975h1.6c.802.018 1.379.685 1.379 1.517l.022 2.41c-.032.682-.01 1.807-.25 2.612-.051.169-.137.325-.233.473l-.2.31-.437.572-.875 1.066v1.997"
      />
    </svg>
  );
};
export default Touch_05;
