import React from "react";
const Anchor: React.FC<
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
        d="M12 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m3.5 1.5A3.5 3.5 0 0 1 13 8.855V19.94a8.01 8.01 0 0 0 6.817-6.229l-1.264.632-.895-1.788L22 10.383V12c0 5.523-4.477 10-10 10S2 17.524 2 12v-1.618l4.342 2.17-.895 1.79-1.264-.633A8.01 8.01 0 0 0 11 19.94V8.855A3.502 3.502 0 0 1 12 2a3.5 3.5 0 0 1 3.5 3.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Anchor;
