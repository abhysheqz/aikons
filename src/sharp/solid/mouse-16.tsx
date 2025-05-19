import React from "react";
const Mouse_16: React.FC<
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
        d="M11.25 5.275V8.25h-.75a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75h-.75V5.275c2.388.163 4.036 1.118 5.073 2.66 1.1 1.639 1.427 3.823 1.427 6.065s-.326 4.427-1.427 6.066C16.68 21.764 14.797 22.75 12 22.75s-4.681-.986-5.823-2.684C5.077 18.426 4.75 16.242 4.75 14s.326-4.426 1.427-6.065c1.037-1.542 2.685-2.497 5.073-2.66"
      />
      <path
        fill="currentColor"
        d="M11.25 9.75v2.5h1.5v-2.5zM5.25 3.5V1.25h1.5v1.5H12a.75.75 0 0 1 .75.75v1.775a11 11 0 0 0-1.5 0V4.25H6a.75.75 0 0 1-.75-.75"
      />
    </svg>
  );
};
export default Mouse_16;
