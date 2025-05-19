import React from "react";
const HandPointingLeft_01: React.FC<
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
        d="m19.467 18.978-1.454.697c-.777.372-1.943.823-3.12.999-1.14.17-2.518.115-3.46-.82-2.047-2.035-2.622-4.74-2.685-6.604H3.75a2.5 2.5 0 0 1 0-5h8.374l-.993-.945-.022-.025a2.4 2.4 0 0 1 .337-3.503 2.53 2.53 0 0 1 3.1.007l5.703 4.318h2.501v10.54h-2.582z"
      />
    </svg>
  );
};
export default HandPointingLeft_01;
