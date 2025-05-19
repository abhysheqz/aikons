import React from "react";
const AiBook: React.FC<
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
        d="M21 22H5.68c-1.573 0-2.73-1.073-2.679-2.485m0 0c.048-1.344 1.285-2.508 2.68-2.508h14.552V2H6.118C4.396 2 3 3.346 3 5.006zm15.106-2.508V22"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="bevel"
        strokeWidth={1.5}
        d="m7.745 10.718 1.87-4.666 1.879 4.666m-3.749 0-1 2.495m1-2.495h3.749m0 0 1.004 2.495m2.576-7.485v7.485"
      />
    </svg>
  );
};
export default AiBook;
