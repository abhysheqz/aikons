import React from "react";
const Pivot: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 21H4.5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v8.5M8.5 2v19M21.5 8h-19M14 19.5h5.5a2 2 0 0 0 2-2v-2m-7.5 4 2.5-2.5M14 19.5l2.5 2.5"
      />
    </svg>
  );
};
export default Pivot;
