import React from "react";
const Transparency: React.FC<
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
        d="M2.962 8.208q-.025.268-.025.542a5.815 5.815 0 0 0 3.882 5.484 7.7 7.7 0 0 1 .308-1.862zm.62-2.121 4.392 4.392a7.8 7.8 0 0 1 2.505-2.505L6.087 3.582a5.84 5.84 0 0 0-2.505 2.505m4.626-3.125 4.164 4.165a7.7 7.7 0 0 1 1.862-.308 5.815 5.815 0 0 0-6.026-3.857m6.355 5.788q-.274 0-.543.025l.518.518q.024-.27.024-.543m-.645 2.663L11.9 9.395A5.84 5.84 0 0 0 9.395 11.9l2.018 2.018a5.84 5.84 0 0 0 2.505-2.505m-4.625 3.124-.518-.517q-.025.269-.025.543.274 0 .543-.026M1 8.75a7.75 7.75 0 1 1 15.5 0 7.75 7.75 0 0 1-15.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.57 17.673A7.753 7.753 0 0 0 22.5 14.75a7.75 7.75 0 0 0-4.827-7.18q.076.58.077 1.18a9 9 0 0 1-10.18 8.923"
      />
    </svg>
  );
};
export default Transparency;
