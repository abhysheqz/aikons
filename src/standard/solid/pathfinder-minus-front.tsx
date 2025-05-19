import React from "react";
const PathfinderMinusFront: React.FC<
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
        d="M17.183 8.967c0-.534.433-.967.967-.967h1.45a2.9 2.9 0 0 1 2.9 2.9v.483a.967.967 0 1 1-1.933 0V10.9a.967.967 0 0 0-.967-.967h-1.45a.967.967 0 0 1-.967-.966m4.35 4.35c.534 0 .967.432.967.966v1.934a.967.967 0 0 1-1.933 0v-1.934c0-.534.433-.966.966-.966m-12.566 4.35c.534 0 .966.432.966.966v.967c0 .534.433.967.967.967h.483a.967.967 0 1 1 0 1.933H10.9A2.9 2.9 0 0 1 8 19.6v-.967c0-.534.433-.966.967-.966m12.566.483c.534 0 .967.433.967.967v.483a2.9 2.9 0 0 1-2.9 2.9h-.483a.967.967 0 1 1 0-1.933h.483a.967.967 0 0 0 .967-.967v-.483c0-.534.433-.967.966-.967m-8.216 3.383c0-.534.432-.966.966-.966h1.934a.967.967 0 0 1 0 1.933h-1.934a.967.967 0 0 1-.966-.967"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1 3.75A2.75 2.75 0 0 1 3.75 1h9a2.75 2.75 0 0 1 2.75 2.75v5a.75.75 0 0 1-.75.75h-4c-.69 0-1.25.56-1.25 1.25v4a.75.75 0 0 1-.75.75h-5A2.75 2.75 0 0 1 1 12.75z"
      />
    </svg>
  );
};
export default PathfinderMinusFront;
