import React from "react";
const CheckmarkBadge_02: React.FC<
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
        d="M12.53 1.47a.75.75 0 0 0-1.06 0L8.69 4.25H5a.75.75 0 0 0-.75.75v3.69l-2.78 2.78a.75.75 0 0 0 0 1.06l2.78 2.78V19c0 .414.336.75.75.75h3.69l2.78 2.78a.75.75 0 0 0 1.06 0l2.78-2.78H19a.75.75 0 0 0 .75-.75v-3.69l2.78-2.78a.75.75 0 0 0 0-1.06l-2.78-2.78V5a.75.75 0 0 0-.75-.75h-3.69zm1.896 7.548-3.71 4.415-1.724-1.499-.984 1.132 2.876 2.5 4.69-5.584z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CheckmarkBadge_02;
