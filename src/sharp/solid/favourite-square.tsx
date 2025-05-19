import React from "react";
const FavouriteSquare: React.FC<
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
        d="M21.75 2.25v19.5H2.25V2.25zm-7.249 4.5c-.836 0-1.623.271-2.5 1.034-.877-.763-1.664-1.033-2.5-1.033-1.94 0-3.25 1.65-3.25 3.5 0 .967.39 1.885.9 2.679.514.799 1.185 1.531 1.835 2.144.654.616 2.53 1.82 3.015 2.177.486-.358 2.362-1.562 3.015-2.177.65-.613 1.321-1.345 1.835-2.144.51-.794.9-1.712.9-2.68 0-1.85-1.31-3.499-3.25-3.5"
      />
    </svg>
  );
};
export default FavouriteSquare;
