import React from "react";
const Sorting_9: React.FC<
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
        d="M6.656 2H8.74v7h1v2h-4V9h1V4.885l-.258.286L5 3.83zM4.5 13h6v9h-6v-2h4v-1.5h-4zm4 3.5V15h-2v1.5zM17.293 3.293v13.586l.793-.793L19.5 17.5l-3.207 3.207-3.207-3.207 1.414-1.414.793.793V3.293z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sorting_9;
