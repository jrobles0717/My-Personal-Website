import { useEffect } from "react";

export const useScrollToElement = (elementRef) => {
  useEffect(() => {
    const scrollToElement = () => {
      if (elementRef.current) {
        elementRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start", // Scroll to the top of the element
          inline: "nearest", // Scroll to the nearest edge of the element
        });
      }
    };

    scrollToElement();
  }, [elementRef]);
};

// export const useScrollToElement = (elementRef) => {
//   useEffect(() => {
//     const scrollToElement = () => {
//       if (elementRef.current) {
//         elementRef.current.scrollIntoView({ behavior: "smooth" });
//       }
//     };

//     scrollToElement();
//   }, [elementRef]);
// };
