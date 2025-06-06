import React from "react";
const AtomicPower: React.FC<
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
        d="M15.104 4.223c-2.05.67-4.418 2.146-6.577 4.305q-.689.691-1.286 1.405L5.846 8.765q.65-.775 1.396-1.523c2.318-2.317 4.924-3.972 7.297-4.748 2.32-.757 4.703-.749 6.21.757 1.424 1.424 1.506 3.637.876 5.819l-1.747-.505c.56-1.94.308-3.304-.416-4.028-.766-.767-2.255-1.001-4.358-.314m.367 11.249q.69-.691 1.287-1.405l1.394 1.168a23 23 0 0 1-1.396 1.523c-2.317 2.317-4.923 3.972-7.297 4.748-2.32.757-4.703.749-6.21-.757-1.526-1.527-1.514-3.955-.722-6.311l1.724.58c-.722 2.145-.493 3.668.285 4.445.766.767 2.255 1.001 4.358.314 2.05-.67 4.418-2.146 6.577-4.305"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m11.697 8.768 1.514 1.009-.877 1.314h2.729L12.3 15.232l-1.513-1.009.876-1.314H8.936z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.536 4.537c.778-.778 2.3-1.007 4.445-.285l.58-1.724c-2.356-.792-4.784-.804-6.311.723C1.744 4.757 1.736 7.14 2.493 9.46c.776 2.374 2.43 4.98 4.749 7.297a23 23 0 0 0 1.916 1.718l1.136-1.42a21 21 0 0 1-1.767-1.583c-2.158-2.16-3.636-4.528-4.305-6.577-.687-2.103-.453-3.592.314-4.358m9.168 2.409q.9.718 1.767 1.582c2.159 2.16 3.636 4.528 4.305 6.577.687 2.103.453 3.592-.314 4.358-.83.831-2.516 1.03-4.866.134l-.648 1.7c2.527.963 5.173 1.08 6.8-.548 1.506-1.506 1.514-3.889.757-6.209-.776-2.374-2.43-4.98-4.748-7.297a23 23 0 0 0-1.917-1.718z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AtomicPower;
