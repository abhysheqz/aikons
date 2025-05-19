import React from "react";
const PowerService: React.FC<
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
        d="M9.38 2.12a.75.75 0 0 0-1.017-.272L4.9 3.815a.75.75 0 0 0-.276 1.032C5.76 6.786 4.306 9.283 2 9.283a.75.75 0 0 0-.75.75v3.934c0 .414.336.75.75.75 2.305 0 3.76 2.497 2.621 4.437a.75.75 0 0 0 .277 1.032l3.464 1.966a.75.75 0 0 0 1.017-.272c1.175-2.002 4.069-2.002 5.244 0a.75.75 0 0 0 1.017.272l3.464-1.967a.75.75 0 0 0 .277-1.031c-1.14-1.94.315-4.437 2.62-4.437a.75.75 0 0 0 .75-.75v-3.934a.75.75 0 0 0-.75-.75c-2.306 0-3.76-2.497-2.622-4.436a.75.75 0 0 0-.277-1.032l-3.464-1.967a.75.75 0 0 0-1.017.272c-1.174 2-4.066 2-5.24 0M11.805 11l2.074-3.318-1.696-1.06L8.195 13h4l-2.073 3.318 1.696 1.06L15.804 11z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PowerService;
