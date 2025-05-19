import React from "react";
const Knife_01: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.56 8.026h.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m9.103 11.601-6.096 6.182a1.923 1.923 0 0 0-.061 2.63 1.918 1.918 0 0 0 2.881-.024l2.936-3.409 1.273-1.417 2.722 2.393a1 1 0 0 1 .058.058c.22.242.488.242.644-.01q.037-.063.083-.118l8.687-9.717a1 1 0 0 1 .072-.07l.003-.001c.22-.193.196-.466-.035-.643a1 1 0 0 1-.066-.054l-4.223-4a.7.7 0 0 1-.09-.108c-.212-.314-.47-.312-.62-.029a.7.7 0 0 1-.12.177z"
      />
    </svg>
  );
};
export default Knife_01;
