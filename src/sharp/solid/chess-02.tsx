import React from "react";
const Chess_02: React.FC<
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
        d="M9.092 2.596c.59-.79 1.481-1.346 2.6-1.346h.216l.183.115c.36.226.533.597.624.882.096.304.14.646.155.975a6.7 6.7 0 0 1-.057 1.166c1.061.336 1.887 1.246 2.032 2.286l3.205 3.337L15 13.06l-1.682-1.682-.2.072a7 7 0 0 1-.584.182c-.174.045-.421.1-.65.087-.769-.043-1.588-.399-2.389-1.185l-.7.714c.94.923 1.98 1.41 3.033 1.469.396.022.774-.07.956-.117.054-.013.234-.075.388-.128l.025-.008c.205.323.475.646.816.928l.009.007 3.228 2.753.004 2.097H7.25v-2.991l-.334-.427-.007-.01c-1.518-2.064-1.924-4.17-1.503-6a6.16 6.16 0 0 1 2.828-3.875c.075-.857.365-1.69.858-2.351M6.787 19.75l-1.5 3H18.75l-1.47-3z"
      />
    </svg>
  );
};
export default Chess_02;
