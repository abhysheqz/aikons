import React from "react";
const IceCream_04: React.FC<
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
        d="M9.48 2.404c.864-.72 2.111-1.154 3.522-1.154h1.403l-.778 1.165h-.001l-.004.007-.023.037a4.111 4.111 0 0 0-.333.68c-.175.464-.196.824-.095 1.026.146.292.391.492.778.676.197.094.413.176.66.267l.084.03c.217.08.457.167.688.268.526.228 1.119.57 1.504 1.218.303.51.431 1.131.394 1.882 1.874.796 2.608 3.255 1.335 4.945H5.385c-1.34-1.778-.434-4.32 1.527-5.018-.379-1.333.053-2.895 1.366-3.698.01-.913.487-1.735 1.202-2.33M16.603 22.75H7.399l-1.733-7.799h12.67z"
      />
    </svg>
  );
};
export default IceCream_04;
