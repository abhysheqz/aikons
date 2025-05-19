import React from "react";
const Briefcase_05: React.FC<
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
        d="M2.5 5.25a.75.75 0 0 0-.75.75v4.628l.086.164C3.731 14.395 8.279 15.75 12 15.75s8.269-1.355 10.164-4.958l.086-.164V6a.75.75 0 0 0-.75-.75zM13 10h-2v2h2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.5 2.75a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v3.5h-2v-2.5h-5v2.5h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.75 14.252V21.5c0 .414.335.75.75.75h17a.75.75 0 0 0 .75-.75v-7.248c-2.633 2.21-6.322 2.998-9.25 2.998s-6.618-.787-9.25-2.998"
      />
    </svg>
  );
};
export default Briefcase_05;
