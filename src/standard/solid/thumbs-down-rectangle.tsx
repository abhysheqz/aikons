import React from "react";
const ThumbsDownRectangle: React.FC<
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
        d="M19.75 2h-15A2.75 2.75 0 0 0 2 4.75v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15A2.75 2.75 0 0 0 19.75 2M8.25 6A1.75 1.75 0 0 0 6.5 7.75v4.65c0 .396.135.782.383 1.092l3.781 4.726a.75.75 0 0 0 1.036.132l.114-.085a3.75 3.75 0 0 0 1.197-4.478l-.124-.287h2.934a1.75 1.75 0 0 0 1.644-2.35l-1.458-4A1.75 1.75 0 0 0 14.363 6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ThumbsDownRectangle;
