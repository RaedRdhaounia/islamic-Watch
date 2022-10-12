import React from 'react';
import {Block, Product, Text} from '../../components';
import More from '../../components/More';
import Share from '../../components/Share';
import { IProduct } from '../../constants/types';
import {useTheme} from '../../hooks';

function Pray({products}) {
  const {sizes} = useTheme();
  return (
    <Block row wrap="wrap" justify="space-between" marginTop={sizes.sm}>
    {products?.map((product: JSX.IntrinsicAttributes & IProduct) => (
      <Product {...product} key={`card-${product?.id}`} />
    ))}
    <More />
    <Share />
  </Block>
  );
}

export default Pray;
