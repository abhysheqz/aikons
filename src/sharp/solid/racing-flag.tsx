import React from "react";
const RacingFlag: React.FC<
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
        d="m15.856 11.854-1.665-4.012c-.776.272-1.56.609-2.357.967l-.563.255-.866.39 1.576 3.951q.308-.169.61-.327c1.063-.557 2.13-1.03 3.265-1.224M17.449 11.778c.944.076 1.968.379 3.095 1.031l1.706.987-1.948-5.915c-1.569-.78-3.106-.811-4.663-.461zM19.693 6.031l-1.144-3.473-.213-.143c-1.677-1.132-3.388-1.066-5.02-.592l1.74 4.193c1.483-.366 3.038-.464 4.637.015M11.9 2.326c-.482.198-.955.412-1.414.62l-.046.02c-.766.348-1.51.685-2.24.96L9.85 8.058l.796-.359.574-.26a32 32 0 0 1 2.395-.987zM6.764 4.374c-1.194.282-2.374.298-3.588-.19L1.75 3.612 3.27 8.9c1.128.575 2.303.583 3.6.263.524-.13 1.054-.31 1.596-.52zM10.654 14.127l-1.632-4.092c-.598.233-1.198.437-1.793.584-1.13.28-2.288.368-3.444.071L7.182 22.5l1.443-.416L6.66 15.25c.835.076 1.644-.102 2.417-.393a14 14 0 0 0 1.576-.73"
      />
    </svg>
  );
};
export default RacingFlag;
