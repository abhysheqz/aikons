import React from "react";
const GroupLayers: React.FC<
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
        d="M1 3.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M17 3.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M17 19.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M1 19.75a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.75 2.75h12v2h-12zm-3 15v-12h2v12zm16 0v-12h2v12zm-13 1h12v2h-12z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.712 7.032a2.05 2.05 0 0 1 2.076 0L15.58 8.68c.969.572.969 1.952 0 2.523l-2.792 1.647a2.05 2.05 0 0 1-2.076 0L7.92 11.202a1.458 1.458 0 0 1 0-2.523z"
      />
      <path
        fill="currentColor"
        d="M6.889 13.051a1 1 0 0 1 1.37-.353l3.47 2.047q.004.004.021.005.018-.001.022-.005l3.47-2.047a1 1 0 1 1 1.016 1.722l-3.47 2.048a2.05 2.05 0 0 1-2.076 0l-3.47-2.048a1 1 0 0 1-.353-1.369"
      />
    </svg>
  );
};
export default GroupLayers;
