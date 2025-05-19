import React from "react";
const Triangle: React.FC<
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
        d="M20.35 18.029 13.747 6.147c-.762-1.372-2.734-1.372-3.496 0L3.65 18.029C2.91 19.362 3.874 21 5.399 21h13.202c1.525 0 2.489-1.638 1.748-2.971Z"
      />
    </svg>
  );
};
export default Triangle;
