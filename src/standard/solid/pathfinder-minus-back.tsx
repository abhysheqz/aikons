import React from "react";
const PathfinderMinusBack: React.FC<
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
        d="M6.317 14.533a.967.967 0 0 1-.967.967H3.9A2.9 2.9 0 0 1 1 12.6v-.483a.967.967 0 1 1 1.933 0v.483c0 .534.433.967.967.967h1.45c.534 0 .967.432.967.966m-4.35-4.35A.967.967 0 0 1 1 9.217V7.283a.967.967 0 0 1 1.933 0v1.934a.967.967 0 0 1-.966.966m12.566-4.35a.967.967 0 0 1-.966-.966V3.9a.967.967 0 0 0-.967-.967h-.483a.967.967 0 1 1 0-1.933h.483a2.9 2.9 0 0 1 2.9 2.9v.967a.967.967 0 0 1-.967.966M1.967 5.35A.967.967 0 0 1 1 4.383V3.9A2.9 2.9 0 0 1 3.9 1h.483a.967.967 0 1 1 0 1.933H3.9a.967.967 0 0 0-.967.967v.483a.967.967 0 0 1-.966.967m8.216-3.383a.967.967 0 0 1-.966.966H7.283a.967.967 0 0 1 0-1.933h1.934c.534 0 .966.433.966.967"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M22.5 19.75a2.75 2.75 0 0 1-2.75 2.75h-9A2.75 2.75 0 0 1 8 19.75v-5a.75.75 0 0 1 .75-.75h4c.69 0 1.25-.56 1.25-1.25v-4a.75.75 0 0 1 .75-.75h5a2.75 2.75 0 0 1 2.75 2.75z"
      />
    </svg>
  );
};
export default PathfinderMinusBack;
