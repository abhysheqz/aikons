import React from "react";
const Beach: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 16.25s1.795-.75 5-.75c5 0 9 3 15 3M2 21.5h20M11.999 2.5l.45 1.5m4.05 13.5-2.187-7.29"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m8.172 11.489 11.816-3.48c-1.13-4.56-6.41-4.736-8.09-3.83-3.924 1.416-4.147 5.463-3.726 7.31Z"
      />
    </svg>
  );
};
export default Beach;
