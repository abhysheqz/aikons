import React from "react";
const ListSetting: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M16.5 19.857V21m0-1.143a2.93 2.93 0 0 1-2.427-1.272m2.427 1.272a2.93 2.93 0 0 0 2.427-1.272M16.5 14.143a2.93 2.93 0 0 1 2.427 1.272M16.5 14.143a2.93 2.93 0 0 0-2.427 1.272m2.427-1.272V13m3.5 1.714-1.073.701M13 19.285l1.073-.7M13 14.715l1.073.7M20 19.285l-1.073-.7m0-3.17a2.803 2.803 0 0 1 0 3.17m-4.854-3.17a2.803 2.803 0 0 0 0 3.17"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M4 3h16M4 9h16M4 15h5" />
    </svg>
  );
};
export default ListSetting;
