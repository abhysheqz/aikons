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
        d="M12 1.25a8.75 8.75 0 0 0-8.309 6H3.5a2.25 2.25 0 0 0-.075 4.499 8.753 8.753 0 0 0 17.165-.077 2.251 2.251 0 0 0-.274-4.4A8.75 8.75 0 0 0 12 1.25M2.75 9.5a.75.75 0 0 1 .75-.75H6a6.75 6.75 0 0 0 6-3.654 6.75 6.75 0 0 0 6 3.654h2a.75.75 0 0 1 0 1.5h-.062a.75.75 0 0 0-.744.658 7.251 7.251 0 0 1-14.388 0 .75.75 0 0 0-.744-.658H3.5a.75.75 0 0 1-.75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.25 14a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75 1.75 1.75 0 1 1-3.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.535 16.938a.75.75 0 0 1 .496-.188L12 18l3.969-1.25a.75.75 0 0 1 .496.188A6.74 6.74 0 0 1 18.75 22a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75c0-2.016.885-3.827 2.285-5.062"
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
