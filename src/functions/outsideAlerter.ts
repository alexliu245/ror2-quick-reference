/* eslint-disable max-len */
import React, { useEffect } from "react";

// Hook that alerts clicks outside of passed ref. Found from 
// https://codesandbox.io/s/outside-alerter-hooks-lmr2y?module=/src/OutsideAlerter.js&file=/src/OutsideAlerter.js

export function useOutsideAlerter(
	ref: React.RefObject<any>,
	eventToTrigger: () => void,
): void {
	useEffect(() => {
		// alert if clicked on outside of element
		function handleClickOutside(event: MouseEvent) {
			if (ref.current && !ref.current.contains(event.target)) {
				eventToTrigger();
			}
		}

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);
}