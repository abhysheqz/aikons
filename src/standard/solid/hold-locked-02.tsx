import React from "react";
const HoldLocked_02: React.FC<
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
        d="M15.75 15.5a2.25 2.25 0 0 1 4.5 0v.75H21a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 .75-.75h.75zm3 .75h-1.5v-.75a.75.75 0 0 1 1.5 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.333 8.92a.45.45 0 1 1-.9 0V3.514a1.19 1.19 0 1 0-2.382 0V13.77a.45.45 0 0 1-.772.314l-2.163-2.388c-.868-.958-2.45-.6-2.823.638-.14.463-.07.964.19 1.372l4.323 6.775a2.75 2.75 0 0 0 2.318 1.27h3.626V17c0-1 .652-1.847 1.555-2.14a3.751 3.751 0 0 1 6.474-1.877v-6.33a1.26 1.26 0 1 0-2.52 0V10.5a.45.45 0 0 1-.9 0V4.032a1.27 1.27 0 0 0-2.539 0v5.822a.45.45 0 0 1-.9 0V2.546a1.294 1.294 0 1 0-2.588 0z"
      />
    </svg>
  );
};
export default HoldLocked_02;
