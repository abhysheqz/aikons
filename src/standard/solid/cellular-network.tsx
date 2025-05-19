import React from "react";
const CellularNetwork: React.FC<
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
        d="M12 6.25a2.75 2.75 0 0 0-1 5.313V20a1 1 0 1 0 2 0v-8.437a2.751 2.751 0 0 0-1-5.313"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.354 5.203a1 1 0 0 1 1.402.193C18.534 6.422 19 7.659 19 9c0 1.34-.466 2.578-1.244 3.604a1 1 0 1 1-1.594-1.208C16.703 10.683 17 9.863 17 9s-.297-1.683-.838-2.396a1 1 0 0 1 .192-1.4m-8.708 0a1 1 0 0 1 .192 1.401C7.297 7.317 7 8.137 7 9s.297 1.683.838 2.396a1 1 0 0 1-1.593 1.208C5.465 11.578 5 10.341 5 9c0-1.34.466-2.578 1.245-3.604a1 1 0 0 1 1.4-.193M4.28 3.198a1 1 0 0 1 .206 1.399C3.542 5.867 3 7.38 3 9s.542 3.133 1.486 4.403a1 1 0 1 1-1.604 1.194C1.699 13.007 1 11.08 1 9s.699-4.006 1.882-5.597a1 1 0 0 1 1.399-.205m15.44 0a1 1 0 0 1 1.398.205C22.301 4.993 23 6.92 23 9s-.699 4.006-1.882 5.597a1 1 0 1 1-1.604-1.194C20.458 12.133 21 10.62 21 9s-.542-3.133-1.486-4.403a1 1 0 0 1 .205-1.4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CellularNetwork;
