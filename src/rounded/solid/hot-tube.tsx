import React from "react";
const HotTube: React.FC<
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
        d="M16.095 5.28a1 1 0 0 1 .024 1.415.45.45 0 0 0 0 .61 2.45 2.45 0 0 1 0 3.39 1 1 0 0 1-1.438-1.39.45.45 0 0 0 0-.61 2.45 2.45 0 0 1 0-3.39 1 1 0 0 1 1.414-.024m3.2 0a1 1 0 0 1 .024 1.415.45.45 0 0 0 0 .61 2.45 2.45 0 0 1 0 3.39 1 1 0 0 1-1.438-1.39.45.45 0 0 0 0-.61 2.45 2.45 0 0 1 0-3.39 1 1 0 0 1 1.414-.024"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2 12a1 1 0 1 0 0 2h.406l.527 3.159c.192 1.155.348 2.092.566 2.824.228.763.546 1.393 1.118 1.878s1.247.696 2.037.794c.758.095 1.708.095 2.88.095h4.933c1.171 0 2.12 0 2.879-.095.79-.098 1.464-.309 2.037-.794.572-.485.89-1.115 1.118-1.878.218-.732.374-1.669.566-2.825L21.594 14H22a1 1 0 1 0 0-2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      />
      <path
        fill="currentColor"
        d="M7 1.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M6.851 7.79a2.6 2.6 0 0 0-2.601 2.602c0 .054 0 .081.004.104a.3.3 0 0 0 .25.25c.023.004.05.004.105.004h5.732c.258 0 .387 0 .46-.047a.3.3 0 0 0 .139-.264c-.003-.087-.076-.193-.223-.405A4.45 4.45 0 0 0 6.851 7.79"
      />
    </svg>
  );
};
export default HotTube;
