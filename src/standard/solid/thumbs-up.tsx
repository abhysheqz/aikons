import React from "react";
const ThumbsUp: React.FC<
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
        d="M6 19.555H3v-7.807h3zm-3 2h3a2 2 0 0 0 2-2v-7.807a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v7.807a2 2 0 0 0 2 2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.25 20.75c0 .414.336.75.75.75h11.081a2.75 2.75 0 0 0 2.596-1.842l2.1-6A2.75 2.75 0 0 0 20.18 10h-4.527l.137-.307a5.75 5.75 0 0 0-1.189-6.402l-.072-.071a.75.75 0 0 0-1.06 0l-7 7a.75.75 0 0 0-.22.53z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ThumbsUp;
