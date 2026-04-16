/**
 * 
 * @param {string} txt -- the input text to be slice
 * @param {number} [max=50]  -- the maximum length before transaction
 * @returns  The sliced text, with an ellipsis (...) appended if truncated
 */

export function slicerTxt(txt: string, max: number = 50) {
    if (txt.length >= max) return `${txt.slice(0, max)}...`;
    
        return txt;
    
}

/* utils folder is for utility functions that can be used across the application, such as text manipulation, date formatting, etc. The slicerTxt function is a common utility to truncate long text and add an ellipsis for better UI display. */