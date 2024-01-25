import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../Redux/weatherSlice";
import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useEffect, useRef, useState } from "react";

const Weather = () => {
  const city = useRef();
  const dispatch = useDispatch();
  const data = useSelector((store) => {
    return store.weather.data;
  });
  console.log(data);

  useEffect(() => {
    dispatch(fetchWeather());
  }, []);

  return (
    <Box bg={"lightblue"} width={"80vh"} p={"30px"}>
      <Box mb={"30px"} textAlign={"left"}>
        <Heading fontFamily={"Teko"} size={"xl"} textColor={"#427D8A"}>
          React Weather
        </Heading>
      </Box>
      <Box mb={"30px"} borderRadius={"10px"}>
        <Flex>
          <Input placeholder="London" w={"60vh"} bg={"white"} ref={city} />
          <Button
            ml={2}
            colorScheme="teal"
            bg={"#448895"}
            onClick={() => {
              dispatch(fetchWeather(city.current.value));
            }}
          >
            Search
          </Button>
        </Flex>
      </Box>
      <Box bg={"white"} borderRadius={"10px"} padding={"20px"}>
        <Box>
          <Heading
            size={"lg"}
            mb={"25px"}
            fontFamily={"Teko"}
            textColor={"grey"}
          >
            Current Weather
          </Heading>
        </Box>
        <Box>
          <Flex justifyContent={"space-around"}>
            {/* Paris */}
            <Box>
              <Heading
                fontFamily={"Teko"}
                size={"lg"}
                textAlign={"left"}
                mb={"10px"}
                textColor={"#53ABBF"}
              >
                {data && data.name}
              </Heading>
              <Box>
                <Flex gap={"20px"}>
                  <Heading>Sky</Heading>
                  <Heading size={"xl"} fontFamily={"Teko"}>
                    36
                  </Heading>
                </Flex>
              </Box>
              <Heading
                fontFamily={"Teko"}
                size={"md"}
                textAlign={"left"}
                mt={"15px"}
                textColor={"#848585"}
              >
                Clear Sky
              </Heading>
            </Box>
            {/* Feels Like Section */}
            <Box w={"30%"}>
              <Heading
                size={"lg"}
                mb={"10px"}
                fontFamily={"Teko"}
                textColor={"#484D4F"}
              >
                Feels like 34
              </Heading>
              <Box pb={"8px"}>
                <Flex gap={"20px"} justifyContent={"space-between"}>
                  <Heading
                    size={"md"}
                    fontFamily={"Teko"}
                    textColor={"#848585"}
                  >
                    Humidity
                  </Heading>
                  <Heading
                    size={"md"}
                    mr={"14px"}
                    fontFamily={"Teko"}
                    textColor={"#53ABBF"}
                  >
                    23%
                  </Heading>
                </Flex>
              </Box>
              <Box pb={"8px"}>
                <Flex gap={"20px"} justifyContent={"space-between"}>
                  <Heading
                    size={"md"}
                    fontFamily={"Teko"}
                    textColor={"#848585"}
                  >
                    Wind
                  </Heading>
                  <Heading
                    size={"md"}
                    fontFamily={"Teko"}
                    textColor={"#53ABBF"}
                  >
                    9kmph
                  </Heading>
                </Flex>
              </Box>
              <Box pb={"8px"}>
                <Flex gap={"20px"} justifyContent={"space-between"}>
                  <Heading
                    size={"md"}
                    fontFamily={"Teko"}
                    textColor={"#848585"}
                  >
                    Pressure
                  </Heading>
                  <Heading
                    size={"md"}
                    fontFamily={"Teko"}
                    textColor={"#53ABBF"}
                  >
                    1017Pa
                  </Heading>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Weather;
