import React from "react";
const MailOpenLove: React.FC<
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
        d="m2 9.994 10 5.498 10-5.498"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M5 11.993V2h14v9.993" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M14.057 6.207C12.86 5.612 12 6.489 12 6.489s-.86-.877-2.057-.282C8.493 6.927 8.388 9.747 12 11c3.612-1.252 3.508-4.073 2.057-4.793Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M18.913 6.87 22 9.973l-.026 12.017a.01.01 0 0 1-.01.01H2.016a.01.01 0 0 1-.01-.01v-12l3.032-3.079"
      />
    </svg>
  );
};
export default MailOpenLove;
