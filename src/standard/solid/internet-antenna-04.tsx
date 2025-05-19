import React from "react";
const InternetAntenna_04: React.FC<
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
        d="M16.354 4.203a1 1 0 0 1 1.402.193C18.534 5.422 19 6.659 19 8c0 1.34-.466 2.578-1.244 3.604a1 1 0 1 1-1.594-1.208C16.703 9.683 17 8.863 17 8s-.297-1.683-.838-2.396a1 1 0 0 1 .192-1.4m-8.708 0a1 1 0 0 1 .192 1.401C7.297 6.317 7 7.137 7 8s.297 1.683.838 2.396a1 1 0 0 1-1.593 1.208C5.465 10.578 5 9.341 5 8c0-1.34.466-2.578 1.245-3.604a1 1 0 0 1 1.4-.193M4.28 2.198a1 1 0 0 1 .206 1.399C3.542 4.867 3 6.38 3 8s.542 3.133 1.486 4.403a1 1 0 1 1-1.604 1.194C1.699 12.007 1 10.08 1 8s.699-4.006 1.882-5.597a1 1 0 0 1 1.399-.205m15.44 0a1 1 0 0 1 1.398.205C22.301 3.993 23 5.92 23 8s-.699 4.006-1.882 5.597a1 1 0 1 1-1.604-1.194C20.458 11.133 21 9.62 21 8s-.542-3.133-1.486-4.403a1 1 0 0 1 .205-1.4"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 5.25a2.75 2.75 0 0 0-2.016 4.62L6.06 20.658a1 1 0 0 0 1.88.684L9.155 18h5.69l1.216 3.342a1 1 0 0 0 1.88-.684L14.016 9.87A2.75 2.75 0 0 0 12 5.25M14.118 16l-1.912-5.258a3 3 0 0 1-.412 0L9.883 16z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default InternetAntenna_04;
