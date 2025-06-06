import React from "react";
const Clock_05: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2c4.478 0 8.226 2.943 9.5 7h-3"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M12 7v5l2.5 2.5" />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.955 13q.045-.495.045-1m-7 10a10 10 0 0 0 1-.392M20.79 17q.291-.558.515-1.154m-3.113 4.383q.518-.428.977-.922"
      />
    </svg>
  );
};
export default Clock_05;
