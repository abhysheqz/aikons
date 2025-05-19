import React from "react";
const SeatSelector: React.FC<
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
        d="M3.25 11a1.75 1.75 0 1 1 3.5 0v7.75H6A2.75 2.75 0 0 1 3.25 16zM17.25 11a1.75 1.75 0 1 1 3.5 0v5A2.75 2.75 0 0 1 18 18.75h-.75zM8 18.75h8v-4.5H8z"
      />
      <path
        fill="currentColor"
        d="M11.445 1.25h1.11c1.367 0 2.47 0 3.337.117.9.12 1.658.38 2.26.981.602.602.86 1.36.982 2.26.116.867.116 1.97.116 3.337v.065A3 3 0 0 0 16 11v2H8v-2a3 3 0 0 0-3.25-2.99v-.065c0-1.367 0-2.47.117-3.337.12-.9.38-1.658.981-2.26.602-.602 1.36-.86 2.26-.981.867-.117 1.97-.117 3.337-.117M9.25 21.25V20h5.5v1.25H17a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5z"
      />
    </svg>
  );
};
export default SeatSelector;
