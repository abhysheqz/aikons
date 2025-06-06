import React from "react";
const Tags: React.FC<
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
        d="M11.95 1.74c1.056-.67 2.347-.974 3.57-.536 1.238.442 2.005 1.499 2.314 2.697.308 1.193.187 2.583-.364 3.909-.534 1.286-1.403 2.345-2.421 3.022a1 1 0 1 1-1.108-1.665c.665-.442 1.289-1.178 1.683-2.125.406-.979.46-1.923.274-2.641-.184-.714-.577-1.145-1.05-1.314-.489-.175-1.135-.098-1.827.342-.687.436-1.34 1.188-1.746 2.166a5 5 0 0 0-.294.961 1 1 0 1 1-1.962-.385c.088-.447.224-.898.409-1.344.551-1.327 1.46-2.414 2.521-3.087"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.655 5.194a2 2 0 0 1 1.985.561l.547.583a2 2 0 0 1 1.841.113l4 2.4a2 2 0 0 1 .971 1.715V21a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-.153l-4.085-.68a2 2 0 0 1-1.606-2.478l2.577-9.881a2 2 0 0 1 1.41-1.425zM8.999 18.82v-8.254a2 2 0 0 1 .971-1.715l2.452-1.471-.24-.257-4.361 1.19-2.578 9.88z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tags;
