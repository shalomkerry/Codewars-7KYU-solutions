// https://www.codewars.com/kata/62ad72443809a4006998218a/train/javascript
function LikeorDislike(buttons) {
  let Nothing = "Nothing";
  return buttons.reduce(
    (state, button) => (state == button ? Nothing : button),
    Nothing
  );
}
console.log(LikeorDislike(["Like", "Like", "Dislike"]));
