import React from "react";
const CallEnd_04: React.FC<
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
        d="M11.5 10.5a1 1 0 0 1 1 1v5.086l.793-.793a1 1 0 0 1 1.414 1.414l-2.5 2.5a1 1 0 0 1-1.414 0l-2.5-2.5a1 1 0 1 1 1.414-1.414l.793.793V11.5a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m20.107 11.46 1.725-2.916c.283-.478.205-1.108-.203-1.467-6.173-5.436-14.085-5.436-20.258 0-.408.359-.486.99-.203 1.467l1.725 2.917c.283.479.848.668 1.335.447l2.684-1.23a1.15 1.15 0 0 0 .646-.876L8 7a7.57 7.57 0 0 1 7 0l.442 2.802c.062.391.305.722.646.876l2.685 1.23c.486.221 1.05.032 1.334-.447"
      />
    </svg>
  );
};
export default CallEnd_04;
