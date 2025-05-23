import React from "react";
const SwipeDown_05: React.FC<
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
        d="M18.5 2v5.33M16 5.5 18.5 8 21 5.5M8.002 22v-2.005L3.6 14.123l-.074-.1c-.32-.413-.576-.911-.516-1.43.091-.8.684-1.458 1.452-1.57.45-.066 1.062.065 1.475.444l2.097 2.125-.03-1.723V3.566C8.002 2.702 8.676 2 9.508 2s1.506.7 1.506 1.565L11 11.5m.015-3.02 1.69.054c.827.125 1.237.7 1.276 1.414L14 12m-.098-2.497h1.55c.852-.032 1.57.694 1.543 1.538m0 0L17 12.5m-.005-1.46h1.6c.802.02 1.379.686 1.379 1.518l.022 2.41c-.031.682-.009 1.807-.25 2.612-.051.169-.137.325-.233.473l-.2.31-.437.572-.875 1.066v1.997"
      />
    </svg>
  );
};
export default SwipeDown_05;
