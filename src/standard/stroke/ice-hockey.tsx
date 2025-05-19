import React from "react";
const IceHockey: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 17 22 3m-4.5 0-5.509 10.559c-.266.51-.907.69-1.416.421-2.469-1.304-5.754-2.422-7.227-1.738-1.667.774-1.808 5.936-.31 6.994 1.678 1.185 6.649.758 8.758.274"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m8 13-2 7M19 17h-6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z"
      />
    </svg>
  );
};
export default IceHockey;
