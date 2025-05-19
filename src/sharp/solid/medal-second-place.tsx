import React from "react";
const MedalSecondPlace: React.FC<
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
        d="M9.78 8.597 6.445 1.25H4.25l3.728 8.217a7.25 7.25 0 1 0 8.044 0L19.75 1.25h-2.197l-3.332 7.347a7 7 0 0 0-.802-.208L10.45 1.25H8.283l2.93 7.042a7.2 7.2 0 0 0-1.434.305m3.128-4.308L14.036 7l2.155-5.75h-2.137zM12 13.75a.75.75 0 0 0-.75.75v.75h-1.5v-.75a2.25 2.25 0 0 1 4.5 0v.129c0 .795-.397 1.538-1.059 1.979l-.964.642h1.955v1.5H9.75V17.1l2.61-1.74a.88.88 0 0 0 .39-.73V14.5a.75.75 0 0 0-.75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MedalSecondPlace;
