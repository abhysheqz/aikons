import React from "react";
const Notion_02: React.FC<
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
        d="M16.886 1.857a.75.75 0 0 0-.44-.105l-14 1a.75.75 0 0 0-.696.748v13c0 .17.058.335.164.468l4 5a.75.75 0 0 0 .685.275l15-2a.75.75 0 0 0 .651-.743v-14a.75.75 0 0 0-.364-.643zM6.728 5.733 4.557 4.105l11.76-.84 2.744 1.646zM3.25 5l2.5 1.875v12.487l-2.5-3.125zm15.3 4.449a.75.75 0 1 0-.1-1.497l-.994.066-.013.001-1.227.082a.75.75 0 0 0 .1 1.497l.434-.03v6.402l-4.395-7.208a.75.75 0 0 0-.69-.358l-.709.047-.013.001-1.493.1a.75.75 0 0 0 .1 1.497l.7-.047v7.242l-.849.113a.75.75 0 1 0 .198 1.487l2.97-.396a.75.75 0 0 0-.198-1.487l-.62.083V10.65l4.109 6.74a.75.75 0 0 0 .64.36l1-.001a.75.75 0 0 0 .75-.75V9.469z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Notion_02;
