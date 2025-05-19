import React from "react";
const Health: React.FC<
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
        d="m12 3.744-.044-.036a7 7 0 0 0-1.592-.95c-1.385-.592-3.344-.87-5.576.324C2.006 4.57.64 8.133 1.514 11.802c.884 3.712 4.025 7.535 10.224 9.85l.263.098.263-.098c6.199-2.315 9.34-6.138 10.223-9.85.874-3.669-.491-7.232-3.274-8.72-2.232-1.194-4.19-.916-5.576-.323a7 7 0 0 0-1.592.95zM11.003 8v3h-3v2h3v3h2v-3h3v-2h-3V8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Health;
