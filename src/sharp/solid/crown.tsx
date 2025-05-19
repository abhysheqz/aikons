import React from "react";
const Crown: React.FC<
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
        d="M12.651 1.628a.75.75 0 0 0-1.302 0L7.673 8.06 3.279 6.304a.75.75 0 0 0-1.007.878L5.414 18.75h13.172l3.142-11.568a.75.75 0 0 0-1.007-.878L16.328 8.06zM13 13h-2v2h2zM18.5 22.75h-13v-2h13z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Crown;
