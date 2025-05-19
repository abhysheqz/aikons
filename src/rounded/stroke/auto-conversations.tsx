import React from "react";
const AutoConversations: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.944 8.04h5.884M2 18l5.498-5.414a.6.6 0 0 1 .78-.055l4.246 3.14c.25.185.599.15.807-.083l7.954-8.885M18.108 6h2.823c.547 0 .995.44 1.006.992L22 10.065"
      />
    </svg>
  );
};
export default AutoConversations;
