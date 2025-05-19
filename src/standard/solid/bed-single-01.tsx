import React from "react";
const BedSingle_01: React.FC<
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
        d="M5 11V6.478C7.031 4.901 9.434 4 12 4s4.968.901 7 2.478V11h-2v-.691c0-.563-.32-1.11-.88-1.354C15.472 8.672 13.765 8 12 8s-3.472.672-4.12.955c-.56.244-.88.79-.88 1.354V11zm-2 .17V6.469c0-.587.259-1.168.75-1.55C6.101 3.083 8.937 2 12 2s5.898 1.083 8.25 2.918c.491.382.75.963.75 1.55v4.703c1.165.412 2 1.523 2 2.829v7a1 1 0 1 1-2 0v-3H3v3a1 1 0 1 1-2 0v-7c0-1.306.835-2.418 2-2.83"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BedSingle_01;
