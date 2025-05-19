import React from "react";
const TextKerning: React.FC<
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
        d="M19.618 16.076a1 1 0 0 1 1.09.217l2 2a1 1 0 0 1 0 1.414l-2 2A1 1 0 0 1 19.001 21v-1H12a1 1 0 1 1 0-2h7v-1a1 1 0 0 1 .618-.924M16.556 4.17a1 1 0 0 1 .944-.67h1a1 1 0 0 1 .944.67l3.5 10a1 1 0 0 1-1.888.66l-1.038-2.966h-4.036l-1.038 2.966a1 1 0 0 1-1.888-.66zm.127 5.694h2.635L18 6.099zM14.86 2.067a1 1 0 0 1 .574 1.292l-5 13a1 1 0 1 1-1.867-.718l5-13a1 1 0 0 1 1.292-.574M10.372 3.572a1 1 0 0 1 .557 1.3l-4 10a1 1 0 0 1-1.857 0l-4-10a1 1 0 1 1 1.857-.743L6 11.808l3.072-7.68a1 1 0 0 1 1.3-.556"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default TextKerning;
