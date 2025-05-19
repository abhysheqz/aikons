import React from "react";
const Mouse_17: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 5.5V2m0 10V9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m17.093 17.682.443-3.29c.026-.186.038-.28.065-.365s.077-.177.176-.364C19.772 9.913 20.227 4.426 12 2 3.773 4.426 4.228 9.912 6.223 13.663c.099.186.148.28.176.364.027.085.04.178.065.365l.443 3.29c.06.318.09.477.124.616C7.549 20.375 9.46 22 12 22s4.451-1.625 4.97-3.702c.034-.139.064-.298.123-.616Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17.5 14c-1.229-1.211-3.234-2-5.5-2s-4.271.789-5.5 2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.5 5.5h-3V9h3z"
      />
    </svg>
  );
};
export default Mouse_17;
