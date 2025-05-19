import React from "react";
const Cliparts: React.FC<
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
        d="M12.122 1.384c-.679-.218-1.217-.128-1.803-.03l-.08.013c-5.1.847-8.989 5.278-8.989 10.618 0 5.945 4.82 10.764 10.764 10.764 5.34 0 9.771-3.888 10.618-8.989l.013-.08c.099-.585.188-1.124-.03-1.803-.218-.682-.675-1.137-1.178-1.639L13.76 2.564c-.501-.503-.957-.96-1.639-1.18m.348 2.654 7.493 7.493c.2.2.347.35.455.467-3.678-.018-5.662-.172-6.952-1.462s-1.444-3.274-1.462-6.953c.117.109.266.256.466.455"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Cliparts;
