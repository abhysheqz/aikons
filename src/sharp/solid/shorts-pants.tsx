import React from "react";
const ShortsPants: React.FC<
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
        d="M20.75 1.25H3.25v3.704l-.614 4.91a7.7 7.7 0 0 0 1.213-.622c1.083-.69 2.118-1.77 2.353-3.492h1.511c-.25 2.39-1.68 3.88-3.059 4.758a9.4 9.4 0 0 1-2.226 1.024l-1.172 9.375a.75.75 0 0 0 .65.837l8 1a.75.75 0 0 0 .836-.637l.877-6.357H10a.75.75 0 0 1-.53-.22l-1.5-1.5 1.06-1.06 1.28 1.28h3.38l1.28-1.28 1.06 1.06-1.5 1.5a.75.75 0 0 1-.53.22H12.38l.878 6.357a.75.75 0 0 0 .835.637l8-1a.75.75 0 0 0 .651-.837l-1.172-9.376-.167-.054a9.4 9.4 0 0 1-2.056-.97c-1.378-.876-2.808-2.367-3.059-4.757h1.511c.235 1.722 1.27 2.803 2.354 3.492a7.7 7.7 0 0 0 1.209.62l-.614-4.91zm-1.5 3v-1.5H4.75v1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ShortsPants;
