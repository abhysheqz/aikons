import React from "react";
const GraduateFemale: React.FC<
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
        d="M4.253 14.882v-3.89h1.5v4.097c-.03.097-.148.493-.208.665-.12.343-.302.82-.554 1.363-.428.92-.615 2.058-1.522 3.06.818.742 2.221 1.583 4.746.635-.808-.777-1.464-1.861-1.464-3.325v-1.5h1.5v1.5c0 1.371.868 2.295 1.89 2.92a7.5 7.5 0 0 0 1.86.802 7.525 7.525 0 0 0 1.859-.802c1.023-.625 1.89-1.549 1.89-2.92v-1.5h1.5v1.5c0 1.463-.654 2.547-1.463 3.324 2.526.949 3.934.108 4.753-.634-.907-1.002-1.099-2.14-1.526-3.06a15 15 0 0 1-.555-1.363c-.06-.172-.177-.568-.207-.665v-4.097h1.5v3.89l.007.025a13.365 13.365 0 0 0 .615 1.578c.46.99.71 2.183 1.69 3.109l.44.415-.313.517c-.92 1.52-3.71 3.326-7.805 1.31a9.2 9.2 0 0 1-1.991.82c-.069.018-.355.085-.394.095-.04-.01-.326-.077-.394-.096a9.207 9.207 0 0 1-1.99-.82c-4.094 2.017-6.88.21-7.8-1.309l-.313-.517.44-.415c.98-.926 1.226-2.12 1.686-3.108a13 13 0 0 0 .615-1.579z"
      />
      <path
        fill="currentColor"
        d="M12.367 1.345a.75.75 0 0 0-.73 0L1.635 6.913a.75.75 0 0 0-.107 1.237L4.25 10.35v2.892h15.5v-2.89l2.723-2.201a.75.75 0 0 0-.107-1.237z"
      />
    </svg>
  );
};
export default GraduateFemale;
