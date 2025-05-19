import React from "react";
const Factory_02: React.FC<
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
        d="M7 2.75c-.69 0-1.25.56-1.25 1.25a.75.75 0 0 1-1.5 0A2.75 2.75 0 0 1 7 1.25h6a.75.75 0 0 1 0 1.5zM9.25 5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 9.25 5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.5 6.25a.75.75 0 0 0-.75.725L1.675 9.25h6.65L8.25 6.975a.75.75 0 0 0-.75-.725zM8.375 10.75h-6.75L1.25 21.975a.75.75 0 0 0 .75.775h6a.75.75 0 0 0 .75-.775z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.907 22.75h12.09a.75.75 0 0 0 .75-.75l.001-12a.75.75 0 0 0-1.166-.624l-4.834 3.223V10a.75.75 0 0 0-1.085-.67l-5.936 2.967.32 9.635c.01.282-.039.56-.14.818M12.749 18a.75.75 0 0 1 .75-.75h1.5a.75.75 0 1 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75m4.5 0a.75.75 0 0 1 .75-.75h1.5a.75.75 0 1 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Factory_02;
