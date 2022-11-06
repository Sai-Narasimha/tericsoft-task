import { Container } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OptionsTabs } from "../Components/OptionsTabs";
import { get_data } from "../Redux/App/actions";

export const Gymnastics = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(get_data("gymnastics"));
  }, []);
  console.log(data);
  return (
    <>
      <Container  maxW="80%" h="85vh" bg="grey">
        <OptionsTabs data={data} />
      </Container>
    </>
  );
};
