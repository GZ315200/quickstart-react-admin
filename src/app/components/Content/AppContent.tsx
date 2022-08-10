
import React, { useState } from 'react';
import { useUpdateLayoutEffect } from 'app/hooks';


export default function AppContent({ routes }) {
  const [count, setCount] = useState(0);
  const [updateLayoutEffectCount, setUpdateLayoutEffectCount] = useState(0);


  useUpdateLayoutEffect(() => {
    setUpdateLayoutEffectCount((c) => c + 1);
    return () => {
      // do something
     
    };
  }, [count]); // you can include deps array if necessary

  return (
    <div>
    <p>updateLayoutEffectCount: {updateLayoutEffectCount}</p>
    <p>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        reRender
      </button>
    </p>
  </div>
  )
}