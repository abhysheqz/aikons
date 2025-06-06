import React from "react";
const CodeCircle: React.FC<
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
        d="M16 16c.616 0 1.116-.512 1.116-1.143v-1.24c0-.304.117-.595.326-.809l.395-.404a.58.58 0 0 0 0-.808l-.395-.404a1.16 1.16 0 0 1-.326-.808V9.143C17.116 8.512 16.616 8 16 8M8 16c-.616 0-1.116-.512-1.116-1.143v-1.24c0-.304-.117-.595-.326-.809l-.395-.404a.58.58 0 0 1 0-.808l.395-.404c.209-.214.326-.505.326-.808V9.143C6.884 8.512 7.384 8 8 8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 12h.009m3.982 0H14"
      />
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
};
export default CodeCircle;
