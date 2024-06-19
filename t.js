declaredFunc();

function declaredFunc() {
  console.log("declared");
}

expressedFunc();
const expressedFunc = () => {
  console.log("expressed");
};
expressedFunc();
