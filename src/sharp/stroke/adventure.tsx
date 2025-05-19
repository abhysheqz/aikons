import React from "react";
const Adventure: React.FC<
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
        d="M6.559 19.547a1.497 1.497 0 0 1-2.118 0 1.497 1.497 0 1 1 2.118 0ZM10.498 14.99l8.477-6.995.999-3.991-3.994.993-6.99 8.483m-1.793-1.489 4.789 4.793m-5.492.703L9.49 14.49M21.475 10.024c-.323 7.89-5.996 11.35-9.491 11.971-1.257-.246-1.791-.55-2.903-1.04m-5.827-6.918c-.327-.911-1.414-4.272-.247-9.012 3.832 0 6.569-4.24 10.978-2.687"
      />
    </svg>
  );
};
export default Adventure;
