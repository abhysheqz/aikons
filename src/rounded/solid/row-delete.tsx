import React from "react";
const RowDelete: React.FC<
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
        d="M16.973 14.375c.76 0 1.38 0 1.88.045.517.047.983.147 1.405.397.326.194.612.446.837.746.3.4.422.85.478 1.334.052.457.052 1.02.052 1.686v.084c0 .666 0 1.23-.052 1.686-.056.485-.177.934-.478 1.334-.225.3-.511.552-.837.746-.422.25-.888.35-1.404.397-.5.045-1.121.045-1.881.045H6.777c-.76 0-1.38 0-1.88-.045-.517-.047-.983-.147-1.405-.397a2.9 2.9 0 0 1-.837-.746c-.3-.4-.422-.85-.478-1.334-.052-.457-.052-1.02-.052-1.686v-.084c0-.666 0-1.23.052-1.686.056-.485.177-.934.478-1.334.225-.3.511-.552.837-.746.422-.25.888-.35 1.404-.397.5-.045 1.121-.045 1.881-.045z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.168 1.418a1 1 0 0 1 1.414 0l2.293 2.293 2.293-2.292a1 1 0 0 1 1.414 1.414L19.29 5.125l2.292 2.292a1 1 0 0 1-1.414 1.415l-2.293-2.293-2.293 2.293a1 1 0 0 1-1.414-1.414l2.293-2.293-2.293-2.293a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.903 3.662c-.118-.15-.177-.226-.239-.257-.062-.03-.142-.03-.301-.03H6.777c-.76 0-1.38 0-1.88.045-.517.047-.983.147-1.405.397a2.9 2.9 0 0 0-.837.746c-.3.4-.422.85-.478 1.334-.052.457-.052 1.02-.052 1.686v.084c0 .666 0 1.23.052 1.686.056.485.177.934.478 1.334.225.3.511.552.837.746.422.25.888.35 1.404.397.5.045 1.121.045 1.881.045h10.196c.76 0 1.38 0 1.88-.045.517-.047.983-.147 1.405-.397.309-.184.463-.275.488-.408a.3.3 0 0 0-.012-.158c-.046-.127-.292-.224-.782-.419a2.5 2.5 0 0 1-.845-.556l-.807-.807c-.2-.2-.3-.3-.425-.3-.124 0-.224.1-.424.3l-.808.808a2.5 2.5 0 0 1-3.536-3.536l.808-.808c.2-.2.3-.3.3-.424s-.1-.224-.3-.424l-.808-.808a3 3 0 0 1-.204-.231"
      />
    </svg>
  );
};
export default RowDelete;
