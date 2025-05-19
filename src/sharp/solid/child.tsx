import React from "react";
const Child: React.FC<
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
        d="M3.691 7.25a8.753 8.753 0 0 1 16.625.022 2.25 2.25 0 0 1 .274 4.4 8.752 8.752 0 0 1-17.165.077A2.25 2.25 0 0 1 3.5 7.25zM2.75 9.5a.75.75 0 0 1 .75-.75H6a6.75 6.75 0 0 0 6-3.654 6.75 6.75 0 0 0 6 3.654h2a.75.75 0 0 1 0 1.5h-.724l-.082.658a7.251 7.251 0 0 1-14.388 0l-.082-.658H3.5a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.25 13.25h3.5V14a1.75 1.75 0 1 1-3.5 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m16.169 16.676.296.261A6.74 6.74 0 0 1 18.75 22v.75H5.25V22c0-2.017.885-3.827 2.285-5.063l.296-.261L12 17.726z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 9a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1M15 9a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Child;
