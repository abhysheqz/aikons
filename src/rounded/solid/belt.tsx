import React from "react";
const Belt: React.FC<
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
      <path fill="currentColor" d="M6 11h3a1 1 0 1 1 0 2H6z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.007 6.489c.678-.962 1.775-1.377 3.173-1.199 1.707.218 3.577.634 5.036 1.629C15.745 7.96 16.75 9.59 16.75 12s-1.005 4.04-2.534 5.081c-1.459.995-3.329 1.41-5.036 1.629-1.398.178-2.495-.237-3.173-1.198-.608-.861-.757-1.999-.757-3.016V9.504c0-1.017.149-2.155.757-3.015m1.562 1.117c-.254.36-.402.994-.402 1.898v4.992c0 .904.148 1.539.402 1.898.183.26.511.512 1.37.402 1.634-.208 3.13-.58 4.202-1.311 1.002-.684 1.692-1.716 1.692-3.485s-.69-2.801-1.692-3.485c-1.072-.73-2.568-1.103-4.202-1.311-.859-.11-1.187.143-1.37.402"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.955 17.25h3.069V13H4a1 1 0 1 1 0-2h3.024V6.75H3.955c-.433 0-.83 0-1.152.043-.356.048-.731.16-1.04.47s-.422.684-.47 1.04c-.043.323-.043.72-.043 1.152v5.09c0 .433 0 .83.043 1.152.048.356.16.732.47 1.04.309.31.684.422 1.04.47.323.043.72.043 1.152.043M22.237 7.263c-.309-.31-.685-.422-1.04-.47-.323-.043-.72-.043-1.153-.043h-7.5l.845 1.186c.712.998 1.449 2.042 1.665 3.316.206 1.217-.051 2.77-1.643 4.783l-.96 1.215h7.593c.433 0 .83 0 1.153-.043.355-.048.731-.16 1.04-.47.31-.308.422-.684.47-1.04.043-.322.043-.72.043-1.152v-5.09c0-.432 0-.83-.044-1.152-.047-.356-.16-.731-.469-1.04M19.996 11A1 1 0 0 0 19 12c0 .552.446 1 .996 1h.009c.55 0 .995-.448.995-1s-.446-1-.995-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Belt;
