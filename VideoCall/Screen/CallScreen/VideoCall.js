import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  Image,
  Modal,
  TouchableOpacity, 
} from "react-native";

export default function VideoCall({ navigation }) {
  const [selectVideo, setSelectVideo] = useState(false);
  const [micOff, setMicOff] = useState(false);
  const [selfVideoCall, setSelfVideoCall] = useState(false);
  const [show, setShow] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);
  const VideoCallHandler = () => {
    setSelectVideo(!selectVideo);
  };

  const micOffHndler = () => {
    setMicOff(!micOff);
  };
                                
  const selfVideoCallHndler = () => {
    setSelfVideoCall(!selfVideoCall);
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../../image/CallingScreen/img9.png")}
          style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}
        >
          <View
            style={{
              flex: 1,
              padding: 10,
              flexDirection: "row",
              alignItems: "flex-start",
              width: "100%",
              justifyContent: "space-between",
              margin: 11,
            }}
          >
            <View></View>
            <TouchableOpacity
              onPress={() => setShow(true)}
              style={{ flexDirection: "row" }}
            >
              <Image source={require("../../image/CallingScreen/img3.png")} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "flex-start",
            }}
          ></View>
          <View
            style={{
              width: "100%",
              height: 100,
              margin: 20,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <View>
              <View
                style={{
                  width: 52,
                  height: 52,
                  backgroundColor: "#7D8E98",
                  borderRadius: 26,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../../image/CallingScreen/img10.png")}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => VideoCallHandler()}
              style={{
                width: 52,
                height: 52,
                borderRadius: 26,
                backgroundColor: "#71E079",
                alignItems: "center",
                justifyContent: "center",
                bottom: "0%",
              }}
            >
              <Image source={require("../../image/CallingScreen/img11.png")} />
            </TouchableOpacity>
            <View>
              <Image source={require("../../image/CallingScreen/img12.png")} />
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("UserOne")}
              style={{
                width: 52,
                height: 52,
                borderRadius: 26,
                backgroundColor: "#8B3B3E",
                alignItems: "center",
                bottom: "0%",
                justifyContent: "center",
              }}
            >
              <Image source={require("../../image/CallingScreen/img5.png")} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

      <Modal transparent={true} visible={show}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}
        >
          <View
            style={{ width: "100%", height: "100%", backgroundColor: "white" }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 30,
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity onPress={() => setShow(false)}>
                <Image source={require("../../image/HomeScreen/img14.png")} />
              </TouchableOpacity>
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{ fontSize: 16, fontWeight: "500", marginBottom: 6 }}
                >
                  Back to Chat Screen
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "rgba(0,0,0,0.3)",
                    marginBottom: 6,
                  }}
                >
                  Total Contacts 30
                </Text>
                <View
                  style={{
                    width: 145,
                    height: 3,
                    backgroundColor: "rgba(178, 178, 178, 0.5);",
                  }}
                ></View>
              </View>
              <View></View>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <View
                style={{
                  width: 276,
                  borderRadius: 8,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                  height: 40,
                  backgroundColor: "rgba(178, 178, 178, 0.5);",
                }}
              >
                <Image
                  source={require("../../image/HomeScreen/img3.png")}
                  style={{
                    tintColor: "rgba(28, 39, 76, 0.6);",
                    marginHorizontal: 20,
                  }}
                />
                <TextInput
                  style={{ width: 230, height: 40 }}
                  placeholder="Search by User name or Number"
                />
              </View>
              <View
                style={{
                  width: 39,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                  height: 40,
                  backgroundColor: "rgba(28, 39, 76, 0.06);",
                }}
              >
                <Text style={{ fontSize: 16 }}>A</Text>
              </View>
            </View>
            <View style={{ marginTop: 30, margin: 11 }}>
              <Text style={{ color: "rgba(28, 39, 76, 1);" }}>
                Must Conacted
              </Text>
            </View>

            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                height: 52,
                backgroundColor: "rgba(0, 0, 0, 0.04);",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", margin: 10 }}>
                <Image
                  source={require("../../image/HomeScreen/img8.png")}
                  style={{ width: 40, height: 40 }}
                />
                <View style={{ marginHorizontal: 10 }}>
                  <Text>User Name</Text>
                  <Text>User Sloagen</Text>
                </View>
              </View>
              <View
                style={{
                  width: 16,
                  height: 16,
                  borderWidth: 1,
                  margin: 20,
                  borderRadius: 8,
                }}
              ></View>
            </View>

            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                height: 52,
                backgroundColor: "rgba(0, 0, 0, 0.04);",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", margin: 10 }}>
                <Image
                  source={require("../../image/HomeScreen/img8.png")}
                  style={{ width: 40, height: 40 }}
                />
                <View style={{ marginHorizontal: 10 }}>
                  <Text>User Name</Text>
                  <Text>User Sloagen</Text>
                </View>
              </View>
              <View
                style={{
                  width: 16,
                  height: 16,
                  borderWidth: 1,
                  margin: 20,
                  borderRadius: 8,
                }}
              ></View>
            </View>

            <View style={{ marginTop: 30, margin: 11 }}>
              <Text style={{ color: "rgba(28, 39, 76, 1);" }}>A</Text>
            </View>

            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                height: 52,
                backgroundColor: "rgba(0, 0, 0, 0.04);",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", margin: 10 }}>
                <Image
                  source={require("../../image/HomeScreen/img8.png")}
                  style={{ width: 40, height: 40 }}
                />
                <View style={{ marginHorizontal: 10 }}>
                  <Text>User Name</Text>
                  <Text>User Sloagen</Text>
                </View>
              </View>
              <View
                style={{
                  width: 16,
                  height: 16,
                  borderWidth: 1,
                  margin: 20,
                  borderRadius: 8,
                }}
              ></View>
            </View>

            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                height: 52,
                backgroundColor: "rgba(0, 0, 0, 0.04);",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", margin: 10 }}>
                <Image
                  source={require("../../image/HomeScreen/img8.png")}
                  style={{ width: 40, height: 40 }}
                />
                <View style={{ marginHorizontal: 10 }}>
                  <Text>User Name</Text>
                  <Text>User Sloagen</Text>
                </View>
              </View>
              <View
                style={{
                  width: 16,
                  height: 16,
                  borderWidth: 1,
                  borderColor: "rgba(27, 196, 105, 1)",
                  backgroundColor: "rgba(27, 196, 105, 1)",
                  margin: 20,
                  borderRadius: 8,
                }}
              ></View>
            </View>

            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                  width: "95%",
                  margin: 10,
                  height: 83,
                  borderRadius: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    margin: 6,
                  }}
                >
                  <Text>User added to Call</Text>
                  <Text>Max. 4 User </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      width: "66%",
                    }}
                  >
                    <Image
                      source={require("../../image/HomeScreen/img8.png")}
                    />
                    <Image
                      source={require("../../image/HomeScreen/img8.png")}
                    />
                    <Image
                      source={require("../../image/HomeScreen/img8.png")}
                    />
                    <Image
                      source={require("../../image/HomeScreen/img8.png")}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("AddVideoCall"), setShow(false);
                    }}
                    style={{
                      borderRadius: 17,
                      width: 35,
                      height: 35,
                      backgroundColor: "rgba(52, 227, 107, 1)",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={require("../../image/CallingScreen/img5.png")}
                      style={{ tintColor: "white", width: 16, height: 16 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
