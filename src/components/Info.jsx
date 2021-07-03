import React from 'react';

const Info = ({ children: value = 'valor', label = 'Label:' }) => {
  return (
    <span className="text-sm">
      <strong>{label}</strong> {value}
    </span>
  );
};

export default Info;
