import React from "react";
const Periscope: React.FC<
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
        d="M12 1.25c-4.84 0-8.75 3.96-8.75 8.83 0 1.39.276 2.49.835 3.563.543 1.042 1.346 2.04 2.34 3.227l.015.018 5 5.611a.75.75 0 0 0 1.12 0l5-5.611.015-.018c.994-1.187 1.797-2.185 2.34-3.228.559-1.072.835-2.171.835-3.561 0-4.87-3.91-8.831-8.75-8.831M16 10a4 4 0 1 1-7.972-.479 2.5 2.5 0 0 0 3.493-3.493Q11.757 6.001 12 6a4 4 0 0 1 4 4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Periscope;
