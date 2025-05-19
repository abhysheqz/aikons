import React from "react";
const Airpod_03: React.FC<
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
        d="M16.667 8.589V20a1 1 0 0 1-1 1H14.5a1 1 0 0 1-1-1V7.507c0-2.743 2.69-4.484 4.944-4.507C20.387 2.98 22 4.124 22 6.13v1.927c0 1.444-1.07 2.72-2.667 3.056a4.52 4.52 0 0 1-2.666-.269M7.333 8.589V20a1 1 0 0 0 1 1H9.5a1 1 0 0 0 1-1V7.507C10.5 4.764 7.81 3.023 5.556 3 3.613 2.98 2 4.124 2 6.13v1.927c0 1.444 1.07 2.72 2.667 3.056a4.52 4.52 0 0 0 2.666-.269"
      />
    </svg>
  );
};
export default Airpod_03;
