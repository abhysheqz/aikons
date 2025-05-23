import React from "react";
const Signal: React.FC<
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
        d="M2.17 20.5 2 22l1.5-.17m2.5-.28 1.054-.12c.472.273.968.422 1.485.499M2.45 18l.119-1.054A3.9 3.9 0 0 1 2.182 16M11 21.956c.34-.014.686-.027 1.036-.027q.746-.001 1.464-.107m2.5-.713a10 10 0 0 0 2-1.162M19.965 18a10 10 0 0 0 1.184-2m.798-3a10 10 0 0 0-.068-2.593M21.18 8a10 10 0 0 0-1.262-2.133M18.025 4a10 10 0 0 0-2.295-1.293m-2.23-.6a10 10 0 0 0-2.816-.016m-2.489.676A10 10 0 0 0 6 4.035M4.053 6A10 10 0 0 0 2.89 8m-.713 2.5q-.106.718-.107 1.464c0 .35-.013.696-.028 1.036"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.009 18.982a6.99 6.99 0 1 0-6.99-6.991c0 1.32.302 2.445.939 3.498l-.953 3.494a.01.01 0 0 0 .012.012l3.477-.947c1.057.643 2.187.934 3.515.934Z"
      />
    </svg>
  );
};
export default Signal;
