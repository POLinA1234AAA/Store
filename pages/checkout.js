import React from 'react';
import ShippingAddressForm from "@/commponents/forms/Shipping";
import {useDispatch, useSelector} from "react-redux";
import {Box, Card, CardBody, CardHeader, Progress} from "@chakra-ui/react";
import {PaymentMethod} from "@/commponents/Payment";
import {OrderReview} from "@/commponents/OrderReview";
const CheckoutPage = () => {
    const dispatch = useDispatch();
    const activeStep = useSelector((state) =>state.currentStep );

    const steps = [
        { name: 'Shipping', component: <ShippingAddressForm /> },
        { name: 'Payment', component: <PaymentMethod/>},
        { name: 'Review', component: <OrderReview/> },
    ];
    return (
        <div>
            <Progress value={activeStep} max = {steps.length}></Progress>
            {/*<ShippingAddressForm></ShippingAddressForm>*/}
            <Box mx = "auto">
                <Card w ="xl" m="auto">
                    <CardHeader>
                        {steps[activeStep].name}
                    </CardHeader>
                    <CardBody>
                        {steps[activeStep].component}
                    </CardBody>
                </Card>
            </Box>

        </div>
    );
};

export default CheckoutPage;