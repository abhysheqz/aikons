import React from "react";
const Apricot: React.FC<
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
        d="M12.853 5.473c.083-.454.22-.948.427-1.393.39-.836.936-1.33 1.72-1.33v-1.5c-1.615 0-2.57 1.102-3.08 2.196-.43.924-.613 1.961-.659 2.71-2.18 1.3-3.712 3.859-4.006 6.768l-1.493-.15c.304-3.004 1.815-5.847 4.12-7.512a6 6 0 0 0-.383-.012c-4.142 0-7.25 4.07-7.25 8.75s3.108 8.75 7.25 8.75q.207 0 .411-.014a9 9 0 0 1-1.364-1.212l1.104-1.016c1.043 1.133 2.38 1.922 3.875 2.164q.478.077.976.078c4.142 0 7.25-4.07 7.25-8.75s-3.108-8.75-7.25-8.75a6.2 6.2 0 0 0-1.648.223"
      />
    </svg>
  );
};
export default Apricot;
