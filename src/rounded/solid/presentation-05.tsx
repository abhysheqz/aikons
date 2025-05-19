import React from "react";
const Presentation_05: React.FC<
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
        d="M11 21.506V22a1 1 0 1 0 2 0v-.494c.347.01.458.03.554.07.141.059.275.167.91.803l.329.328a1 1 0 0 0 1.414-1.414l-.328-.328-.098-.099c-.48-.48-.905-.907-1.461-1.137-.411-.17-.847-.214-1.32-.226V17h-2v2.503c-.473.012-.909.055-1.32.226-.556.23-.981.657-1.46 1.138l-.099.098-.328.328a1 1 0 0 0 1.414 1.414l.328-.328c.636-.636.77-.744.91-.803.097-.04.208-.06.555-.07"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.75 11.4c0 3.111 0 4.667.948 5.634C3.646 18 5.172 18 8.224 18h7.552c3.052 0 4.578 0 5.526-.966.948-.967.948-2.523.948-5.634V8.1c0-3.111 0-4.667-.948-5.633S18.828 1.5 15.776 1.5H8.224c-3.052 0-4.578 0-5.526.967-.948.966-.948 2.522-.948 5.633z"
      />
    </svg>
  );
};
export default Presentation_05;
