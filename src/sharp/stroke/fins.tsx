import React from "react";
const Fins: React.FC<
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
        d="M8.471 19.963c2.414-4.127 3.02-12.61 2.156-16.268L9 4.5S7.77 3 6.5 3 4 4.5 4 4.5l-1.627-.805c-.864 3.658-.258 12.14 2.156 16.268.809 1.383 3.134 1.383 3.942 0ZM15.529 4.037c-2.414 4.127-3.02 12.61-2.156 16.268L15 19.5s1.23 1.5 2.5 1.5 2.5-1.5 2.5-1.5l1.627.805c.864-3.657.258-12.14-2.156-16.268-.809-1.382-3.134-1.383-3.942 0ZM6.5 17v-2M17.5 9V7"
      />
    </svg>
  );
};
export default Fins;
