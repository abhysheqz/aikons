import React from "react";
const PointingLeft_08: React.FC<
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
        d="M2.5 4.5 5 2M2.5 4.5 5 7M2.5 4.5h6M12.355 16H10.5A1.5 1.5 0 0 1 9 14.5V13m4 6h-1.5a1.5 1.5 0 0 1-1.5-1.5v-1.267M9 13h2.421M9 13H4a1.5 1.5 0 0 1 0-3h5m2 9.324V20.5a1.5 1.5 0 0 0 1.5 1.5h6a3 3 0 0 0 3-3v-7.394a3 3 0 0 0-1.336-2.497l-3.908-2.605A3 3 0 0 0 14.592 6h-.35a3 3 0 0 0-2.12.879L9 10m5 0H9"
      />
    </svg>
  );
};
export default PointingLeft_08;
