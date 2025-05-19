import React from "react";
const ArrangeByNumbers_1: React.FC<
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
        d="M6.656 13H8.74v7h1v2h-4v-2h1v-4.115l-.258.286L5 14.829zM4.5 2h6v9h-6V9h4V7.5h-4zm4 3.5V4h-2v1.5zM17.293 3.293v13.586l.793-.793L19.5 17.5l-3.207 3.207-3.207-3.207 1.414-1.414.793.793V3.292z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ArrangeByNumbers_1;
