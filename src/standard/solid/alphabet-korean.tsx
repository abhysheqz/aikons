import React from "react";
const AlphabetKorean: React.FC<
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
        d="M16.594 2.975A.97.97 0 0 0 15.625 2a.97.97 0 0 0-.969.975v17.55c0 .539.434.975.97.975a.97.97 0 0 0 .968-.975v-7.8h1.937a.97.97 0 0 0 .969-.975.97.97 0 0 0-.969-.975h-1.937zM4.969 4.925A.97.97 0 0 0 4 5.9c0 .538.434.975.969.975h6.76c-.172 3.802-1.435 8.862-7.07 10.776a.976.976 0 0 0-.608 1.236c.171.51.72.784 1.228.612 6.836-2.322 8.213-8.537 8.387-12.584.048-1.122-.86-1.99-1.916-1.99z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AlphabetKorean;
