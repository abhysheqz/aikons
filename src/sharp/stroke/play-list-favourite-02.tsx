import React from "react";
const PlayListFavourite_02: React.FC<
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
        d="M20 12V2H2v18h9"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 14.5v-7l5.5 3.5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M20.743 15.29c-1.596-.833-2.743.394-2.743.394s-1.146-1.227-2.743-.394C13.323 16.298 13.184 20.247 18 22c4.816-1.753 4.677-5.702 2.743-6.71Z"
      />
    </svg>
  );
};
export default PlayListFavourite_02;
