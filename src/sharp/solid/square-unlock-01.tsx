import React from "react";
const SquareUnlock_01: React.FC<
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
        fillRule="evenodd"
        d="M20.75 8.25H3.25v14.5h17.5zM13.5 14h-3v3h3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3.25a3.5 3.5 0 0 0-3.5 3.5v2.5h-2v-2.5a5.5 5.5 0 0 1 5.5-5.5c2.48 0 4.344 1.869 4.949 3.684l-1.898.632C14.656 4.381 13.438 3.25 12 3.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SquareUnlock_01;
