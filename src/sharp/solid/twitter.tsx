import React from "react";
const Twitter: React.FC<
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
        d="M2 18.5C3.765 19.521 5.814 20 8 20c6.48 0 11.762-5.137 11.992-11.562L22 4.5l-3.354.5A3.99 3.99 0 0 0 16 4c-2.572 0-4.5 2.517-3.88 4.98-3.552.23-6.771-1.959-8.633-4.875-1.236 4.197-.09 9.251 3.013 12.366 0 0-1.5 2.029-4.5 2.029"
      />
    </svg>
  );
};
export default Twitter;
