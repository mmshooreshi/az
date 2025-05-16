/* js/main.js
 * A single utility used by all demos in Session 1.
 * Feel free to expand this file as the course progresses.
 */
export function flash(text) {
    alert(text);
  }
  
  /* Quick global shim so we can call window.flash() in inline demos.
     In a real project you’d use proper bundling/imports. */
  window.flash = flash;
  