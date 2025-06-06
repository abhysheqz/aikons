import React from "react";
const CameraOff_01: React.FC<
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
        d="M6 6c-.64.026-1.033.09-1.419.25a3.5 3.5 0 0 0-1.803 1.697c-.306.626-.356 1.428-.456 3.032l-.157 2.513c-.249 3.989-.373 5.983.81 7.246C4.16 22 6.156 22 10.146 22h3.965c3.693 0 5.676 0 6.89-1.001M17 7l-.41-1M8 4c.313-.728.677-1.385 1.41-1.74C9.948 2 10.594 2 11.885 2c1.29 0 1.936 0 2.473.26.997.482 1.342 1.562 1.737 2.525L16.59 6m5.405 11.5c.023-1.054-.058-2.357-.16-4l-.154-2.51c-.099-1.602-.148-2.403-.45-3.028a3.47 3.47 0 0 0-1.78-1.696C18.895 6.033 18.22 6.004 17 6h-.41"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.5 10.837a3.5 3.5 0 1 0 4.663 4.663"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m2 2 20 20"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6h.009"
      />
    </svg>
  );
};
export default CameraOff_01;
