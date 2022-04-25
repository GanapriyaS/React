import { useLayoutEffect, useEffect, useRef } from "react";

function LayoutEffectTutorial() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.value = "HELLO";
  }, []);
  // useeffect after page loaded and uselayouteffect before render
  // called before useeffect when page renders
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  return (
    <div className="App">
      <input ref={inputRef} value="PEDRO" style={{ width: 400, height: 60 }} />
    </div>
  );
}

export default LayoutEffectTutorial;
