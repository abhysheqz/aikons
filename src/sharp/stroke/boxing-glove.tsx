import React from "react";
const BoxingGlove: React.FC<
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
        d="M16.584 6.057c2.335 0 2.962 3.187 1.958 5.285-.449.939-1.226 1.763-1.847 2.594-.597.796-.895 1.194-1.287 1.473-.874.621-1.886.591-2.918.591h-1.032c-2.539 0-3.808 0-4.647-.71s-1.044-1.93-1.455-4.373c-.226-1.343-.385-2.685-.352-3.986.06-2.382 1.885-4.388 4.348-4.782 1.174-.188 2.62-.206 3.793-.007 2.097.356 3.576 2.162 3.43 4.19-.09 1.235-.592 2.508-.905 3.702"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.004 15.5V22h9v-7"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M7.004 19h4" />
    </svg>
  );
};
export default BoxingGlove;
