import React from "react";
const ArtificialIntelligence_06: React.FC<
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
        d="m10.357 8.5.701-.267-.184-.483h-.517zm1.585 6.267.267.701 1.402-.534-.267-.7zM16.25 8.5v-.75h-1.5v.75zm-1.5 6v.75h1.5v-.75zm-4.964-6v-.75h-.517l-.184.483zm-2.987 5.733-.267.701 1.402.534.267-.7zm2.857-5.466 2.286 6 1.402-.534-2.286-6zM14.75 8.5v6h1.5v-6zm-5.665-.267-2.286 6 1.402.534 2.286-6zm-.97 5.217h3.957v-1.5H8.115zm2.242-5.7h-.571v1.5h.571z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 13.967v-3.934c-2.857 0-4.714-3.103-3.268-5.566L15.268 2.5c-1.464 2.494-5.07 2.494-6.534 0L5.27 4.467C6.716 6.93 4.857 10.033 2 10.033v3.934c2.857 0 4.714 3.103 3.268 5.566L8.732 21.5c1.465-2.495 5.073-2.495 6.538 0l3.464-1.967c-1.447-2.463.41-5.566 3.266-5.566"
      />
    </svg>
  );
};
export default ArtificialIntelligence_06;
