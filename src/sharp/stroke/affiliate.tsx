import React from "react";
const Affiliate: React.FC<
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
        d="m18.5 18.5 3.017 3.017M18 22h4v-4M5.5 18.5l-3.1 3.1M6 22H2v-4"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.913 9.278C10.857 9.278 10 9.91 10 10.69s.522 1.21 1.913 1.21S14 12.302 14 13.31c0 1.01-.934 1.412-2.087 1.412m0-5.444V8m0 1.278c.717 0 1.342.291 1.67.722m-1.67 4.722V16m0-1.278c-.68 0-1.285-.22-1.666-.56"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M22 6V2h-4m.5 3.5 3.155-3.155M5.5 5.5 2.374 2.374M6 2H2v4M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
      />
    </svg>
  );
};
export default Affiliate;
