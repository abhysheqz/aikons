import React from "react";
const CoinsSwap: React.FC<
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
        d="M1.25 16a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.25 3.816A4.25 4.25 0 0 0 2.75 8h-1.5A5.746 5.746 0 0 1 7 2.25h.75V5h-1.5zM17.75 20.184A4.25 4.25 0 0 0 21.25 16h1.5A5.746 5.746 0 0 1 17 21.75h-.75V19h1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.156 14.748a8.26 8.26 0 0 0-6.904-6.904 6.75 6.75 0 1 1 6.904 6.904"
      />
    </svg>
  );
};
export default CoinsSwap;
