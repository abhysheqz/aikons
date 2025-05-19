import React from "react";
const Wanted: React.FC<
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
        d="M3.748 3c0-.966.784-1.75 1.75-1.75H20.21a1.25 1.25 0 0 1 1.13 1.783l-.984 2.089a.25.25 0 0 0-.024.106V21a1.75 1.75 0 0 1-1.75 1.75H3.72a1.25 1.25 0 0 1-1.17-1.689l1.182-3.155a.3.3 0 0 0 .016-.087v-6.542c0-.317.087-.628.25-.9l1.049-1.748a.25.25 0 0 0 0-.258l-1.05-1.748a1.75 1.75 0 0 1-.249-.9zM9.75 7.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0m-1.5 6.75a3.75 3.75 0 1 1 7.5 0 .75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75M9 16.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wanted;
