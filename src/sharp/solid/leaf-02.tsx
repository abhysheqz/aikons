import React from "react";
const Leaf_02: React.FC<
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
        d="M5.662 17.277 2.25 20.69l1.06 1.061 3.413-3.412a7.3 7.3 0 0 1-1.06-1.06M21.696 3.353c-.01-.115-.067-.736-.12-.929-.197-.041-.814-.11-.929-.12-.23-.02-.558-.041-.968-.05a18.7 18.7 0 0 0-3.281.226c-2.634.415-5.999 1.53-8.81 4.342-2.217 2.216-3.228 4.336-3.33 6.267-.086 1.652.497 3.071 1.404 4.188L17.311 5.63l1.06 1.06L6.724 18.338c1.117.907 2.536 1.49 4.189 1.403 1.93-.101 4.05-1.112 6.266-3.328 2.812-2.812 3.927-6.177 4.342-8.81.209-1.32.244-2.464.226-3.282-.009-.41-.03-.739-.05-.968"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Leaf_02;
