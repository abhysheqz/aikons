import React from "react";
const MessageUnlock_01: React.FC<
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
        d="M16.447 5.499v-1.5c0-1.104.892-1.999 1.993-1.999.595 0 1.13.262 1.494.677m-4.982 2.822h6.975v5.498h-6.974z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.48 14.995h8.967M7.48 9.997h4.483"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.59 3.009C1.677 4 .282 13.274 3.61 17.994l-1.584 3.928c-.03.075-.04.098.037.07l4.404-1.49c2.351 1.49 8.495 1.341 10.704.168 2.01-1.067 4.353-3.075 4.74-7.065M9.59 3.01a8 8 0 0 1 .473-.014m-.473.014 3.14-.014"
      />
    </svg>
  );
};
export default MessageUnlock_01;
