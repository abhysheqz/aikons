import React from "react";
const PathfinderCrop: React.FC<
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
        d="M19.6 9.933h-1.45a.967.967 0 1 1 0-1.933h1.45a2.9 2.9 0 0 1 2.9 2.9v8.7a2.9 2.9 0 0 1-2.9 2.9h-8.7A2.9 2.9 0 0 1 8 19.6v-1.45a.967.967 0 1 1 1.933 0v1.45c0 .534.433.967.967.967h8.7a.967.967 0 0 0 .966-.967v-8.7a.967.967 0 0 0-.966-.967M3.9 2.933a.967.967 0 0 0-.967.967v.483a.967.967 0 1 1-1.933 0V3.9A2.9 2.9 0 0 1 3.9 1h.483a.967.967 0 1 1 0 1.933zm2.417-.966c0-.534.432-.967.966-.967h1.934a.967.967 0 0 1 0 1.933H7.283a.967.967 0 0 1-.966-.966m4.833 0c0-.534.433-.967.967-.967h.483a2.9 2.9 0 0 1 2.9 2.9v.967a.967.967 0 0 1-1.933 0V3.9a.967.967 0 0 0-.967-.967h-.483a.967.967 0 0 1-.967-.966m-9.183 4.35c.534 0 .966.432.966.966v1.934a.967.967 0 0 1-1.933 0V7.283c0-.534.433-.966.967-.966m0 4.833c.534 0 .966.433.966.967v.483c0 .534.433.967.967.967h1.45a.967.967 0 1 1 0 1.933H3.9A2.9 2.9 0 0 1 1 12.6v-.483c0-.534.433-.967.967-.967"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8 10.75A2.75 2.75 0 0 1 10.75 8h4a.75.75 0 0 1 .75.75v3.999a2.75 2.75 0 0 1-2.75 2.75l-4 .001a.75.75 0 0 1-.75-.75z"
      />
    </svg>
  );
};
export default PathfinderCrop;
