import React from "react";
const TabletConnectedUsb: React.FC<
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
        d="M22 6V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-1"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6.5 3v18"
      />
      <path
        fill="currentColor"
        d="M10 11.253a.75.75 0 0 0 0 1.5zm9 1.5a.75.75 0 0 0 0-1.5zm-1.288-.516a.75.75 0 1 0-1.424-.474zM12.5 8.25a.75.75 0 0 0 0 1.5zm1.5 6a.75.75 0 0 0 0 1.5zm.228-4.566-.712.237zM10 12.753h5v-1.5h-5zm5 0h2v-1.5h-2zm2 0h2v-1.5h-2zM13.515 9.92l.772 2.319 1.424-.475-.773-2.318zm3.423 4.632.772-2.313-1.423-.475-.772 2.314zm.772-2.313v-.003l-1.422-.474-.001.002zm-4.432-3.99H12.5v1.5h.78zm2 6H14v1.5h1.28zM21.25 12a.75.75 0 0 1-.75.75v1.5A2.25 2.25 0 0 0 22.75 12zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5A2.25 2.25 0 0 0 18.25 12zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25zm-4.984 2.83a.25.25 0 0 1-.237.17v1.5a1.75 1.75 0 0 0 1.66-1.197zm-.577-4.633a1.75 1.75 0 0 0-1.66-1.197v1.5a.25.25 0 0 1 .237.171z"
      />
    </svg>
  );
};
export default TabletConnectedUsb;
