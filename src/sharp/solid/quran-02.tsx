import React from "react";
const Quran_02: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.25 5A3.75 3.75 0 0 1 7 1.25h14.75l-.003 15.5h-1.999v4.5h1.25v1.5H6.995A3.75 3.75 0 0 1 3.246 19zm1.497 11L4.75 5A2.25 2.25 0 0 1 7 2.75h13.25l-.002 12.5H6.996c-.844 0-1.622.279-2.25.75m0 2.999V19a2.25 2.25 0 0 0 2.25 2.25h11.251v-4.5H6.996a2.25 2.25 0 0 0-2.25 2.249"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 1.25A3.75 3.75 0 0 0 3.25 5l-.004 14c0 2.07 1.766 3.75 3.944 3.75h14.557v-1.875h-1.736v-3.75h1.736L21.75 1.25zm.19 15.875H18.04v3.75H7.191c-1.09 0-1.972-.84-1.972-1.875v-.001c0-1.035.883-1.874 1.972-1.874M12.5 4.5l1.318 1.318h1.864v1.864L17 9l-1.318 1.318v1.864h-1.864L12.5 13.5l-1.318-1.318H9.318v-1.864L8 9l1.318-1.318V5.818h1.864z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Quran_02;
