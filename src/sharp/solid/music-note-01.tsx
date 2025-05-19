import React from "react";
const MusicNote_01: React.FC<
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
        d="M21.424 5.399a.79.79 0 0 1 .326.637V18a2.75 2.75 0 1 1-2-2.646v-3.937l-7 2.333v5.75a3.25 3.25 0 1 1-2-3V9.178c0-.338.216-.639.537-.746l9.429-3.142c.24-.08.503-.04.708.107M7.536 1.29a.94.94 0 0 1 1.056.38c.084.126.156.276.204.38l.091.2.085.187c.126.272.269.558.443.82.358.537.737.817 1.217.817v1.882c-.782 0-1.4-.28-1.882-.657v4.2a3.25 3.25 0 1 1-1.882-2.948V2.19c0-.414.271-.78.668-.9"
      />
    </svg>
  );
};
export default MusicNote_01;
