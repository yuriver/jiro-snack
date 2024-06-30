'use client';

import React from 'react';

import ItemList from '@/components/ItemList';
import TabItem from '@/components/TabItem';

const Page = () => {
  return (
    <>
      <TabItem item={'snack'} />
      <ItemList product={'snack'} />
    </>
  );
};

export default Page;
