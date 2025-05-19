import React from "react";
const BlushBrush_01: React.FC<
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
        d="m15.72 12.341-.474 4.734a.75.75 0 0 1-1.277.455l-7.496-7.5a.75.75 0 0 1 .455-1.276l4.73-.474L14.5 5.44l4.06 4.06zM6.127 11.1l-4.46 2.23a.75.75 0 0 0-.194 1.2l8 8a.75.75 0 0 0 1.2-.194l2.23-4.458zM20.741 1.47a.75.75 0 0 0-1.06 0l-3.87 3.868 2.853 2.852 3.869-3.868a.75.75 0 0 0 0-1.06z"
      />
    </svg>
  );
};
export default BlushBrush_01;
