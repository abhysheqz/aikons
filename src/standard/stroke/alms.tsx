import React from "react";
const Alms: React.FC<
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
        d="M13.462 3.25a.75.75 0 0 0 0 1.5zm0 1.5c2.098 0 3.788 1.685 3.788 3.75h1.5c0-2.905-2.373-5.25-5.288-5.25zM17.25 8.5c0 2.065-1.69 3.75-3.788 3.75v1.5c2.915 0 5.288-2.345 5.288-5.25zm-3.788 3.75a3.78 3.78 0 0 1-3.725-3.067l-1.474.274c.454 2.447 2.612 4.293 5.2 4.293z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.005 4.546C4 4.546 5.12 3.194 7.324 2.273c1.014-.424 2.158-.326 3.17.1A63 63 0 0 1 14 4s-1.195.136-1.974.506c-.851.403-2.2 1.976-2.2 1.976M2 11h3.517a2 2 0 0 0 .913-.22l2.538-1.303h2.443a1.498 1.498 0 1 0 0-2.995H8.239M22 14h-2.487a2 2 0 0 0-.964.248l-2.05 1.127h-1c-1.5 0-2.5 1.149-2.5 2.125l2.684.894a1 1 0 0 0 .633 0l2.683-.894M13 17l-4.211-1.404a2 2 0 0 0-2.49 1.155v0a.877.877 0 0 0 .423 1.11l7.585 3.792a2 2 0 0 0 1.439.136l6.253-1.77"
      />
    </svg>
  );
};
export default Alms;
