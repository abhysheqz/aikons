import React from "react";
const SoilMoistureGlobal: React.FC<
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
        d="M19 14.834c.08.053.85.528.982.625.264.194.618.476.975.835.68.68 1.543 1.8 1.543 3.21C22.5 21.201 21.186 23 19 23s-3.5-1.798-3.5-3.497c0-1.408.862-2.529 1.543-3.21.357-.357.711-.64.975-.834.133-.097.901-.572.982-.625"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.5 13a9 9 0 0 0-8.251 5.4l-1.833-.8A11 11 0 0 1 21.5 11z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.498 9c-5.888 0-10.864 3.915-12.462 9.285l-1.917-.57C8.963 11.519 14.701 7 21.498 7z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.5 5C13.41 5 6.639 10.65 4.92 18.221l-1.95-.442C4.89 9.317 12.456 3 21.5 3zM3.788 11.293A9 9 0 0 0 1.5 11V9c.964 0 1.901.124 2.795.358zM6.398 7.954A13 13 0 0 0 1.5 7V5c1.998 0 3.906.391 5.652 1.102zM9.762 5.139A16.9 16.9 0 0 0 1.5 3V1c3.35 0 6.5.868 9.235 2.392z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SoilMoistureGlobal;
