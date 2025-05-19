import React from "react";
const Cheese: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.009 8H16M17.009 15H17"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7 16.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 10.5v7.001c0 .999-.779 1.835-1.801 1.934L17 19.746v-.486c0-1.073-.895-1.943-2-1.943s-2 .87-2 1.943l.002.875-8.803.855C3.022 21.105 2 20.206 2 19.056V12.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.997 9.97c-.157-2.995-2.96-5.26-5.154-6.677-.635-.41-1.44-.383-2.07.036l-1.74 1.16c-.24.16-.288.49-.18.758A2 2 0 0 1 9.59 7.419c-.204-.203-.527-.286-.767-.125l-6.299 4.195c-.911.482-.558 1.563.471 1.509l16.7-.883c1.212-.064 2.368-.89 2.302-2.144Z"
      />
    </svg>
  );
};
export default Cheese;
