import React from "react";
const SofaSingle: React.FC<
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
        d="m7.979 18-1 4m8.995-4 1 4M6.48 9l-.346-4.858A2 2 0 0 1 8.128 2h7.7a2 2 0 0 1 1.993 2.142L17.474 9"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.247 12h7.397M5.95 9C4.873 9 4 9.905 4 11.022c.087.857.367 1.374 1.001 1.722l1.466 5.184a.1.1 0 0 0 .095.073H17.41a.1.1 0 0 0 .096-.072l1.483-5.185c.641-.348.924-.865 1.012-1.722 0-1.117-.884-2.022-1.974-2.022-.973 0-1.781.72-1.944 1.67l-1.072 4.34H8.992l-1.12-4.34C7.712 9.72 6.912 9 5.95 9Z"
      />
    </svg>
  );
};
export default SofaSingle;
