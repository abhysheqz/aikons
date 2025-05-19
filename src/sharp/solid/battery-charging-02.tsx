import React from "react";
const BatteryCharging_02: React.FC<
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
        d="m10.916 5.617 1.29.766-2.888 4.867h3.998l-4.234 7.133-1.29-.766 2.89-4.867H6.683z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.68 5.25H2a.75.75 0 0 0-.75.75v12c0 .414.336.75.75.75H7.25l-1.172-.696L8.486 14H4.488z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.317 18.75H19a.75.75 0 0 0 .75-.75v-2.866l3-.507V9.373l-3-.507V6a.75.75 0 0 0-.75-.75h-6.253l1.172.696L11.513 10h4zm9.433-5.137v-3.226l1.5.254v2.719z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BatteryCharging_02;
