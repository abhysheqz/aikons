import React from "react";
const Notion_02: React.FC<
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
        d="m2.5 3.5 14-1 5 3m-19-2 4 3m-4-3v13l4 5m15-16-15 1m15-1v14l-15 2m0-15v15"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M12.47 17.704 9.5 18.1m9-9.4-2.235.149m1.235-.082V17H17l-5.285-7.848L9.5 9.3m1.5-.1v8.5"
      />
    </svg>
  );
};
export default Notion_02;
