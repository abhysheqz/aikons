import React from "react";
const Joystick_02: React.FC<
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
        d="M12 1.25a4.25 4.25 0 0 0-.75 8.434V13h-.772a3 3 0 0 0-2.827 1.995l-.476 1.34A2.75 2.75 0 0 0 5.3 17.98l-.949 2.371a1.75 1.75 0 0 0 1.625 2.4h12.046a1.75 1.75 0 0 0 1.625-2.4L18.7 17.98a2.75 2.75 0 0 0-1.875-1.644l-.477-1.34A3 3 0 0 0 13.522 13h-.772V9.684A4.251 4.251 0 0 0 12 1.25m2.672 15-.208-.585a1 1 0 0 0-.942-.665h-3.044a1 1 0 0 0-.942.665l-.208.585z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Joystick_02;
