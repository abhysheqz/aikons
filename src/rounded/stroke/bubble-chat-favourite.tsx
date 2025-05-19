import React from "react";
const BubbleChatFavourite: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.5 2C6.21 2.25 2 6.435 2 11.56c0 2.54 1.033 4.848 2.719 6.56.371.378.619.893.519 1.423a5.3 5.3 0 0 1-1.087 2.35 6.5 6.5 0 0 0 4.224-.657c.454-.242.681-.363.842-.387s.39.019.848.105a10.4 10.4 0 0 0 1.935.179c5.522 0 10-4.286 10-9.572q0-.286-.017-.568"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15.015 2.387c1.073-.64 2.009-.382 2.571.028.23.169.346.253.414.253s.183-.084.414-.253c.562-.41 1.498-.668 2.571-.028 1.408.84 1.726 3.609-1.52 5.945-.62.445-.928.668-1.465.668s-.846-.223-1.464-.668c-3.247-2.336-2.929-5.106-1.521-5.945Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.996 12h.008m3.987 0H16m-8 0h.009"
      />
    </svg>
  );
};
export default BubbleChatFavourite;
