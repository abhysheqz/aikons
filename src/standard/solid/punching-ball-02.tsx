import React from "react";
const PunchingBall_02: React.FC<
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
        d="M12 1.25c-1.388 0-2.694.419-3.666 1.24C7.35 3.32 6.75 4.53 6.75 6c0 .733.149 1.322.413 1.83.258.496.606.875.932 1.2l.247.244c.565.554 1.085 1.063 1.462 2.005l.025.056.224.448c.2.4.542.701.947.854v5.113H9.16c-.7 0-1.333.417-1.61 1.06l-1.24 2.895A.75.75 0 0 0 7 22.75h10a.75.75 0 0 0 .689-1.045l-1.24-2.894a1.75 1.75 0 0 0-1.609-1.061H13v-5.113a1.75 1.75 0 0 0 .947-.854l.224-.448.025-.057c.377-.941.897-1.45 1.462-2.004q.123-.119.247-.244c.326-.325.675-.704.932-1.2.265-.508.413-1.097.413-1.83 0-1.47-.6-2.68-1.584-3.51-.972-.821-2.278-1.24-3.666-1.24"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PunchingBall_02;
