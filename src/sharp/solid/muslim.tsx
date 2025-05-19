import React from "react";
const Muslim: React.FC<
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
        d="M7.843 7.046C7.262 4.07 9.482 1.25 12.5 1.25s5.238 2.82 4.657 5.796l-.42 2.156c-.4 2.05-2.164 3.548-4.237 3.548s-3.837-1.498-4.237-3.548zm1.47-.296.001.01.42 2.154c.268 1.371 1.435 2.336 2.765 2.336s2.497-.965 2.765-2.336l.42-2.155.002-.01z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.75 22.75H3.5a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 .436-.681l6.064-2.8v-2.517h1.5v2.637l1 .8zM13.25 14.44v8.31h8.25a.75.75 0 0 0 .75-.75v-5a.75.75 0 0 0-.436-.681l-6.064-2.8v-2.517h-1.5v2.637z"
      />
    </svg>
  );
};
export default Muslim;
