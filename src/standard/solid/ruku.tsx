import React from "react";
const Ruku: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16 2.75h2.625c1.687 0 3.125 1.305 3.125 3 0 1.694-1.438 3-3.125 3H16v-1.5h2.625c.936 0 1.625-.71 1.625-1.5s-.689-1.5-1.625-1.5H16z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.186 1.75C6.81 1.75 3.25 5.261 3.25 9.61v8.89a.75.75 0 0 0 .75.75h6.52a.75.75 0 0 0 .75-.75v-1.825l-.001-.009-1.479-6.5a.75.75 0 0 1 .089-.552l1.81-3.015a.75.75 0 1 1 1.286.773l-1.655 2.756.9 3.955 4.847-5.592A.75.75 0 0 0 17.25 8V4.5a2.75 2.75 0 0 0-2.75-2.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 17.75a.75.75 0 0 1 .75.75v2.25h2V18.5a.75.75 0 0 1 1.5 0v2.25h.25a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Ruku;
