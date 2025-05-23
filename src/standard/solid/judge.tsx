import React from "react";
const Judge: React.FC<
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
        d="M8.143 12.413a1 1 0 0 1-.202 1.4l-4.74 3.545a.5.5 0 0 0-.201.4v3.766a1 1 0 1 1-2 0v-3.765a2.5 2.5 0 0 1 1.003-2.002l4.74-3.546a1 1 0 0 1 1.4.202m7.714 0a1 1 0 0 1 1.4-.202l4.74 3.546A2.5 2.5 0 0 1 23 17.759v3.765a1 1 0 1 1-2 0v-3.765a.5.5 0 0 0-.2-.4l-4.74-3.546a1 1 0 0 1-.203-1.4"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.22 1.405c1.006-.183 2.175-.223 3.49-.018 1.99.31 3.274 1.107 4.063 2.035.55.645.838 1.33.967 1.905.723.166 1.693.658 2.339 2.007.56 1.171.172 2.261-.346 2.993.613.762.704 1.673.46 2.46-.284.91-1.057 1.748-2.015 1.897-.67.105-1.262.047-1.768-.162a2.53 2.53 0 0 1-1.143-.94c-.503-.748-.595-1.671-.506-2.293l.008-.054c.022-.153.033-.229.036-.335a4 4 0 0 0-.041-.61c-.062-.53-.204-1.307-.502-1.972-.296-.66-.671-1.058-1.128-1.174l-.014.001a.475.475 0 0 0-.326.18c-.251.313-.58.56-.87.718-.146.08-.307.15-.468.193a1.3 1.3 0 0 1-.29.044 1 1 0 0 1-.161-.008c-.551.01-1.185-.325-1.792-.953-.11-.114-.192-.14-.242-.147a.5.5 0 0 0-.234.027.9.9 0 0 0-.37.246c-.681.712-1.307 2.29-1.14 3.938q.01.076.016.154c.054.61-.049 1.481-.562 2.178-.562.763-1.509 1.173-2.814.97-.958-.15-1.73-.989-2.014-1.899a2.62 2.62 0 0 1 .46-2.46c-.519-.73-.907-1.821-.347-2.992.646-1.35 1.616-1.84 2.34-2.007A4.5 4.5 0 0 1 6.35 3.331q.092-.105.206-.216c.785-.777 1.96-1.424 3.665-1.71"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.848 15.854c1.345-.884 2.606-2.66 2.408-5.7l-1.497.098c.18 2.75-1.052 4.007-2.014 4.513-.55.29-1.155.468-1.742.488-.933.033-2.317-.357-3.252-2.109a4.7 4.7 0 0 1-.528-1.777.75.75 0 0 0-1.488.184l.016.145c.091.724.304 1.457.677 2.155.474.89 1.056 1.531 1.673 1.981l-1.2 5.4a1.25 1.25 0 0 0 1.221 1.52h5.748a1.25 1.25 0 0 0 1.218-1.531z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Judge;
