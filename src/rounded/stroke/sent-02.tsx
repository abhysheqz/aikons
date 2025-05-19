import React from "react";
const Sent_02: React.FC<
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
        d="m9.498 15 7.5-7.5M8.006 7.679l7.321-3.46c3.042-1.438 4.563-2.157 5.533-1.436s.693 2.365.138 5.652l-.954 5.662c-.363 2.149-.544 3.223-1.345 3.692s-1.842.109-3.923-.611l-6.365-2.202c-3.892-1.346-5.838-2.019-5.91-3.34-.074-1.32 1.786-2.2 5.505-3.957M9.498 15.5v2.227c0 2.374 0 3.56.71 3.75s1.458-.798 2.954-2.773l.836-1.204"
      />
    </svg>
  );
};
export default Sent_02;
