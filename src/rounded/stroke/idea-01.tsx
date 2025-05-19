import React from "react";
const Idea_01: React.FC<
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
        d="M6.09 15a6.9 6.9 0 0 1-.59-2.795C5.5 8.502 8.41 5.5 12 5.5s6.5 3.003 6.5 6.706A6.9 6.9 0 0 1 17.91 15"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 2v1M22 12h-1M3 12H2M19.07 4.928l-.707.707M5.637 5.636l-.707-.707M14.517 19.306c1.01-.327 1.416-1.252 1.53-2.182.034-.278-.195-.509-.475-.509H8.477a.483.483 0 0 0-.488.534c.112.928.394 1.607 1.464 2.157m5.064 0H9.453m5.064 0c-.121 1.945-.683 2.715-2.51 2.693-1.954.036-2.404-.916-2.554-2.693"
      />
    </svg>
  );
};
export default Idea_01;
