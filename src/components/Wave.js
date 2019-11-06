import React, { useState } from 'react';
import styled from 'styled-components';

const Wave = () => {
  const [waves, setWaves] = useState(0);
  const label = `👋${waves} ${waves === 1 ? 'wave' : 'waves'}`;
  return (
    <button
      className="bg-purple white"
      type="button"
      onClick={() => {
        setWaves(waves + 1);
      }}
    >
      {label}
    </button>
  );
};

export default Wave