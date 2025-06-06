import React from "react";
const BubbleTea_02: React.FC<
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
        d="m18 9-1.091 9.459c-.195 1.685-.292 2.527-.86 3.034-.57.507-1.418.507-3.114.507h-1.87c-1.696 0-2.544 0-3.113-.507s-.666-1.35-.86-3.034L6 9M6 9l.894-1.789c.538-1.076.807-1.614 1.29-1.912C8.669 5 9.27 5 10.473 5h3.056c1.203 0 1.804 0 2.287.299.484.298.753.836 1.29 1.912L18 9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 9h14M12 9V2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.5 13.011c.275-.494 2.112-1.3 3.434-.905 1.653.494 5.087 3.378 7.566.905"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.008 17h-.01M14.008 19h-.01"
      />
    </svg>
  );
};
export default BubbleTea_02;
