import React from "react";

export const incrementLike = () => {
    return {
      type: 'INCREMENT'
    };
  };
  
  export const decrementLike = () => {
    return {
      type: 'DECREMENT'
    };
  };
  