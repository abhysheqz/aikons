import React from "react";
const Moonset: React.FC<
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
        d="M18.793 9.914 22 6.707l-1.414-1.414-.793.793V2.5h-2v3.586L17 5.293l-1.414 1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.08 5.172c-3.9 2.413-5.236 7.757-2.984 11.936a9 9 0 0 0 .55.892h13.023a9 9 0 0 0 1.333-2.884c-2.453.326-4.963-.91-6.277-3.348-1.313-2.438-1.057-5.386.434-7.5-1.987-.539-4.164-.281-6.08.904"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 21.5H2v-2h20z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Moonset;
