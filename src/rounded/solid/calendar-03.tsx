import React from "react";
const Calendar_03: React.FC<
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
        d="M8.1 1.25c.538 0 .975.438.975.977v.986c.578-.008 1.203-.008 1.879-.008h2.092c.676 0 1.301 0 1.879.008v-.986a.976.976 0 1 1 1.95 0V3.3q.264.025.51.057c1.17.158 2.155.495 2.937 1.28.783.784 1.12 1.772 1.277 2.944.151 1.13.151 2.566.151 4.349v2.097c0 1.782 0 3.218-.151 4.348-.158 1.173-.494 2.16-1.277 2.945s-1.768 1.122-2.938 1.28c-1.127.151-2.56.151-4.338.151h-2.092c-1.778 0-3.211 0-4.338-.152-1.17-.157-2.156-.495-2.938-1.28-.783-.784-1.12-1.771-1.277-2.944-.151-1.13-.151-2.566-.151-4.348V11.93c0-1.783 0-3.219.151-4.349.158-1.172.494-2.16 1.277-2.944.782-.785 1.768-1.122 2.938-1.28q.245-.032.509-.057V2.227c0-.54.437-.977.975-.977m-3.886 8.5C4.2 10.396 4.2 11.138 4.2 12v1.954c0 1.87.002 3.175.134 4.16.128.956.363 1.462.723 1.823.36.36.865.595 1.819.724.982.132 2.283.134 4.149.134h1.95c1.866 0 3.167-.002 4.15-.134.953-.129 1.459-.364 1.818-.724.36-.36.595-.867.723-1.823.132-.985.134-2.29.134-4.16V12c0-.862 0-1.604-.014-2.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 13.273a1 1 0 0 1 1-1h.009a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1m3.996 0a1 1 0 0 1 1-1h.008a1 1 0 0 1 0 2h-.008a1 1 0 0 1-1-1m3.995 0a1 1 0 0 1 1-1H16a1 1 0 0 1 0 2h-.009a1 1 0 0 1-1-1m-7.991 4a1 1 0 0 1 1-1h.009a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1m3.996 0a1 1 0 0 1 1-1h.008a1 1 0 0 1 0 2h-.008a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Calendar_03;
