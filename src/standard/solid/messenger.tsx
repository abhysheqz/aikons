import React from "react";
const Messenger: React.FC<
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
        d="M12.002 1.248C6.064 1.248 1.25 6.062 1.25 12c0 1.901.415 3.56 1.288 5.112L1.28 21.79a.76.76 0 0 0 .931.932l4.653-1.25c1.563.884 3.231 1.28 5.138 1.28 5.938 0 10.752-4.814 10.752-10.752S17.94 1.248 12.002 1.248m5.705 9.46a1 1 0 0 0-1.414-1.415l-2.845 2.845-2.797-2.397a1 1 0 0 0-1.41.108l-3 3.5a1 1 0 0 0 1.518 1.302l2.35-2.741 2.74 2.35a1 1 0 0 0 1.358-.053z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Messenger;
