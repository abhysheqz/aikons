import React from "react";
const Euro: React.FC<
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
        d="M12.5 11h-8V9h8zM12.5 15h-8v-2h8z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.626 10c0-4.341 3.267-8 7.461-8 2.755 0 5.127 1.594 6.413 3.906l-1.748.972C16.776 5.125 15.033 4 13.087 4c-2.942 0-5.461 2.61-5.461 6v4c0 3.39 2.519 6 5.461 6 1.946 0 3.69-1.125 4.665-2.878l1.748.972C18.214 20.406 15.842 22 13.087 22c-4.194 0-7.461-3.659-7.461-8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Euro;
