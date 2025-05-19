import React from "react";
const Notion_02: React.FC<
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
        d="m16.683 1.75 5.567 3.33v15.034L6.18 22.25l-4.43-5.519V2.813zM6.728 5.736l12.333-.82-2.744-1.64-11.76.837zM5.75 6.874l-2.5-1.869v11.202l2.5 3.115zm6 10.136v-6.475l4.85 7.18h1.65V9.459l1.048-.07-.1-1.492-3.731.248.1 1.492 1.183-.078v5.7l-4.655-6.89-3.393.226.1 1.492 1.448-.096v7.219l-1.593.212.198 1.482 4.458-.593-.199-1.482z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Notion_02;
