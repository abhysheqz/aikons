import React from "react";
const MessageSecure_02: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12.083 12.524h.009m3.986 0h.01m-8 0h.008"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.705 3.033C1.763 4.026.331 13.241 3.724 17.99l-1.568 3.92c-.032.08-.079.11 0 .08l4.399-1.48c2.27 1.432 8.472 1.326 10.689.153 2.216-1.173 5-3.51 4.737-8.407M9.705 3.033q.235-.014.475-.014m-.475.014 1.603-.014"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M21.998 5.499v-2.5c-2 0-3.5-1-3.5-1s-1.5 1-3.5 1v2.5c0 3.5 3.5 4.5 3.5 4.5s3.5-1 3.5-4.5Z"
      />
    </svg>
  );
};
export default MessageSecure_02;
