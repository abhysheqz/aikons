import React from "react";
const Litecoin: React.FC<
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
        d="M11.75 1C5.813 1 1 5.813 1 11.75S5.813 22.5 11.75 22.5 22.5 17.687 22.5 11.75 17.687 1 11.75 1m1.712 5.987a.75.75 0 0 0-1.423-.474l-1.526 4.577-1.926.428a.75.75 0 1 0 .326 1.464l1.047-.232-.921 2.763a.75.75 0 0 0 .711.987h5a.75.75 0 1 0 0-1.5h-3.96l.877-2.63 1.746-.388a.75.75 0 0 0-.326-1.464l-.867.192z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Litecoin;
