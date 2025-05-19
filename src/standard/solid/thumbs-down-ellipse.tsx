import React from "react";
const ThumbsDownEllipse: React.FC<
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
        d="M11.75 22.5C5.813 22.5 1 17.687 1 11.75S5.813 1 11.75 1 22.5 5.813 22.5 11.75 17.687 22.5 11.75 22.5m-3-17A1.75 1.75 0 0 0 7 7.25v4.65c0 .397.135.782.383 1.092l3.781 4.726a.75.75 0 0 0 1.036.132l.114-.085a3.75 3.75 0 0 0 1.197-4.478L13.387 13h2.934a1.75 1.75 0 0 0 1.644-2.35l-1.458-4a1.75 1.75 0 0 0-1.644-1.15z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ThumbsDownEllipse;
