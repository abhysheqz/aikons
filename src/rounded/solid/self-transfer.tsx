import React from "react";
const SelfTransfer: React.FC<
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
        d="m6.934 14.547.734.459a1 1 0 0 1 1.684 1.079l-3.5 5.687a1 1 0 1 1-1.704-1.048l.023-.037-.793-.53a1.984 1.984 0 0 1-.58-2.693l1.418-2.283a1.97 1.97 0 0 1 2.718-.634M17 10.3v3.317l1.966 7.373a1 1 0 0 1-1.798.813l-4.496-6.744a4 4 0 0 1-.672-2.22v-1.855l-1.105 2.211a1 1 0 0 1-1.79-.894l1.672-3.342a4 4 0 0 1 3.577-2.21h.54a4 4 0 0 1 3.329 1.78l1.014 1.522 1.863 1.397a1 1 0 0 1-1.2 1.6l-2-1.5a1 1 0 0 1-.232-.245z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.982 15.827a1 1 0 0 0-1.358.394l-2.5 4.547a1 1 0 0 0 1.628 1.14l3.5-4a1 1 0 0 0-.858-1.653 1 1 0 0 0-.412-.428"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M12.5 3.75a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
    </svg>
  );
};
export default SelfTransfer;
