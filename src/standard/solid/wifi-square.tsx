import React from "react";
const WifiSquare: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zM11.995 8a7.8 7.8 0 0 0-4.58 1.503 1 1 0 1 0 1.171 1.62A5.8 5.8 0 0 1 11.995 10c1.253 0 2.426.41 3.418 1.13a1 1 0 0 0 1.174-1.618A7.8 7.8 0 0 0 11.996 8m0 3.432c-.956 0-1.858.249-2.653.687a1 1 0 0 0 .965 1.751 3.5 3.5 0 0 1 1.688-.438c.606 0 1.18.157 1.695.443a1 1 0 0 0 .97-1.75 5.5 5.5 0 0 0-2.665-.693M11 16a1 1 0 0 1 1-1h.006a1 1 0 0 1 0 2H12a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WifiSquare;
