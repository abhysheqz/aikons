import React from "react";
const FirstAidKit: React.FC<
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
        d="M8.167 4v1.75H6.25V3.125c0-.483.43-.875.958-.875h9.584c.529 0 .958.392.958.875V5.75h-1.917V4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 5.25a.75.75 0 0 0-.75.75v15c0 .414.336.75.75.75h20a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75zm9 4.25v3H8v2h3v3h2v-3h3v-2h-3v-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FirstAidKit;
