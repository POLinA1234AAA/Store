import React from 'react';

import { Grid, GridItem, Card, Box, Image } from '@chakra-ui/react';
import Link from 'next/link';
const Products = ({data}) => {
    return (
        <div>
            <Grid templateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)' }} gap={6}>
                {data.map((product) => (
                    <GridItem key={product.id} colSpan={1}>
                        <Card>
                            <Link href={`/product/${product.id}`}>
                                <Image
                                    src={`/images${product.image}`}
                                    height={300}
                                    width={400}
                                    style={{ objectFit: 'cover', height: '250px' }}
                                    alt={product.title}
                                />
                                <Box py={1} px={2}>
                                    <h3>{product.title}</h3>
                                    <div>{product.description}</div>
                                    <div>${product.price}</div>
                                </Box>
                            </Link>
                        </Card>
                    </GridItem>
                ))}
            </Grid>
        </div>
    );
};

export default Products;