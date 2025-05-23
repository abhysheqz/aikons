import React from "react";
const StoreManagement_01: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.998 10v9a2 2 0 0 0 2 2h6M9.135 9.76c-1.2 1.306-2.883 1.305-3.857 1.13C3.772 10.62 2.632 9.427 2 8.52L3.608 3.4A2 2 0 0 1 5.516 2h12.968a2 2 0 0 1 1.908 1.4l1.605 5.098c-.878 1.313-3.333 3.808-6.783 1.648l-.488-.222m-5.59-.165c.518-.565.946-1.374 1.187-2.52M9.135 9.76c.59.666 2.233 1.759 4.268.96a4.3 4.3 0 0 0 1.323-.795m0 0c.856-.773 1.135-1.771 1.339-2.685M17.5 15.333V14m0 1.333c-.939 0-1.762.5-2.226 1.254m2.226-1.254c.939 0 1.762.5 2.226 1.254M17.5 22v-1.333m0 0c-.939 0-1.762-.5-2.226-1.254m2.226 1.254c.939 0 1.762-.5 2.226-1.254m-5.726.81 1.274-.81M21 15.779l-1.274.809M14 15.777l1.274.81M21 20.222l-1.274-.809m-4.452 0A2.7 2.7 0 0 1 14.875 18c0-.52.146-1.004.399-1.413m4.452 0c.253.41.399.894.399 1.413 0 .52-.146 1.004-.399 1.413"
      />
    </svg>
  );
};
export default StoreManagement_01;
