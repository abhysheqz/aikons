import React from "react";
const CourtHouse: React.FC<
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
        d="M2.47 18.47a.75.75 0 0 1 .53-.22h18a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .22-.53m1.28 1.28v1.5h16.5v-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.75 12.667c1.778-.4 3-2.198 3-4.167 0-2.235-1.575-4.25-3.75-4.25H5c-2.175 0-3.75 2.015-3.75 4.25 0 1.969 1.222 3.767 3 4.167H5c.685 0 1.243-.202 1.62-.541.365-.328.63-.844.63-1.625 0-.27-.082-.482-.196-.614-.1-.118-.264-.22-.554-.22a.87.87 0 0 0-.469.19c-.148.119-.28.305-.28.644h-1.5c0-.828.366-1.434.843-1.815.447-.357.987-.519 1.406-.519.704 0 1.291.276 1.692.743.388.451.558 1.03.558 1.59 0 1.153-.407 2.095-1.127 2.742-.71.636-1.651.925-2.623.925h-.75V19c0 .414.336.75.75.75h3.75V15h1.5v4.75h3.5V15h1.5v4.75H19a.75.75 0 0 0 .75-.75v-4.832H19c-.972 0-1.914-.29-2.622-.926-.721-.647-1.128-1.59-1.128-2.741 0-.56.17-1.14.558-1.591.401-.467.988-.742 1.692-.742.419 0 .96.16 1.406.518.477.382.844.987.844 1.815h-1.5c0-.338-.133-.525-.28-.643a.87.87 0 0 0-.47-.19c-.29 0-.453.101-.554.219-.113.132-.196.345-.196.614 0 .781.265 1.297.63 1.625.377.339.935.542 1.62.542zM11 8.25h2v1.5h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.25 2A.75.75 0 0 1 5 1.25h14a.75.75 0 0 1 .75.75v3h-1.5V2.75H5.75V5h-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CourtHouse;
