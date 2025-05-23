import React from "react";
const Tag_02: React.FC<
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
        d="M2.736 11.687c-.953 1.064-.974 2.67-.1 3.8a32.3 32.3 0 0 0 5.878 5.876c1.13.875 2.735.855 3.8-.098a88 88 0 0 0 8.09-8.263c.252-.294.41-.654.445-1.04.157-1.706.479-6.62-.856-7.955s-6.25-1.013-7.955-.856a1.85 1.85 0 0 0-1.04.446 88 88 0 0 0-8.262 8.09Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m7.5 14.5 2 2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m18 6 4-4"
      />
    </svg>
  );
};
export default Tag_02;
