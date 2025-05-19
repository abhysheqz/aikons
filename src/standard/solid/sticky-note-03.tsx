import React from "react";
const StickyNote_03: React.FC<
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
        d="M5.175 2.25A2.925 2.925 0 0 0 2.25 5.175v13.65a2.925 2.925 0 0 0 2.925 2.925h8.775a.98.98 0 0 0 .69-.286l6.824-6.825a.98.98 0 0 0 .286-.689V5.175a2.925 2.925 0 0 0-2.925-2.925zm14.626 11.297L13.547 19.8v-4.754a1.5 1.5 0 0 1 1.5-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StickyNote_03;
