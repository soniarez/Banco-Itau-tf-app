import React from 'react';

const Selection = ({ companiesData }) => {
  const companiesArr = companiesData.map((item) => {
    return item['Razon Social'];
  });

  const companiesAccArr = companiesData.map((item) => {
    return item.accounts;
  });

  console.log('acounts', companiesAccArr);

  return (
    <div className='orderitem-delete'>
      <select className='orderitem-size' defaultValue='Size'>
        <option value={companiesArr[0]}>{companiesArr[0]}</option>
        <option value={companiesArr[1]}>{companiesArr[1]}</option>
        <option value={companiesArr[2]}>{companiesArr[2]}</option>
        <option value={companiesArr[3]}>{companiesArr[3]}</option>
        <option value={companiesArr[4]}>{companiesArr[4]}</option>
        <option value={companiesArr[5]}>{companiesArr[5]}</option>
      </select>
    </div>
  );
};

export default Selection;
