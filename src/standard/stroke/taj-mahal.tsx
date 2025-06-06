import React from "react";
const TajMahal: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.965 22.5v-11m-7.98 0v11M20.5 12.5c2.619-2.182-.611-3.574-1.512-4.4-.258.237-1.483.519-1.984.8m1.998-.8V7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.013 3.5c-1.653 2-7.6 4-3.743 8h7.438c3.856-4-2.042-6-3.695-8m0 0-.012-1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.495 12.5c-2.617-2.182.612-3.574 1.513-4.4.257.237 1.483.519 1.984.8m-1.998-.8V7M19 18v-1M12 22.5V19M5 18v-1M12 16v-1.5M8 11.5S5.007 12.997 2.01 13a.01.01 0 0 0-.01.01v9.49h20v-9.49a.01.01 0 0 0-.01-.01c-2.997-.003-5.99-1.5-5.99-1.5"
      />
    </svg>
  );
};
export default TajMahal;
