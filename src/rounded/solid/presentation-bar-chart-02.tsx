import React from "react";
const PresentationBarChart_02: React.FC<
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
        d="M13 18a1 1 0 1 0-2 0v1.503c-.473.012-.909.055-1.32.226-.556.23-.982.657-1.46 1.138l-.099.098-.328.328a1 1 0 1 0 1.414 1.414l.328-.328c.636-.636.77-.744.91-.803.097-.04.207-.06.555-.07V22a1 1 0 1 0 2 0v-.494c.347.01.458.03.554.07.141.059.274.167.91.803l.329.328a1 1 0 0 0 1.414-1.414l-.328-.328-.099-.099c-.479-.48-.904-.907-1.46-1.137-.411-.17-.847-.214-1.32-.226z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.75 10.938c0 3.093 0 5.64.948 6.6.948.962 2.474.962 5.526.962h7.552c3.052 0 4.578 0 5.526-.961s.948-2.508.948-5.602V7.564c0-3.094 0-4.64-.948-5.602C20.354 1 18.828 1 15.776 1H8.224c-3.052 0-4.578 0-5.526.961S1.75 3.47 1.75 6.563zM13 6.566a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zm-4 3a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zm7 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PresentationBarChart_02;
