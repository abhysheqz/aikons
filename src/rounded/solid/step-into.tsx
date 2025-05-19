import React from "react";
const StepInto: React.FC<
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
        d="M4 5c1.914 0 3.249.002 4.256.138.978.131 1.496.372 1.865.74.37.37.61.888.742 1.866C10.998 8.751 11 10.086 11 12v1.25H9a.75.75 0 0 0-.568 1.24l1.617 1.875c.306.356.585.68.841.907.277.245.636.478 1.11.478s.833-.233 1.11-.479c.257-.227.535-.55.841-.906l1.617-1.875A.75.75 0 0 0 15 13.25h-2v-1.323c0-1.824 0-3.293-.155-4.45-.162-1.2-.507-2.21-1.31-3.013-.802-.802-1.813-1.147-3.013-1.309C7.366 3 5.897 3 4.073 3H3a1 1 0 0 0 0 2z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 20a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M14 20a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StepInto;
