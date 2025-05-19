import React from "react";
const IceCream_02: React.FC<
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
        d="M12 1.25c2.234 0 4.15 1.465 4.685 3.495 1.751.488 3.065 2.039 3.065 3.922 0 2.289-1.938 4.083-4.25 4.083a4.32 4.32 0 0 1-3.087-1.276 4.93 4.93 0 0 1-3.33 1.276c-2.634 0-4.833-2.043-4.833-4.639 0-2.147 1.509-3.92 3.518-4.465C8.597 2.208 10.19 1.25 12 1.25M7.808 14.124l3.503 8.172a.75.75 0 0 0 1.373.012l3.653-8.118q-.413.06-.837.06a5.86 5.86 0 0 1-3.123-.894 6.47 6.47 0 0 1-3.294.894q-.652 0-1.275-.126"
      />
    </svg>
  );
};
export default IceCream_02;
