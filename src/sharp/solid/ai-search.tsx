import React from "react";
const AiSearch: React.FC<
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
        d="M1.25 11.25c0-5.523 4.477-10 10-10s10 4.477 10 10a9.96 9.96 0 0 1-2.257 6.329l3.757 3.757-1.414 1.414-3.757-3.757a9.96 9.96 0 0 1-6.329 2.257c-5.523 0-10-4.477-10-10m10-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.518 7.5h1.605l2.737 7.184-1.402.534-.769-2.018H7.952l-.769 2.018-1.402-.534zm.005 4.2h1.595l-.797-2.093zM15.5 7.5V15H14V7.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AiSearch;
