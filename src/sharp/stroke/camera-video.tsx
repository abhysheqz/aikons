import React from "react";
const CameraVideo: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m4.5 21.5 4-4m2 0 4 4m-5-4v5M17 17.5v-10H2v10zM17 10.5 22 8v9l-5-2.5"
      />
      <circle
        cx={12.5}
        cy={5}
        r={2.5}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={7}
        cy={4.5}
        r={3}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};
export default CameraVideo;
