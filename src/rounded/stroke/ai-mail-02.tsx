import React from "react";
const AiMail_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m2 5.5 6.913 3.917c2.549 1.444 3.625 1.444 6.174 0L22 5.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.984 12.976c.021-.986.021-1.966 0-2.952-.065-3.065-.098-4.598-1.229-5.733-1.131-1.136-2.705-1.175-5.854-1.254-1.94-.05-3.862-.05-5.802 0-3.149.079-4.723.118-5.854 1.254-1.131 1.135-1.164 2.668-1.23 5.733a69 69 0 0 0 0 2.952c.066 3.065.099 4.598 1.23 5.733 1.131 1.136 2.705 1.175 5.854 1.254 1.305.033 2.601.044 3.901.033"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18.5 14 .258.697c.338.914.507 1.371.84 1.704.334.334.791.503 1.705.841L22 17.5l-.697.258c-.914.338-1.371.507-1.704.84-.334.334-.503.791-.841 1.705L18.5 21l-.258-.697c-.338-.914-.507-1.371-.84-1.704-.334-.334-.791-.503-1.705-.841L15 17.5l.697-.258c.914-.338 1.371-.507 1.704-.84.334-.334.503-.791.841-1.705z"
      />
    </svg>
  );
};
export default AiMail_02;
