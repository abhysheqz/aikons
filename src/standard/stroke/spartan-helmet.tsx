import React from "react";
const SpartanHelmet: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M10 20h4" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.168 14.27C3.461 8.754 6.303 4.19 11.371 2.227c.294-.114.441-.17.628-.17s.334.056.628.17c5.069 1.963 7.911 6.527 7.204 12.045-.139 1.082-.208 1.624-.175 1.96.033.337.155.705.4 1.44l.633 1.9c.161.481.241.722.156 1.02s-.222.411-.496.638c-.928.768-2.05.771-2.85.771-2 .005-4-1.993-4-3.5 0-2.58 3.5-2.438 3.5-5 0-1.18-1-2-2-2-1.5 0-2 .949-2.999 2-1-1.051-1.5-2-3-2-1 0-2 .82-2 2 0 2.562 3.5 2.42 3.5 5 0 1.507-2 3.505-4 3.5-.8 0-1.921-.003-2.85-.771-.273-.227-.41-.34-.496-.638-.085-.298-.005-.539.156-1.02l.633-1.9c.245-.735.368-1.103.4-1.44s-.036-.878-.175-1.96Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M12 8h.009"
      />
    </svg>
  );
};
export default SpartanHelmet;
