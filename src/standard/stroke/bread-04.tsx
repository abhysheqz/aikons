import React from "react";
const Bread_04: React.FC<
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
        d="M8.5 4C4.91 4 2 5.567 2 7.5c0 .824.529 1.581 1.413 2.179.34.23.558.613.517 1.021l-.82 8.2a1 1 0 0 0 .995 1.1h8.79a1 1 0 0 0 .995-1.1l-.82-8.2c-.04-.408.177-.791.517-1.021C14.471 9.081 15 8.324 15 7.5 15 5.567 12.09 4 8.5 4Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 20h7.895a1 1 0 0 0 .995-1.1l-.82-8.2c-.04-.408.177-.791.517-1.021C21.471 9.081 22 8.324 22 7.5 22 5.567 19.09 4 15.5 4h-7"
      />
    </svg>
  );
};
export default Bread_04;
