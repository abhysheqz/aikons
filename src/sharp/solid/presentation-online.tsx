import React from "react";
const PresentationOnline: React.FC<
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
        d="M21 21.75H3v-2h18z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 12.75a.75.75 0 0 0-.743.85l1 7.5a.75.75 0 0 0 .743.65h12a.75.75 0 0 0 .743-.65l1-7.5a.75.75 0 0 0-.743-.85zm5.5 4.5h3v-1.5h-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.25 5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M12 8.75a4.75 4.75 0 0 1 4.31 2.75H7.69A4.75 4.75 0 0 1 12 8.75"
      />
    </svg>
  );
};
export default PresentationOnline;
