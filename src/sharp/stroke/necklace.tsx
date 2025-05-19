import React from "react";
const Necklace: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="m10 12 1-4h2l1 4" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 3c0 2.907-2.968 5.406-6.5 6.5M2 3c0 2.907 2.968 5.406 6.5 6.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.914 13.059c.35.44.775 1.367.495 2.955-.255 1.445-1.67 3.53-3.418 4.585l-.65.286a.76.76 0 0 1-.533.05c-1.232-.381-3.65-2.237-4.203-4.918-.337-1.634.216-2.634.566-3.075.43-.652 1.646-1.189 2.646-.823.441.16.88.524 1.19.81l.449-.399c1.386-1.128 2.951-.216 3.458.529Z"
      />
    </svg>
  );
};
export default Necklace;
