import React from "react";
const Gravity: React.FC<
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
        d="M5.25 16a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 7 1.25m10 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.251 4.75h-.41c-.154 0-.344 0-.5.022-.153.023-.564.106-.76.532-.194.423.009.788.091.92.083.132.189.256.29.375l.5.59c.21.248.415.489.607.662.21.189.516.399.932.399s.721-.21.932-.4c.192-.172.396-.413.607-.66l.483-.57c.1-.12.223-.264.307-.397.082-.13.285-.496.09-.92s-.606-.508-.76-.53a4 4 0 0 0-.5-.023h-.409V2a.75.75 0 0 0-1.5 0z"
      />
    </svg>
  );
};
export default Gravity;
