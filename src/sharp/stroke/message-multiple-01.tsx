import React from "react";
const MessageMultiple_01: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.467 11.958h7.942M6.467 7.974h4.964"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.618 1.95C2.862 2.616-.04 9.268 3.352 14.554l-1.345 3.347a.1.1 0 0 0 .129.131l3.57-1.37c1.399 1.167 7.491 1.344 9.475 0M8.618 1.95q.209-.012.421-.012m-.421.012h1.693l1.427-.01m-.168-.002.168.002m0 0c4.105.087 6.197 3.342 6.579 4.695 1.741 5.22-.606 8.747-3.136 10.028M11.738 1.94c4.107.086 6.284 3.304 6.666 4.657 1.742 5.22-.693 8.785-3.223 10.066M11.738 1.94l.253-.002"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7.908 20.2c2.243 1.911 8.331 1.633 10.2.482l3.487 1.183a.1.1 0 0 0 .125-.131l-1.249-3.222c1.509-1.875 1.776-4.754 1.042-7.54"
      />
    </svg>
  );
};
export default MessageMultiple_01;
