import React from "react";
const Wardrobe_01: React.FC<
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
        d="M5 22.25v-3h2v3zm12 0v-3h2v3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.225 1.75a.974.974 0 0 0-.975.974v16.552c0 .538.437.974.975.974h17.55a.974.974 0 0 0 .975-.974V2.724a.974.974 0 0 0-.975-.974zm.974 12.5v4.052H12V14.25zm0-10.553V7.75H12V3.697zM12 12.75H4.2v-3.5H12zm3.751-.25v-3h-1.5v3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wardrobe_01;
