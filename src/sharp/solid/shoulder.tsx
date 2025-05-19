import React from "react";
const Shoulder: React.FC<
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
        d="M5.078 16.666a10.8 10.8 0 0 0-.328 2.565v3.519h7.501v-6.026l-.061-.09-1.23-1.843 1.249-.832 1.229 1.843q.072.108.152.21a3.25 3.25 0 0 0 2.552 1.237h3.608V1.25h-3.5V2c0 .69-.32 1.235-1.06 1.765-.776.553-1.93 1.024-3.427 1.523-2.257.753-4.128 1.539-5.434 2.638C4.972 9.07 4.25 10.53 4.25 12.5c0 1.443.453 2.592 1.027 3.464-.058.18-.129.42-.199.702m14.672 2.083h-3.608a4.75 4.75 0 0 1-2.391-.645v4.646h5.999zM18.505 7.165l-2.342-1.17-.67 1.34 2.34 1.172zm-.755 7.085v1.51h-1.5v-1.51z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Shoulder;
