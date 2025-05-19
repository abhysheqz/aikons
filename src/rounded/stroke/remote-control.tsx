import React from "react";
const RemoteControl: React.FC<
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
        strokeWidth={1.5}
        d="M12.5 2c3.3 0 4.95 0 5.975 1.025S19.5 5.7 19.5 9v6c0 3.3 0 4.95-1.025 5.975S15.8 22 12.5 22h-1c-3.3 0-4.95 0-5.975-1.025S4.5 18.3 4.5 15V9c0-3.3 0-4.95 1.025-5.975S8.2 2 11.5 2zM8 15h2M8 18h2M14 15h2M14 18h2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
};
export default RemoteControl;
