import React from "react";
const CookBook: React.FC<
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
        d="M6.5 1.25A3.75 3.75 0 0 0 2.75 5l-.004 14c0 2.07 1.766 3.75 3.944 3.75h14.557v-1.875h-1.736v-3.75h1.736L21.25 1.25zm.19 15.875H17.54v3.75H6.691c-1.09 0-1.972-.84-1.972-1.875v-.001c0-1.035.883-1.874 1.972-1.874M15 6.009c1.105 0 2 .903 2 2.017 0 1.097-.904 2.014-2 2.014V13H9v-2.835c-1.168 0-2-.87-2-2.139 0-1.114.895-2.017 2-2.017.412 0 .794.125 1.112.34A2 2 0 0 1 12 5c.872 0 1.614.563 1.888 1.35.318-.216.7-.341 1.112-.341"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CookBook;
