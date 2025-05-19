import React from "react";
const DeliveryTracking_02: React.FC<
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
        d="M1.25 3.5c0-.966.784-1.75 1.75-1.75h18c.966 0 1.75.784 1.75 1.75v3c0 .595-.297 1.12-.75 1.436V10.5a1 1 0 1 1-2 0V8.25H4V18.5a1 1 0 0 0 1 1h6.5a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3V7.936A1.75 1.75 0 0 1 1.25 6.5zM10 9.55a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm3.25 6.884c0-2.324 1.916-4.184 4.25-4.184s4.25 1.86 4.25 4.184c0 1.336-.56 2.377-1.573 3.25-.585.503-1.633 1.607-2.055 2.235a.75.75 0 0 1-1.257-.02c-.389-.62-1.443-1.7-2.042-2.215-1.014-.873-1.573-1.914-1.573-3.25m3.25.066a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H17.5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DeliveryTracking_02;
