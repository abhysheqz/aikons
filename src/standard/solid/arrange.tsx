import React from "react";
const Arrange: React.FC<
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
        d="M15 3.75c0-.967.784-1.75 1.751-1.75l3 .002a1.75 1.75 0 0 1 1.749 1.75v2.997a1.75 1.75 0 0 1-1.75 1.75h-3A1.75 1.75 0 0 1 15 6.75zM2 3.75C2 2.783 2.784 2 3.751 2l3 .002A1.75 1.75 0 0 1 8.5 3.752v2.997A1.75 1.75 0 0 1 6.75 8.5h-3A1.75 1.75 0 0 1 2 6.75zM2 16.75c0-.967.784-1.75 1.751-1.75l3 .002a1.75 1.75 0 0 1 1.749 1.75v2.997a1.75 1.75 0 0 1-1.75 1.75h-3A1.75 1.75 0 0 1 2 19.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.75 5.249a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m9.707 1.793a1 1 0 0 1 0 1.414l-8 8a1 1 0 1 1-1.414-1.414l8-8a1 1 0 0 1 1.414 0M6.75 18.249a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2h-11a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.432 15.07a.75.75 0 0 1 .798.103l3 2.5a.75.75 0 0 1 0 1.152l-3 2.5A.75.75 0 0 1 17 20.75v-5a.75.75 0 0 1 .432-.68"
      />
    </svg>
  );
};
export default Arrange;
