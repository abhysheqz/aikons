import React from "react";
const Chess_01: React.FC<
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
        strokeWidth={1.5}
        d="m13.996 9.02.704 4.596c.15.986.41 1.952.81 2.864.498 1.133 1.22 2.663 1.774 3.386.481.626.716 1.399.716 2.19H6c0-.792.234-1.564.715-2.19.555-.723 1.277-2.254 1.774-3.387.4-.912.66-1.877.81-2.862l.704-4.597z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 18.043h14"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m10.486 4.517 1.557-.023 1.48.023 2.814-2.434a.1.1 0 0 1 .165.076v4.347l-2.467 2.502a.1.1 0 0 1-.071.03h-3.92a.1.1 0 0 1-.07-.03L7.505 6.506V2.16a.1.1 0 0 1 .165-.076z"
      />
    </svg>
  );
};
export default Chess_01;
