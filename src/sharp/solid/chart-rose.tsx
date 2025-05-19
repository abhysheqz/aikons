import React from "react";
const ChartRose: React.FC<
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
        d="M9.012 12.253h-5.52c.375-2.649 2.701-4.662 5.52-4.97zM10.517 12.253V1.25c6.499.337 11.82 5.017 12.233 11.003zM10.517 13.756h9.999c-.406 4.875-4.728 8.662-10 8.994zM1.25 13.756h7.762v6.984c-4.044-.323-7.368-3.22-7.762-6.984"
      />
    </svg>
  );
};
export default ChartRose;
