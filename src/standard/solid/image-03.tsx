import React from "react";
const Image_03: React.FC<
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
        d="M1.25 5.175A2.93 2.93 0 0 1 4.182 2.25h15.636c1.62 0 2.932 1.31 2.932 2.925v13.65a2.93 2.93 0 0 1-2.932 2.925H4.182a2.93 2.93 0 0 1-2.932-2.925zM10 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M4.18 19.8a.976.976 0 0 1-.977-.975v-2.03l2.942-2.941a1.207 1.207 0 0 1 1.707 0L10 16l4.646-4.646a1.207 1.207 0 0 1 1.707 0l4.442 4.442v3.029a.976.976 0 0 1-.977.975z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Image_03;
