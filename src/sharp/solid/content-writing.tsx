import React from "react";
const ContentWriting: React.FC<
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
        d="m19.19 11.438 3.56 3.56-7.25 7.25h-3.56v-3.56z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.798 10.5h1.952V1.75H1.25v18.5h9.274v-1.947H3.202V8.566h16.596zM6.51 4.156H4.5v2h2.01zm3.99 0H8.49v2h2.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ContentWriting;
