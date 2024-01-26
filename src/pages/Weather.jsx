import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../Redux/weatherSlice";
import { Box, Button, Flex, Heading, Image, Input } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

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
    <Box>
      <Box
        backgroundImage={"linear-gradient(to bottom , #E9F4F8, #7DC2E0)"}
        width={{ base: "45vh", md: "60vh", lg: "80vh" }}
        p={{ base: "15px", md: "35px" }}
        mt={"100px"}
        margin={"auto"}
      >
        <Box mb={{ base: "10px", md: "30px" }} textAlign={"left"}>
          <Heading fontFamily={"Teko"} size={"xl"} textColor={"#427D8A"}>
            React Weather
          </Heading>
        </Box>
        <Box mb={{ base: "15px", md: "30px" }} borderRadius={"10px"}>
          <Flex>
            <Input
              h={{ base: "35px", md: "40px" }}
              placeholder="London"
              w={"69vh"}
              bg={"white"}
              ref={city}
            />
            <Button
              ml={2}
              colorScheme="teal"
              bg={"#448895"}
              h={{ base: "35px", md: "40px" }}
              onClick={() => {
                const inputWords = city.current.value.split(" ");
                const firstWord = inputWords.length > 0 ? inputWords[0] : "";
                dispatch(fetchWeather(firstWord));
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
            <Flex
              justifyContent={"space-around"}
              direction={{ base: "column", md: "row" }}
            >
              {/* Paris */}

              <Box>
                <Flex direction={{ base: "row", md: "column" }}>
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
                      <Image
                        src={
                          data &&
                          `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
                        }
                        alt="Weather"
                      />
                      <Heading
                        size={"xl"}
                        fontFamily={"Teko"}
                        textColor={"grey"}
                      >
                        {data && Math.round(data.main.temp - 273.15) + "°C"}
                      </Heading>
                    </Flex>
                  </Box>
                  <Flex align={{ base: "flex-end", md: "flex-start" }}>
                    <Heading
                      fontFamily={"Teko"}
                      size={"md"}
                      textAlign={{ base: "left", md: "left" }}
                      mt={"15px"}
                      textColor={"#848585"}
                    >
                      {data && data.weather[0].main}
                    </Heading>
                  </Flex>
                </Flex>
              </Box>
              {/* Feels Like Section */}
              <Box w={{ md: "30%" }}>
                <Heading
                  size={"lg"}
                  mb={"8px"}
                  fontFamily={"Teko"}
                  textColor={"#484D4F"}
                  mt={{ base: "25px", md: "0" }}
                >
                  {data &&
                    "Feels like " +
                      Math.round(data.main.feels_like - 273.15) +
                      "°C"}
                </Heading>
                <Box
                  mb={"15px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-around"}
                >
                  <Box display={"flex"} alignItems={"center"}>
                    <Image
                      src="https://img.icons8.com/plumpy/24/up--v1.png"
                      h={6}
                    />
                    <Heading fontFamily={"Teko"} size={"md"}>
                      {data && Math.round(data.main.temp_max - 273.15) + "°C"}
                    </Heading>
                  </Box>
                  <Box display={"flex"} alignItems={"center"}>
                    <Image
                      src="https://img.icons8.com/plumpy/24/down.png"
                      h={6}
                    />
                    <Heading fontFamily={"Teko"} size={"md"}>
                      {data && Math.round(data.main.temp_min - 273.15) + "°C"}
                    </Heading>
                  </Box>
                </Box>
                <Box pb={"8px"}>
                  <Flex
                    gap={"20px"}
                    justifyContent={{
                      base: "space-around",
                      md: "space-between",
                    }}
                  >
                    <Box display={"flex"} gap={"5px"} alignItems={"center"}>
                      <Image
                        src="https://img.icons8.com/office/200/hygrometer.png"
                        height={5}
                      />
                      <Heading
                        textAlign={"center"}
                        size={"md"}
                        fontFamily={"Teko"}
                        textColor={"#848585"}
                      >
                        Humidity
                      </Heading>
                    </Box>
                    <Heading
                      size={"md"}
                      mr={"14px"}
                      fontFamily={"Teko"}
                      textColor={"#53ABBF"}
                    >
                      {data && data.main.humidity + "%"}
                    </Heading>
                  </Flex>
                </Box>
                <Box pb={"8px"}>
                  <Flex
                    gap={"20px"}
                    justifyContent={{
                      base: "space-around",
                      md: "space-between",
                    }}
                  >
                    <Box display={"flex"} gap={"5px"} alignItems={"center"}>
                      <Image
                        height={5}
                        src="https://img.icons8.com/external-justicon-flat-justicon/64/external-wind-weather-justicon-flat-justicon.png"
                      />
                      <Heading
                        size={"md"}
                        fontFamily={"Teko"}
                        textColor={"#848585"}
                        mr={{ base: 6, md: 0 }}
                      >
                        Wind
                      </Heading>
                    </Box>
                    <Heading
                      size={"md"}
                      fontFamily={"Teko"}
                      textColor={"#53ABBF"}
                    >
                      {data && Math.floor(data.wind.speed) + "kmph"}
                    </Heading>
                  </Flex>
                </Box>
                <Box pb={"8px"}>
                  <Flex
                    gap={"20px"}
                    justifyContent={{
                      base: "space-around",
                      md: "space-between",
                    }}
                  >
                    <Box display={"flex"} gap={"5px"} alignItems={"center"}>
                      <Image
                        src="https://img.icons8.com/fluency/48/barometer-gauge.png"
                        height={4}
                      />
                      <Heading
                        size={"md"}
                        fontFamily={"Teko"}
                        textColor={"#848585"}
                        mr={{ base: 2, md: 0 }}
                      >
                        Pressure
                      </Heading>
                    </Box>
                    <Heading
                      size={"md"}
                      fontFamily={"Teko"}
                      textColor={"#53ABBF"}
                    >
                      {data && data.main.pressure + "Pa"}
                    </Heading>
                  </Flex>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Weather;
