import React from "react";
const Medal_04: React.FC<
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
        d="M12 12.75a.75.75 0 0 1 .617.324l1.518 2.199 2.576.754a.75.75 0 0 1 .382 1.18l-1.636 2.11.074 2.662a.75.75 0 0 1-1 .728L12 21.813l-2.531.894a.75.75 0 0 1-1-.728l.074-2.662-1.636-2.11a.75.75 0 0 1 .382-1.18l2.576-.754 1.518-2.199A.75.75 0 0 1 12 12.75M11 1.25V6h2V1.25h7c.414 0 .75.333.75.745v5.448L12 11.25 3.25 7.443V1.995c0-.198.079-.387.22-.527A.75.75 0 0 1 4 1.25z"
      />
    </svg>
  );
};
export default Medal_04;
