import React from "react";
const Carrot: React.FC<
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
        strokeWidth={1.5}
        d="M8.2 9.075C6.1 11.177.635 20.002 2.316 21.684c1.682 1.68 10.507-3.783 12.609-5.884 2.1-2.102 3.362-3.362 0-6.725s-4.623-2.1-6.725 0Z"
      />
      <path
        fill="currentColor"
        d="M13.53 13.47a.75.75 0 1 0-1.06 1.06zm-6-3a.75.75 0 0 0-1.06 1.06zm.44 2.56a.75.75 0 0 0 1.06-1.06zm1 7a.75.75 0 1 0 1.06-1.06zm-.44-2.56a.75.75 0 0 0-1.06 1.06zm7-2-2-2-1.06 1.06 2 2zm-9.06-3.94 1.5 1.5 1.06-1.06-1.5-1.5zm3.56 7.44-1.5-1.5-1.06 1.06 1.5 1.5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15 2c.518.519.855 1.633 0 3.111M22 9c-.518-.519-1.633-.856-3.11 0m.388-4.278-1.944 1.944"
      />
    </svg>
  );
};
export default Carrot;
