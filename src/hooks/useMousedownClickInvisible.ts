import {RefObject, useEffect, useState} from "react";

 export const  useMousedownClickInvisible = (ref: RefObject<HTMLElement>, callback: () => void) => {
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback()
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

export const  useMouseoverClickInvisible = (ref: RefObject<HTMLElement>, callback: () => void) => {
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && ref.current.contains(event.target)) {
                callback()
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [ref]);
}
