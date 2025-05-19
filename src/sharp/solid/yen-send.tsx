import React from "react";
const YenSend: React.FC<
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
        d="M6.774 10.957 1.5 4.517 3.048 3.25l4.726 5.771L12.5 3.25l1.548 1.267-5.274 6.44v9.793h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.274 14.384h-9v-2h9zM12.274 18.384h-9v-2h9zM18.671 12.384l-.793-.793 1.414-1.414 3.207 3.207-3.207 3.207-1.414-1.415.793-.792h-5.086v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default YenSend;
