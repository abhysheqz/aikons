import React from "react";
const SimcardDual: React.FC<
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
        d="m2.032 6.076-.024 15.809a.1.1 0 0 0 .1.1h13.884a.1.1 0 0 0 .1-.1L16.05 9.983l-4.63-4.007H2.132a.1.1 0 0 0-.1.099Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.04 5.266v-3.18a.1.1 0 0 1 .1-.099h7.886l3.986 3.477v10.412a.1.1 0 0 1-.1.1H16.74"
      />
    </svg>
  );
};
export default SimcardDual;
