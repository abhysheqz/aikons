import React from "react";
const BurningCd: React.FC<
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
        strokeWidth={1.5}
        d="M15 16.5c0 2.346 0 3.518-.676 4.326a3.2 3.2 0 0 1-.604.554C12.838 22 11.559 22 9 22s-3.838 0-4.72-.62a3.2 3.2 0 0 1-.604-.554C3 20.018 3 18.846 3 16.5v-9c0-2.346 0-3.518.676-4.326a3.2 3.2 0 0 1 .604-.554C5.162 2 6.441 2 9 2s3.838 0 4.72.62q.341.241.604.554C15 3.982 15 5.154 15 7.5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 13.5v-3"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M15 15a3 3 0 1 0 0-6" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15 19a7 7 0 1 0 0-14"
      />
    </svg>
  );
};
export default BurningCd;
