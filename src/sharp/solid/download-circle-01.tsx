import React from "react";
const DownloadCircle_01: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m.75 12.409v-6.19h-1.5v6.19l-1.72-1.72L8.468 13l3.53 3.531L15.53 13l-1.06-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DownloadCircle_01;
