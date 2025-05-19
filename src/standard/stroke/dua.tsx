import React from "react";
const Dua: React.FC<
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
        strokeWidth={1.5}
        d="M14.993 7.432A3.229 3.229 0 1 1 10.56 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 3.999h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18.992 12.964-2.985 3.043m2.985-3.043V8c.026-.953 1.17-2 2.008-2v0a1 1 0 0 1 1 1v6.718a2 2 0 0 1-.53 1.357L16 21h-4v-5.508l3.748-3.362c.218-.138.673-.416 1.283-.373 1.128.079 1.518.85 1.961 1.207M5.008 12.964l2.985 3.043m-2.985-3.043V8C4.982 7.047 3.838 6 3 6v0a1 1 0 0 0-1 1v7.109a1 1 0 0 0 .265.678L8 21h4v-5.508L8.252 12.13c-.218-.138-.673-.416-1.283-.373-1.128.079-1.518.85-1.961 1.207"
      />
    </svg>
  );
};
export default Dua;
