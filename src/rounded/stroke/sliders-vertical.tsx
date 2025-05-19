import React from "react";
const SlidersVertical: React.FC<
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
        strokeWidth={1.5}
        d="M5 20v-6M5 11V4M9 8h6M2 14h6M16 12h6M12 8V4M12 20v-9M19 12V4M19 20v-5"
      />
    </svg>
  );
};
export default SlidersVertical;
