import React from "react";
const Loading_01: React.FC<
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
        d="M6.944 1.25c-1.807 0-3.606 1.252-3.69 3.286-.093 2.28 1.536 3.726 2.776 4.778.907.769 1.516 1.288 1.92 1.728.392.427.477.66.493.83q.012.128 0 .257c-.016.17-.1.402-.493.83-.404.44-1.013.958-1.92 1.727l-.051.044c-1.256 1.065-2.82 2.391-2.724 4.734.083 2.034 1.882 3.286 3.689 3.286h10.113c1.807 0 3.606-1.252 3.69-3.286.055-1.369-.45-2.763-1.556-3.741a42 42 0 0 0-.845-.721L18.344 15l-.373-.315c-.907-.769-1.516-1.288-1.92-1.728-.393-.427-.477-.66-.493-.83a1.3 1.3 0 0 1 0-.257c.016-.17.1-.402.493-.83.404-.44 1.013-.958 1.92-1.727l.015-.014c1.25-1.06 2.856-2.422 2.76-4.764-.083-2.034-1.882-3.286-3.689-3.286zM8.27 20.188c-.14.24-.166.608.223.608h7.013c.39 0 .363-.369.223-.608-.22-.377-.577-.63-.856-.827C14.017 18.749 13.109 18 12 18c-1.108 0-2.016.75-2.872 1.361-.28.198-.637.45-.857.827"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Loading_01;
