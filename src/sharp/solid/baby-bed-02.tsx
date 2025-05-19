import React from "react";
const BabyBed_02: React.FC<
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
        d="M7 15V7h2v8zm4 0V7h2v8zm4 0V7h2v8zM12 19c3.701 0 7.055-1.076 9.583-2.819l1.167 1.638C19.86 19.811 16.095 21 12 21s-7.86-1.19-10.75-3.181l1.167-1.638C4.945 17.923 8.298 19 12 19"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 5H2V3h2a1 1 0 0 1 1 1v14H3zm17-2h2v2h-1v13h-2V4a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20 8H4V6h16zM20 16H4v-2h16z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BabyBed_02;
