import React from "react";
const Chatting_01: React.FC<
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
        d="M22.75 16.21c0-3.312-2.82-5.96-6.25-5.96s-6.25 2.648-6.25 5.96 2.82 5.959 6.25 5.959c.817 0 1.599-.15 2.316-.423l2.771 1.004-.53-2.463c1.047-1.063 1.693-2.497 1.693-4.078"
      />
      <path
        fill="currentColor"
        d="M11.5 1.25c-5.625 0-10.25 4.13-10.25 9.297 0 2.465 1.059 4.703 2.776 6.361l-.869 3.842 4.546-1.566c.715.259 1.469.447 2.252.554A6.95 6.95 0 0 1 9 16.209C9 12.146 12.442 9 16.5 9c2.011 0 3.87.773 5.235 2.047q.015-.25.015-.5c0-5.167-4.625-9.297-10.25-9.297"
      />
    </svg>
  );
};
export default Chatting_01;
