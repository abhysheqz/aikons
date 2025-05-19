import React from "react";
const HorseHead: React.FC<
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
        d="m16.855 5.813.56.573c.689.668 1.464 1.803 1.657 3.042.115.732.44 1.4.923 1.915l1.754 2.094-2.287 3.645-2.984-1.485c-2.016.141-3.131-.802-3.756-1.622-.164.29-.343.712-.417 1.256-.152 1.11.115 2.896 2.252 5.269l1.126 1.25H2.25V21c0-5.81 1.139-9.868 3.15-12.553 1.944-2.595 4.633-3.813 7.632-4.144.611-.983 1.56-1.485 2.327-1.741.436-.146 1.095-.3 1.633-.3l1.053-.012z"
      />
    </svg>
  );
};
export default HorseHead;
